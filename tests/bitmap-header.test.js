const assert = require('assert');
const constants = require('../lib/bitmap-constants');
const BitmapHeader = require('../lib/bitmap-header');
const fs = require('file-system');

describe.only('bitmap header', () => {

    let buffer = null;
    before(() => {
        // TODO: read './test/test-bitmap.bmp' into buffer variable
        buffer = fs.readFileSync('./tests/test-bitmap.bmp');
    });

    it.only('has correct specs', () => {
        // TODO: read the docs to figure out what these values should be
        assert.ok(constants.PIXEL_OFFSET);
        assert.ok(constants.BITS_PER_PIXEL_OFFSET);
        assert.ok(constants.FILE_SIZE_OFFSET);
    });

    it('parses header data', () => {
        // TODO: use the constants to populate the following properties
        // on the BitmapHeader in its constructor
        const header = new BitmapHeader(buffer);
        assert.equal(header.pixelOffset, 54);
        assert.equal(header.bitsPerPixel, 24);
        assert.equal(header.fileSize, 30054);
    });
});
