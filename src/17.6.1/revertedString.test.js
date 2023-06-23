import { revertedString } from './revertedString.js';

describe("tests for revertedString function", () => {
    it("should reverse string", () => expect(revertedString("бабадук")).toBe("кудабаб"));
});