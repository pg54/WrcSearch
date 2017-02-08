/**
 * @file   webpack.config.js
 * @author baidu.inc
 */

var projectName = 'WrcSearch';
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var atImport = require('postcss-import');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin'); // 清理文件夹
// 一些路径信息
var ROOT_PATH = path.resolve(__dirname);
var NODE_PATH = path.resolve(ROOT_PATH, 'node_modules');
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var REACT = path.resolve(NODE_PATH, 'react/dist/react.min.js');
var REACTDOM = path.resolve(NODE_PATH, 'react-dom/dist/react-dom.min.js');
var fileName = path.resolve(NODE_PATH, 'adaptive.js/js/adaptive.js');
var adaptiveText = fs.readFileSync(fileName, 'utf8');
module.exports = {
    context: path.join(__dirname, 'app'),
    entry: {
        app: './app.jsx',
        vendors: [
            'react',
            'react-dom',
            'react-router',
            'zepto'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'examples'),
        filename: '/assets/' + projectName + '/js/[name]_[hash:8].js',
        chunkFilename: '/assets/' + projectName + '/js/[name]_[hash:8]_chunk.js',
        publicPath: ''
    },
    module: {
        noParse: [REACT],
        loaders: [
            {
                test: require.resolve('zepto'),
                loader: 'exports?window.Zepto!script'
            },
            {
                test: /\.js[x]?$/,
                // exclude: /node_modules/,
                include: [APP_PATH, path.resolve(NODE_PATH, 'react-deltaui')],
                loader: 'babel'
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
                test: /\.css/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'px-rem',
                    'postcss-loader'
                ]
            },
            {
                test: /\.useable\.less$/,
                exclude: /node_modules/,
                loader: 'style/useable!css!px-rem!postcss!less'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader?name=/assets/' + projectName + '/img/[name]_[hash:8].[ext]'
                // loader: 'url?limit=1024'
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
    postcss: function (webpack) {
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
    resolve: {
        extensions: [
            '',
            '.js',
            '.jsx'
        ],
        alias: {
            'react': REACT,
            'react-dom': REACTDOM
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            DEBUG: false
        }),
        // new ExtractTextPlugin('app.min.css'),

        new CleanPlugin(['examples']),

        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendors', 'manifest'],
            filename: '/assets/' + projectName + '/js/[name]_[hash:8].js'
        }),
        // 使用uglifyJs压缩JS代码
        /* eslint-disable fecs-camelcase */
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        }),
        /* eslint-enable fecs-camelcase */
        new HtmlWebpackPlugin({
            title: 'credit-h5',
            template: path.join(__dirname, './app/index.tpl'),
            filename: './template/' + projectName + '/index.html',
            // chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: [
                'manifest',
                'vendors',
                'app'
            ],
            minify: {
                minifyJS: true,
                removeComments: true,
                minifyCSS: true
            },
            // 要把script插入到标签里
            inject: 'body',
            chunksSortMode: 'dependency',
            adaptive: adaptiveText
        }),
        // 提供全局的zepto，不用每个文件都引用
        new webpack.ProvidePlugin({
            $: 'zepto'
        })
    ]
};
