import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro.js";
import { fizzBuzz } from "../src/intro.js";

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