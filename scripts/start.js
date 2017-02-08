var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var nodemon = require('nodemon');
var program = require('commander');

var config = require('./config');
var webpackConfig = require('../webpack.config');

program
    .option('-p --proxy', 'user it own proxy')
    .parse(process.argv);
// 使用nodemon管理mock服务， 可以自动重启
var mockScript = path.join(__dirname, 'mockServer.js');

if (program.proxy) {
    nodemon({
        script: mockScript,
        verbose: true,
        ignore: ['app/*', 'output/*', 'node_modules/*', 'dist/*'],
        execMap: {
            js: 'node'
        }
    }).on('start', function () {
        console.log('\x1b[31m%s\x1b[0m', '[nodemon] mock server has started');
    }).on('quit', function () {
        console.log('\x1b[31m%s\x1b[0m', '[nodemon] mock server has quit');
    }).on('restart', function (files) {
        console.log('\x1b[31m%s\x1b[0m', '[nodemon] mock server restarted due to:', files);
    });
}

// webpack-dev-server 添加webpack-hot-module-reload配置，
webpackConfig.entry.app.unshift('webpack-dev-server/client?http://0.0.0.0:' + config.dev.port + '/', 'webpack/hot/dev-server');
var compiler = webpack(webpackConfig);
var webpackDevServerConfig = {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    host: '0.0.0.0'
};
webpackDevServerConfig.proxy = {
    '/ebbp/**': {
        target: 'http://localhost:9999'
    }
};

var webpackServer = new WebpackDevServer(compiler, webpackDevServerConfig);
webpackServer.listen(config.dev.port);
