import { it, describe, expect, beforeEach } from "vitest";
import { HttpError, ValidationError } from "../../utils/errors";

describe("class HttpError", () => {
  let error;

  beforeEach(() => {
    error = new HttpError("not found", 404, { routePath: "/foo" });
  });

  it("should be an instance of class HttpError", () => {
    expect(error).toBeInstanceOf(HttpError);
  });

  it("should have property statusCode", () => {
    expect(error).toHaveProperty("statusCode");
    expect(error.statusCode).toBe(404);
  });

  it("should have property message", () => {
    expect(error).toHaveProperty("message");
    expect(error.message).toBe("not found");
  });

  it("should have property data", () => {
    expect(error).toHaveProperty("data");
    expect(error.data).toStrictEqual({ routePath: "/foo" });
  });

  it("should have data = undefined if no data is provided", () => {
    const error = new HttpError("not found", 404);
    expect(error).toHaveProperty("data");
    expect(error.data).toBeUndefined();
  });

  it("should have default statusCode 404 if not provided", () => {
    const error = new HttpError("not found");
    expect(error).toHaveProperty("statusCode");
    expect(error.statusCode).toBe(404);
  });

  it("should throw error if no message is provided", () => {
    expect(() => new HttpError()).toThrowError("message is required");
  });
});

describe("class ValidationError", () => {
  let error;
  beforeEach(() => {
    error = new ValidationError("something is invalid");
  });

  it("should be an istance of ValidationError", () => {
    expect(error).toBeInstanceOf(ValidationError);
  });

  it("should have property message", () => {
    expect(error).toHaveProperty("message");
    expect(error.message).toBe("something is invalid");
  });

  it("should throw error if no message is provided", () => {
    expect(() => new ValidationError()).toThrowError("message is required");
  });
});
