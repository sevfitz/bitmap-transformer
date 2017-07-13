const assert = require('assert');
const BitmapTransformer = require('../lib/bitmap-transformer');
const invert = require('../lib/invert-transformer');
const fs = require('file-system');
const beforeTest = require('../lib/before-test');



describe('bitmap file transformer', () => {
    
    let buffer = null;
    
    before(() => {
       
        buffer = beforeTest(); 

    });

    it('test whole transform', () => {
       
        const bitmap = new BitmapTransformer(buffer);

        bitmap.transform(invert);
        
        const buffer2 = fs.readFileSync('./tests/inverted-expected.bmp');

        assert.deepEqual(bitmap.buffer, buffer2);
    });
});
