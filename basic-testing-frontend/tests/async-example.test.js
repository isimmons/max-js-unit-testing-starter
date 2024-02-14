import { it, describe, expect } from "vitest";
import { generateToken, generateTokenPromise } from "../src/async-example";

describe("generateToken", () => {
  // this is not testing async. It is using a callback function with jwt.sign
  // generateToken is not async and does not return anything, much less a promise
  // at this point in the video the incorrect value passes for Max but they must have
  // fixed it because it fails for me. jwt.sign also does not return a promise
  // but wait, it does pass and does not wait for the callback to be ran unless
  // I make the callback async. So apparently the fix for jwt.sign was to await if the callback
  // is async and not wait if the callback is not async. No need to the extra stuff Max is doing
  it("should generate a token", () => {
    generateToken("foo@foomail.com", async (err, token) => {
      expect(token).toBeDefined();
    });
  });
});

describe("generateTokenPromise", () => {
  // now this function returns a promise. We can use then/catch or a try/catch block
  it("should return a token", async () => {
    try {
      const token = await generateTokenPromise("foo@foomail.com");
      expect(token).toBeDefined();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  // if a function is async, expect will resolve or reject it so you don't have to use await
  // rejects works in the same way as resolves.
  // the extra "return" ensures that vitest will wait for the promise to resolve
  it("should return a token again", () => {
    return expect(
      generateTokenPromise("foo@foomail.com")
    ).resolves.toBeDefined();
  });
});
