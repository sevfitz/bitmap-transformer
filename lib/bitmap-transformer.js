const BitmapHeader = require('./bitmap-header');

class BitmapTransformer {
    constructor(buffer) {
        this.buffer = buffer;
        this.header = new BitmapHeader(buffer);
    }

    transform(transformation) {
        const buffer = this.buffer;
        const header = this.header;

        let currentOffset = header.pixelOffset;
        const bitsPP = header.bitsPerPixel;
        
        // now i updates as desired
        // TODO for Mark, Stephanie, and Meryl: put the variables back in,
        // convert the sliced data from hex to decimal,
        // run it through the given function(invert or grayscale),
        // convert it back to hex, and write it to the file in 
        // the same location (i.e. within the loop)
        // note I disabled the test for this so the lab could pass Travis - Steph
        for (let i = 54; i < 30000; i += 32) {
            let tempBuffer = buffer.slice(currentOffset, currentOffset + 24);
            currentOffset = currentOffset + bitsPP + 8;
            console.log('temp buffer is', tempBuffer);
            // return tempBuffer;
        }
        transformation(buffer);
    }

}

module.exports = BitmapTransformer;