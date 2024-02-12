import { it, describe, expect } from "vitest";
import { add } from "../src/math";

describe("add", () => {
  it("should return sum of numbers in array", () => {
    const numbers = [1, 2, 3];
    const expectedResult = numbers.reduce((acc, curr) => acc + curr, 0);

    expect(add(numbers)).toBe(expectedResult);
  });

  it("should return sum of numeric string values in array", () => {
    const numbers = ["1", "2", "3"];
    const expectedResult = 6;

    expect(add(numbers)).toBe(expectedResult);
  });

  it("should return 0 if array is empty", () => {
    expect(add([])).toBe(0);
  });

  it("should throw an error if numbers is not an array", () => {
    expect(() => add(1, 2)).toThrowError(/invalid args/i);
  });

  it("should throw an error if no parameter is passed", () => {
    expect(() => add()).toThrowError(/invalid args/i);
  });

  it("should return NaN if at least 1 value in array is not valid", () => {
    expect(add([1, "a"])).toBeNaN();
  });
});
