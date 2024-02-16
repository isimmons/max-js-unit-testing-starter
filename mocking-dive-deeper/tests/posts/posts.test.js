import { it, describe, expect } from "vitest";
import { extractPostData } from "../../posts/posts";

describe("extractPostData", () => {
  // here we have mocked a FormData object without using any mock methods
  // but by simply recreating it as an object with the data and the get method
  // mocking is a concept. mock methods provided by vitest or jest
  // are tools to make mocking easier when it's not as simple as this

  // remember we aren't testing FormData or the get method. All we are testing is that
  // we didn't forget to extract the data in extractPostData
  const title = "test title";
  const content = "test content";
  const testFormData = {
    title,
    content,
    get(identifier) {
      return this[identifier];
    },
  };
  it("should extract title and content from form", () => {
    const data = extractPostData(testFormData);

    expect(data.title).toBe(title);
    expect(data.content).toBe(content);
  });
});
