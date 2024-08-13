import { sum } from "./index";

describe("sum test suite", () => {
  it("should add the numbers and be the correct value", () => {
    const result = sum(1, 1);
    expect(result).toEqual(2);
  });
});
