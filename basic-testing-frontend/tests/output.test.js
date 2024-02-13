import { it, describe, expect } from "vitest";
import { generateResultText } from "../src/output";

describe("generateResultText", () => {
  it("should return invalid input message if result is invalid", () => {
    expect(generateResultText("invalid")).toMatch(/invalid input/i);
  });

  it("should return result message if result is a number or numeric string", () => {
    expect(generateResultText(1)).toMatch(/1/);
    expect(generateResultText("1")).toMatch(/1/);
  });

  it("should return an empty string if result is no-calc", () => {
    expect(generateResultText("no-calc")).toBe("");
  });

  it("should throw error if result is not valid", () => {
    expect(() => generateResultText("foobar")).toThrowError(/invalid arg/i);
  });
});
