const BitmapHeader = require('./bitmap-header');

class BitmapTransformer {
    constructor(buffer) {
        this.buffer = buffer;
        this.header = new BitmapHeader(buffer);
    }

    transform(transformation) {
        for (let i = this.header.pixelOffset; i < this.header.fileSize; i = i + 3) {
            let b = 255 - this.buffer.readUInt8(i);
            let g = 255 - this.buffer.readUInt8(i + 1);
            let r = 255 - this.buffer.readUInt8(i + 2);
                        
            this.buffer.writeUInt8(b, i);
            this.buffer.writeUInt8(g, i + 1);
            this.buffer.writeUInt8(r, i + 2);
        }
        return transformation;
    }
}

module.exports = BitmapTransformer;