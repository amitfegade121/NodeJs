const assert = require('assert');
const multiplication = require('../src/Multiplication/multiplication.js')

describe('testing for multiplication', function () {
    it('checking for two positive numbers', function () {
        let mul_result = multiplication(4, 6);
        assert.equal(mul_result, 24);
    });
    it('checking for two negative numbers', function () {
        let mul_result = multiplication(-12,-6);
        assert.equal(mul_result,72);
    });
    it('checking for one positive and one negative numbers', function () {
        let mul_result = multiplication(12,-6);
        assert.equal(mul_result,-72);
    });
    it('checking for one zero', function () {
        let mul_result = multiplication(10,0);
        assert.equal(mul_result, 0);
    });
})