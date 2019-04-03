const assert = require('assert');
const subtraction = require('../src/Subtraction/subtraction.js')

describe('testing for subtraction', function () {
    it('checking for two positive numbers', function () {
        let sub_result = subtraction(4, 6);
        assert.equal(sub_result, -2);
    });
    it('checking for two negative numbers', function () {
        let sub_result = subtraction(-2,-2);
        assert.equal(sub_result,0);
    });
    it('checking for one positive and one negative numbers', function () {
        let sub_result = subtraction(12,-6);
        assert.equal(sub_result,18);
    });
    it('checking for one zero', function () {
        let sub_result = subtraction(10,0);
        assert.equal(sub_result, 10);
    });
    it('checking for two zeroes', function () {
        let sub_result = subtraction(0,0);
        assert.equal(sub_result, 0);
    });
})