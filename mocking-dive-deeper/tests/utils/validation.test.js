import { it, describe, expect } from "vitest";
import { validateNotEmpty } from "../../utils/validation";

describe("function validateNotEmpty", () => {
  it("should throw error if empty string is provided", () => {
    expect(() => validateNotEmpty("")).toThrowError();
  });

  it("should throw error if all whitespace string is provided", () => {
    expect(() => validateNotEmpty("     ")).toThrowError();
  });

  it("should throw error with provided error message", () => {
    expect(() => validateNotEmpty("", "empty value")).toThrowError(
      "empty value"
    );
  });
});
