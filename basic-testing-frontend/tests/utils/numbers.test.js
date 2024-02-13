import { it, describe, expect } from "vitest";
import { cleanNumbers, transformToNumber } from "../../src/utils/numbers";

describe("transformToNumber", () => {
  it("should return the number passed in when passed a number", () => {
    expect(transformToNumber(5)).toBe(5);
  });

  it("should return the converted number from a numeric string", () => {
    expect(transformToNumber("5")).toBe(5);
  });

  it("should return NaN if value is not a number or numeric string", () => {
    expect(transformToNumber("a")).toBeNaN();
    expect(transformToNumber("5a")).toBeNaN();
    expect(transformToNumber([5])).toBeNaN();
    expect(transformToNumber({})).toBeNaN();
  });
});

// integration or interaction test because to do it's job, cleanNumbers
// calls 3 other functions. Even though those 3 other functions have been
// tested, this test tests only the cleanNumbers test input/output but is also
// proof of the correct interaction between it and the other functions it calls
describe("cleanNumbers", () => {
  it("should return an array of numbers if array of string numbers provided", () => {
    expect(cleanNumbers(["1", "2", "3"])).toEqual([1, 2, 3]);
  });

  it("should throw error if input is not array of numeric strings", () => {
    expect(() => cleanNumbers([1, "2", "three"])).toThrowError(/invalid arg/i);
    expect(() => cleanNumbers(["1", 2, "3"])).toThrowError(/invalid arg/i);
  });
});
