import { it, describe, expect } from "vitest";
import {
  generateTokenNoCallback,
  generateTokenPromise,
  generateTokenWithCallback,
} from "../src/async-example";

describe("generateTokenWithCallback", () => {
  it("should generate a token async callback", () => {
    generateTokenWithCallback("foo@foomail.com", async (err, token) => {
      expect(token).toBeDefined();
      // expect(token).toBe(2); // correctly fails when marked async
    });
  });
});

describe("generateTokenPromise", () => {
  // now this function returns a promise. We can use then/catch or a try/catch block
  it("should return a token async/await and try/catch", async () => {
    try {
      const token = await generateTokenPromise("foo@foomail.com");
      expect(token).toBeDefined();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  // if a function is async, expect will resolve or reject it so you don't have to use await
  // rejects works in the same way as resolves.

  it("should return a token using resolves", () => {
    expect(generateTokenPromise("foo@foomail.com")).resolves.toBeDefined();
  });

  it("should throw an error if email is undefined", () => {
    expect(generateTokenPromise()).rejects.toThrowError(/valid email/i);
  });
});

describe("generateTokenNoCallback", () => {
  it("should return a token", () => {
    expect(generateTokenNoCallback("foo@foomail.com")).toBeDefined(); // correctly passes
    // expect(generateTokenNoCallback("foo@foomail.com")).toBe(2); // correctly fails
  });
});
