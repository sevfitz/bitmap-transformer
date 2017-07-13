function grayscale(rgbObj) {
    let obj = rgbObj;
    let avg = (obj.r + obj.g + obj.b)/3;

    rgbObj.r = avg;
    rgbObj.g = avg;
    rgbObj.b = avg;

    return rgbObj;
}

module.exports = grayscale;