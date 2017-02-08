var fs = require('fs');
var path = require('path');

var root = path.resolve(__dirname, '../');
var mockPath = path.resolve(root, 'mock');

module.exports = function readJSON(filename) {
    return JSON.parse(fs.readFileSync(path.join(mockPath, filename), 'utf-8'));
};
