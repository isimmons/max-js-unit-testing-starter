import { it, describe, expect, vi } from "vitest";
import { generateReportData } from "../src/data";

describe("generateReportData", () => {
  it("should execute logFn if provided", () => {
    const logger = vi.fn();

    // we can specify a different implementation inside the test like so
    logger.mockImplementation(() => {
      // do something with foo
      return "logger was called";
    });
    // mockImplementationOnce() will replace the implementation only once
    // and then it will return to the origianl implementation

    const result = generateReportData(logger);
    expect(logger).toHaveBeenCalledOnce();
    expect(logger).toMatch(/called/i);
    expect(result).toMatch(/dummy/i);
  });
});
