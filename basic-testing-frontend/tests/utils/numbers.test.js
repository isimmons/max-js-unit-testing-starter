import { it, describe, expect } from "vitest";
import { transformToNumber } from "../../src/utils/numbers";

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
