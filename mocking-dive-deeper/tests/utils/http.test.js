import { it, describe, expect, vi } from "vitest";
import { sendDataRequest } from "../../utils/http";
import { HttpError } from "../../utils/errors";

// mocking non imported globals with stubGlobal

// second param to stubGlobal is the replacement function but we want to be able to spy
// so we make it a vi.fn() modified for our test case
const testResponseData = { testKey: "test data" };

// originally was const const testFetch = vi.fn(...)
// made into a getFetchMock so can reuse with alternate isOk response
// without copying a bunch of code

const getFetchMock = (isOk = true) => {
  return vi.fn((url, options) => {
    return new Promise((resolve, reject) => {
      if (typeof options.body !== "string") return reject("Not a string");
      const testResponse = {
        ok: isOk,
        json() {
          return new Promise((resolve, reject) => {
            resolve(testResponseData);
          });
        },
      };
      resolve(testResponse);
    });
  });
};

const testFetch = getFetchMock();

vi.stubGlobal("fetch", testFetch);

describe("async function sendDataRequest", () => {
  const testData = { key: "foo" };

  it("should return response data", async () => {
    await expect(sendDataRequest(testData)).resolves.toStrictEqual(
      testResponseData
    );
  });

  it("should reject if data not converted to json string before fetch", async () => {
    try {
      await sendDataRequest(testData);
    } catch (error) {
      expect(error).toMatch(/not a string/i);
    }
  });

  it("should throw HttpError if !ok response", async () => {
    testFetch.mockImplementationOnce(getFetchMock(false));
    await expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
  });
});
