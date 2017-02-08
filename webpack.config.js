/**
 * @file webpack配置文件
 * @author
 */

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
// 一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
var NODE_MODULES = path.resolve(ROOT_PATH, 'node_modules');
var TEMPLATE = path.join(ROOT_PATH, './app/index.tpl');
// 页面上的供开发使用的console
var VCONSOLE = path.join(NODE_MODULES, 'vconsole/dist/vconsole.min.js');
// 添加adaptive
var fileName = path.resolve(NODE_MODULES, 'adaptive.js/js/adaptive.js');
var adaptiveText = fs.readFileSync(fileName, 'utf8');

var precss = require('precss');
var autoprefixer = require('autoprefixer');
var atImport = require('postcss-import');
module.exports = {
    // 项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    context: APP_PATH,
    entry: {
        app: ['./App.jsx'],
        vconsole: VCONSOLE
    },
    // 输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/'
    },
    resolve: {
        extensions: [
            '',
            '.js',
            '.jsx'
        ]
    },
    // 生成sourcemap,便于开发调试
    devtool: 'cheap-source-map',
    module: {
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
                include: APP_PATH
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=40000'
            },
            {
                test: /\.js[x]?$/,
                include: [APP_PATH, path.resolve(NODE_MODULES, 'react-deltaui')],
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
    // 添加我们的插件 会自动生成一个html文件
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new HtmlwebpackPlugin({
            title: '',
            template: TEMPLATE,
            filename: 'index.html',
            // chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: [
                // 'vconsole',
                'app'
            ],
            // 要把script插入到标签里
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
