const areaOfCircle = (radius) => {
    return Math.PI * Math.pow(radius, 2);
}

const checkUpperCaseLetter = (string) => {
    return /[A-Z]/.test(string[0]);
}


module.exports = {
    areaOfCircle,
    checkUpperCaseLetter
}