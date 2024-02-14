import { it, describe, expect, beforeEach, afterEach } from "vitest";

import { User } from "../src/hooks";
// we can run tests concurrently but not if a test manipulates the state of the
// instantiated user class
// a way around thid is to separate the one doing the manipulating into its own
// non concurrent test
// I like the method below.
// the purpose of concurrent is to save time but in this case, the tests are so simple
// and fast that I actually loose 1ms because the setup of concurrent run and extra
// describe block takes longer than simply running the tests in sequence
// you can put .concurrent on eather each test or the whole test suite
describe("User Class", () => {
  let user;
  const testEmail = "test@test.com";

  it("should update the email", () => {
    user = new User(testEmail);
    const newTestEmail = "test2@test.com";

    user.updateEmail(newTestEmail);

    expect(user.email).toBe(newTestEmail);
  });

  describe.concurrent("concurrent tests", () => {
    beforeEach(() => {
      user = new User(testEmail);
    });

    it("should have an email property", () => {
      expect(user).toHaveProperty("email");
    });

    it("should store the provided email value", () => {
      expect(user.email).toBe(testEmail);
    });

    it("should clear the email", () => {
      user.clearEmail();

      expect(user.email).toBe("");
    });

    it("should still have an email property after clearing the email", () => {
      user.clearEmail();

      expect(user).toHaveProperty("email");
    });
  });
});
