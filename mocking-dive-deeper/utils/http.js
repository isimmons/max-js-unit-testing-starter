import { HttpError } from "./errors.js";

export async function sendDataRequest(data) {
  const response = await fetch("https://dummy-site.dev/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new HttpError(
      "Sending the request failed.",
      response.status,
      responseData
    );
  }

  return responseData;
}
