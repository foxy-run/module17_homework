import { getPercentages } from './getPercentages.js';

describe("Успешный/неуспешный тест", () => {
    it("Успешный тест", () => {
        const result = getPercentages(30, 200);
        expect(result).toBe(60);
    }),
    xit("Неуспешный тест", () => {
        const result = getPercentages(30, 200);
        expect(result).toBe(50);
    });
});