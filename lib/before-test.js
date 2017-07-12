const fs = require('file-system');

const runBefore = function () {
    return fs.readFileSync('./tests/test-bitmap.bmp');
};

module.exports = runBefore;