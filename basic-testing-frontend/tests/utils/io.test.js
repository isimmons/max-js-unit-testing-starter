import { it, describe, expect, afterEach, vi } from "vitest";
import writeData from "../../src/utils/io";
import path from "path";
import { promises as fs } from "fs";

vi.mock("path", (importOriginal) => {
  const actual = importOriginal();
  return {
    ...actual,
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

// using importOriginal helper for partial mock
// vi.mock("fs", (importOriginal) => {
//   const actual = importOriginal();

//   return {
//     ...actual,
//     promises: {
//       writeFile: vi.fn(),
//     },
//   };
// });

// vitest will look for the __mocks__ folder and find fs and only mock what we return from it
// so it will be partial mocked, only mocking the writeFile function which is defined as a
// function that resolves a promise, to be more realistic for the real writeFile method
vi.mock("fs");

describe("writeData", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should execute the writeFile method", async () => {
    const data = "foobar";
    const fileName = "foo.txt";

    await writeData(data, fileName);
    await expect(writeData(data, fileName)).resolves.toBeUndefined();
    expect(fs.writeFile).toHaveBeenCalledWith(fileName, data);
  });
});
