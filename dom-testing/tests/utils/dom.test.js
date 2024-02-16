// @vitest-environment jsdom

import fs from "fs";
import path from "path";
import jsdom from "jsdom";
import { it, describe, expect, beforeEach, vi } from "vitest";
import { showError } from "../../utils/dom";

const htmlPath = path.join(process.cwd(), "index.html");
const htmlContent = fs.readFileSync(htmlPath).toString();

const { JSDOM } = jsdom;
const { document } = new JSDOM().window;

vi.stubGlobal("document", document);

describe("showError", () => {
  beforeEach(() => {
    // max says document.write will append so we should clear the document.body.innerHtml first
    // but I'm not experiencing that. console.log inside the test shows the p tags are gone
    // with just rewriting the htmlContent to document
    // but to be on the safe side I'll ensure it is cleared
    document.body.innerHTML = "";
    document.write(htmlContent);
    // document.getElementById("errors").innerHTML = "";
    // this stuff works because of the fact that we are taking a real html file and writing
    // it to the document. Aparrently the lack of a reset method is an issue.
    // https://stackoverflow.com/questions/42805128/does-jest-reset-the-jsdom-document-after-every-suite-or-test
  });

  it("should not contain an error paragraph initially", () => {
    const errorsEl = document.getElementById("errors");
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).toBeNull();
  });

  it("should add error <p> to <div id=errors />", () => {
    showError("test");

    const errorsEl = document.getElementById("errors");
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).not.toBeNull();
  });

  it("should output the provided message in the paragraph", () => {
    showError("test");

    const errorsEl = document.getElementById("errors");
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph.textContent).toBe("test");
  });
});
