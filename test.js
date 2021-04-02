const assert = require("assert").strict;
const { checkUpperCaseLetter, areaOfCircle } = require("./functions")

describe("Test functions", () => {
    it('should return area of circle', () => {
        const radius = 10;
        const area = areaOfCircle(radius);
        console.log({ radius, area });
        assert.equal(area, 314.1592653589793)
    })

    it('first letter is uppercase', () => {
        const testString = "Uppercase";
        assert.equal(checkUpperCaseLetter(testString), true);
    })

    it('first letter is lowercase', () => {
        const testString = "lowercase";
        assert.equal(checkUpperCaseLetter(testString), false);
    })

    it('null for radius', () => {
        const radius = null;
        const area = areaOfCircle(radius);
        assert.equal(area, 0)
    })

    it('should return negative area of circle', () => {
        const radius = -1;
        const area = areaOfCircle(radius);
        assert.equal(area, 3.141592653589793)
    })
})