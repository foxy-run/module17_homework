import { getPercentages } from './getPercentages.js';

test('function return percent of number', () => {
    const result = getPercentages(30, 200);
    expect(result).toBe(60);
});