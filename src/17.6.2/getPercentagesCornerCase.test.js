import { getPercentages } from './getPercentages.js';

describe("Boundary cases", () => {
    it("equal 0", () => {
        const result = getPercentages(20, 0);
        expect(result).toBe(0);
    }),
    it("equal 1", () => {
        const result = getPercentages(0, 20);
        expect(result).toBe(0);
    }),
    it("equal 1", () => {
        const result = getPercentages(30, 200);
        expect(result).toBe(60);
    });
});