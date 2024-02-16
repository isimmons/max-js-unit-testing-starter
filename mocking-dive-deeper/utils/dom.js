export function showError(message) {
  const errorContainerElement = document.getElementById("errors");
  const errorMessageElement = document.createElement("p");
  errorMessageElement.textContent = message;
  errorContainerElement.innerHTML = "";
  errorContainerElement.append(errorMessageElement);
}

// not part of course
// finish out making real api endpoint
// then show the post here by appending post list to body
export function showPost(post) {
  console.log(post);
}
