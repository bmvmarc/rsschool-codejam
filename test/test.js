var assert = require('assert');

const sumOfOther = require('../src/sumOfOther.js');
const make = require('../src/make.js');
const recursion = require('../src/recursion.js');


describe('Array', function() {

    describe('#sumOfOther()', function() {
        it('should return [] when the value is []', function() {
            assert.deepEqual(sumOfOther([]), []);
        });
        it('should return [0] when there is only one element in the array', function() {
            assert.deepEqual(sumOfOther([5]), [0]);
        });
        it('should return [16, 11, 9] when the value is [2,7,9]', function() {
            assert.deepEqual(sumOfOther([2,7,9]), [16, 11, 9]);
        });
    });

    describe('#make()', function() {

        function sum(a, b) {
            return a + b;
        }
        function mult(a, b) {
            return a * b;
        }
        it('should return 777 ', function() {
            assert.deepEqual(make(15)(34, 21, 666)(41)(sum), 777);
        });
        it('should return 762 when there is an empty argument', function() {
            assert.deepEqual(make()(34, 21, 666)(41)(sum), 762);
        });
        it('should return 120 when we want to multiply', function() {
            assert.deepEqual(make(4)(2, 3, 1)(5)(mult), 120);
        });
        it('should return passed argument when we are passing only one argument', function() {
            assert.deepEqual(make(5)(mult), 5);
        });
        it('should return "undefined" when there is no arguments', function() {
            assert.deepEqual(make()(mult), undefined);
        });
    });


    describe('#recursion()', function() {

        let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},
            "right":{"value":120,"left":{"value":110},"right":{"value":130}}};

        it('should return [[100], [90, 120], [70,99,110,130]]', function() {
            assert.deepEqual(recursion(tree), [[100], [90, 120], [70,99,110,130]]);
        });

        let tree1 = {"value":666};
        it('should return [[666]]', function() {
            assert.deepEqual(recursion(tree1), [[666]]);
        });

        let tree2 = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}}};

        it('should return [[100], [90], [70,99]]', function() {
            assert.deepEqual(recursion(tree2), [[100], [90], [70,99]]);
        });
    });
});