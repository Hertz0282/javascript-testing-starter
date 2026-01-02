import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro.js";
import { fizzBuzz } from "../src/intro.js";
import { calAverage } from "../src/intro.js";
import { calFactorial } from "../src/intro.js";

// describe take two arguments first is a string second is a callback function. The string is the name of the test suite which is usually the name of the function we are testing. The callback function contains one or more tests.
describe('max', () => { 
    // test take two arguments first is a string second is a callback function. The string is the name of the test which describes what the test is doing. The callback function contains the actual test code.
    it('should return the first argument if it is greater', () => {
        // AAA pattern 
        // Example of testing a tv power button
        // Arrange : Turn on the tv
        // Act : Press the power button
        // Assert : Verify the tv is off
        // It can be done in a single line but for clarity we are breaking it down into three parts.
        // expect(max(5, 3)).toBe(5);

        // Arrange
        const a = 5;
        const b = 3;
        // Act
        const result = max(a, b);
        // Assert
        expect(result).toBe(5);
    })

    it('should return the second argument if it is greater', () => {
        expect(max(3, 5)).toBe(5);
    })

    it('should return the first argument if arguments are equal', () => {
        expect(max(5, 5)).toBe(5);
    })
 })


 describe('fizzBuzz', () => {
    // can use test or it for defining a test case
    test('should return "FizzBuzz" for multiples of 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    test('should return "Fizz" for multiples of 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz');
    })

    test('should return "Buzz" for multiples of 5', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    })

    test('should return the number as a string for non-multiples of 3 or 5', () => {
        expect(fizzBuzz(7)).toBe('7');
    })
 });

//  how to write codes in a test driven development (TDD) approach. TDD produces a 100% test coverage codebase. TDD prevents us from over-engineering a solution. TDD helps us write only the code that is necessary to pass the tests. TDD helps us write better code that is easier to maintain and refactor.
// calculate average
describe('calAverage', () => {
    it('should return NaN if given an empty array', () => {
        expect(calAverage([])).toBe(NaN);
    })

    it('should calculate the average of an array with one element', () => {
        expect(calAverage([5])).toBe(5);
    })
    
    it('should calculate the average of an array with two element', () => {
        expect(calAverage([5, 7])).toBe(6);
    })
    
    it('should calculate the average of an array with three element', () => {
        expect(calAverage([5, 7, 9])).toBe(7);
    })


})

// Testing factorial
describe('calFactorial', () => {
    test('should return 1 for 0!', () => {
        expect(calFactorial(0)).toBe(1);
    })

    test('should return undefined for negative numbers', () => {
        // expect(calFactorial(-1)).toBe(undefined)
        expect(calFactorial(-5)).toBeUndefined();
    })

    test('should return 120 for 5!', () => {
        expect(calFactorial(5)).toBe(120);
    })

    test('should return 3628800 for 10!', () => {
        expect(calFactorial(1)).toBe(1);
    })
})