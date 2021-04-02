const areaOfCircle = (radius) => {
    return (radius) ? Math.PI * Math.pow(radius, 2) : 0;
}

const checkUpperCaseLetter = (string) => {
    return (string) ? /[A-Z]/.test(string[0]) : false;
}


module.exports = {
    areaOfCircle,
    checkUpperCaseLetter
}