var express = require('express');
var path = require('path');

var readJSON = require('./readJSON');

var app = express();
var root = path.resolve(__dirname, '../');
var devPath = path.resolve(root, 'dist');

app.use(express.static(devPath));


// app.get('/h5/*', function (request, response) {
//     response.sendFile(path.resolve(devPath, 'template', 'credit-h5/index.html'));
// });

app.get('/', function (req, res) {
    res.send('It works! ');
});

// api接口配置
app.get('/ebbp/city', function (req, res) {
    res.json(readJSON('city.json'));
});
// 404
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// other error
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    var response = [
        '<p>' + err.status + ' ' + err.message + '</p>',
        '<pre>' + err.stack + '</pre>'
    ].join('');
    res.send(response);
});
// 启动 mock server
app.listen(9999, function () {
    console.log('mock server is listening on port 9999 !');
});
