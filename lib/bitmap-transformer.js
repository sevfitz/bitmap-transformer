
class BitmapTransformer {
    constructor(buffer) {
        this.buffer = buffer;
        this.header = new BitmapHeader();
    }

    transform(transformation) {
        const buffer = this.buffer;
        const header = this.header;
        transformation(buffer);
    }

}

module.exports = BitmapTransformer;