const assert = require('assert');
//const mocha = require('mocha')
const addition = require('../src/Addition/addition.js')

//var describe=mocha.describe;
//var it = mocha.it;

describe('testing for addition', function () {
    it('checking for two positive numbers', function () {
        let add_result = addition(5, 6);
        assert.equal(add_result, 11);
    });
    it('checking for two negative numbers', function () {
        let add_result = addition(-5,-6);
        assert.equal(add_result,-11);
    });
    it('checking for one positive and one negative numbers', function () {
        let add_result = addition(5,-6);
        assert.equal(add_result,-1);
    });
    it('checking for two zeroes', function () {
        let add_result = addition(0,0);
        assert.equal(add_result, 0);
    });
})