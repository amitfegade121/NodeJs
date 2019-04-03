const assert = require('assert');
const division = require('../src/Division/division.js')

describe('testing for division', function () {
    it('checking for two positive numbers', function () {
        let div_result = division(12, 6);
        assert.equal(div_result, 2);
    });
    it('checking for two negative numbers', function () {
        let div_result = division(-12,-6);
        assert.equal(div_result,2);
    });
    it('checking for one positive and one negative numbers', function () {
        let div_result = division(12,-6);
        assert.equal(div_result,-2);
    });
    it('checking for denominator zero', function () {
        let div_result = division(10,0);
        assert.equal(div_result, Infinity);
    });
    it('checking for two zeroes', function () {
        let div_result = division(0,0);
        assert.equal(isNaN(div_result), true)
    });
})