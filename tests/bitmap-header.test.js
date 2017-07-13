const assert = require('assert');
const constants = require('../lib/bitmap-constants');
const BitmapHeader = require('../lib/bitmap-header');
const beforeTest = require('../lib/before-test');

describe('bitmap header', () => {

    let buffer = null;
    before(() => {
        // DONE: read './test/test-bitmap.bmp' into buffer variable
        buffer = beforeTest();
    });

    it('has correct specs', () => {
        // DONE: read the docs to figure out what these values should be
        assert.ok(constants.PIXEL_OFFSET);
        assert.ok(constants.BITS_PER_PIXEL_OFFSET);
        assert.ok(constants.FILE_SIZE_OFFSET);
    });

    it('parses header data', () => {
        // DONE: use the constants to populate the following properties
        // on the BitmapHeader in its constructor
        const header = new BitmapHeader(buffer);
        assert.equal(header.pixelOffset, 54);
        assert.equal(header.bitsPerPixel, 24);
        assert.equal(header.fileSize, 30054);
    });
});
