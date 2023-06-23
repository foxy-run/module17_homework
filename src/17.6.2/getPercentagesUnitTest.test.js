import { getPercentages } from "./getPercentages";

describe('unit test of function operation', () => {
    it("correct operation of the function", () => {
        expect(getPercentages(30, 200)).toBe(60);
    }),
    it("the result will be 0", () => {
        expect(getPercentages(30, 0)).toBe(0);
    }),
    it('$number and $percent cannot be negative', () => {
        expect(getPercentages(30, -1)).toBe(-0.3);
    })
});