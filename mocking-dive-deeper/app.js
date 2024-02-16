import { extractPostData, savePost } from "./posts/posts.js";
import { showPost, showError } from "./utils/dom.js";

const formElement = document.querySelector("form");

export async function submitFormHandler(event) {
  event.preventDefault();

  const formData = new FormData(formElement);
  try {
    const postData = extractPostData(formData);
    const post = await savePost(postData);
    showPost(post);
  } catch (error) {
    showError(error.message);
  }
}

formElement.addEventListener("submit", submitFormHandler);
