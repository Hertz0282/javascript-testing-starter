import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro.js";

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