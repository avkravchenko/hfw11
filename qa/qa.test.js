import {countDown} from 'qa/qa.js';

describe ('app that count down numbers', () => {
    expect(countDown(10)).toBe('10 9 8 7 6 5 4 3 2 1');
})