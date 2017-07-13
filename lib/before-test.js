const fs = require('file-system');

const beforeTest = function () {
    return fs.readFileSync('./tests/test-bitmap.bmp');
};

module.exports = beforeTest;