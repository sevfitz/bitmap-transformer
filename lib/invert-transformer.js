function invert(rgbObj) {
    let obj = rgbObj;

    rgbObj.r = 255 - obj.r;
    rgbObj.g = 255 - obj.g;
    rgbObj.b = 255 - obj.b;

    return rgbObj;
}

module.exports = invert;