import { countDown } from "./qa.js";

describe ('app that count down numbers', () => {
    //positive
    it('count down from 10 to 1', () => {
        expect(countDown(10)).toBe('10 9 8 7 6 5 4 3 2 1 ');
    })
    //negative
    it('if a value of n is less than 1, then the function should throw an empty string', () => {
        expect(countDown(0)).toBe('');
    })
    //negative
    it('if a value of n is a string, then the function should throw an empty string', () => {
        expect(countDown('abc')).toBe('');
    })
    //negative
    it('if a value of n is a neg number, then the function should throw an empty string', () => {
        expect(countDown(-1)).toBe('');
    })
    //negative
    it('if a value of n is a decimal number, then the function should throw an empty string', () => {
        expect(countDown(0.5)).toBe('');
    })
    //Corner test
    it('if a value of n is a big number, then anyway the function should handle this', () => {
        expect(countDown(1000)).toContain('666');
    })
    it('if a value of n is a big number, then anyway the function should handle this', () => {
        expect(countDown(1000)).toContain('88');
    })
})