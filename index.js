const { areaOfCircle, checkUpperCaseLetter } = require("./functions");

// AREA OF CIRCLE
const radius = 10;
const area = areaOfCircle(radius);
console.log('area: ', area);

// CHECK IF FIRST LETTER IS UPPERCASE
const uppercaseString = "Uppercase";
const uppercaseTest = checkUpperCaseLetter(uppercaseString);
console.log(uppercaseString, uppercaseTest);

const lowercaseString = "lowercase";
const lowercaseTest = checkUpperCaseLetter(lowercaseString);
console.log(lowercaseString, lowercaseTest);