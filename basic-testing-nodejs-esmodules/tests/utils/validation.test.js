import { it, describe, expect } from "vitest";
import {
  validateStringNotEmpty,
  validateNumber,
} from "../../src/utils/validation";

describe("validateStringNotEmpty", () => {
  it("should throw error if string is empty", () => {
    expect(() => validateStringNotEmpty("")).toThrowError(/invalid input/i);
  });

  it("should throw error if value is not a string", () => {
    expect(() => validateStringNotEmpty(5)).toThrowError(/invalid input/i);
    expect(() => validateStringNotEmpty([])).toThrowError(/invalid input/i);
    expect(() => validateStringNotEmpty({})).toThrowError(/invalid input/i);
  });

  it("should not throw an error if value is a non-empty string", () => {
    expect(() => validateStringNotEmpty("foo")).not.toThrowError();
  });
});

describe("validateNumber", () => {
  it("should throw error if value is not a number", () => {
    expect(() => validateNumber("5")).toThrowError(/invalid input/i);
    expect(() => validateNumber([])).toThrowError(/invalid input/i);
    expect(() => validateNumber({})).toThrowError(/invalid input/i);
  });

  it("should not throw an error if value is a number", () => {
    expect(() => validateNumber(5)).not.toThrowError();
  });
});
