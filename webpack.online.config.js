/**
 * @file   webpack.config.js
 * @author baidu.inc
 */
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');

// 一些路径信息
var ROOT_PATH = path.resolve(__dirname);
var NODE_PATH = path.resolve(ROOT_PATH, 'node_modules');
var REACT = path.resolve(NODE_PATH, 'react/dist/react.js');
var REACTDOM = path.resolve(NODE_PATH, 'react-dom/dist/react-dom.js');

// 添加adaptive
var fileName = path.resolve(NODE_PATH, 'adaptive.js/js/adaptive.js');
var adaptiveText = fs.readFileSync(fileName, 'utf8');

// postcss
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var atImport = require('postcss-import');
var importReplace = require('postcss-import-replace');

module.exports = {
    context: path.join(__dirname, ''),
    // 获取项目入口JS文件
    entry: {
        index: './Index.jsx',
        vendors: [
            'react',
            'react-dom'
        ]
    },
    output: {
        // 文件输出目录
        path: path.resolve(__dirname, 'examples'),
        // 根据entry的入口名称生成多个js文件
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].chunk.js',
        // 用于配置文件发布路径，如CDN或本地服务器
        publicPath: '.'
    },
    // 各种加载器，让各种文件格式可用require引用
    module: {
        noParse: [REACT],
        // preLoaders: [
        //     {
        //         test: /\.js[x]?$/,
        //         loader: 'source-map-loader'
        //     }
        // ],
        loaders: [
            {
                test: require.resolve('zepto'),
                loader: 'exports?window.Zepto!script'
            },
            {
                test: /\.less$/,
                exclude: /\.useable\.less$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'px-rem',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.useable\.less$/,
                exclude: /node_modules/,
                loaders: [
                    'style-loader/useable',
                    'css-loader',
                    'px-rem',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'px-rem',
                    'postcss-loader'
                ],
                exclude: /node_modules/,
                include: ROOT_PATH
            },
            {
                test: /\.(png|jpg)$/,
                include: [ROOT_PATH, path.resolve(NODE_PATH, 'react-deltaui')],
                loader: 'url-loader?limit=40000'
            },
            {
                test: /\.js[x]?$/,
                include: [ROOT_PATH, path.resolve(NODE_PATH, 'react-deltaui')],
                loader: 'babel-loader'
            },
            {
                test: /\.duss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'px-rem',
                    'postcss-loader'
                ]
            }

        ]
    },
    postcss: function(webpack) {
        var option = {
            atImport: {
                addDependencyTo: webpack
            }
        };
        return [
            atImport(option.atImport),
            precss,
            autoprefixer
        ];
    },
    // 在JS中import加载jsx这种扩展名
    resolve: {
        root: path.resolve(ROOT_PATH, ''),
        extensions: [
            '',
            '.js',
            '.jsx'
        ],
        // 配置别名，在项目中可缩减引用路径
        alias: {
            'react': REACT,
            'react-dom': REACTDOM
        }
    },

    // 生成sourcemap,便于开发调试
    devtool: 'cheap-source-map',
    // enable dev server
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        progress: true,
        host: '0.0.0.0'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),
        new CleanPlugin(['examples']),
        new HtmlWebpackPlugin({
            title: 'WrcSearch',
            filename: './index.html',
            template: './index.html.tpl',
            // chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: [
                'vendors',
                'index'
            ],
            inject: 'body',
            chunksSortMode: 'dependency',
            adaptive: adaptiveText
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'zepto'
        })
    ]
};
