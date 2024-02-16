export class HttpError {
  constructor(message, statusCode = 404, data = undefined) {
    if (!message) throw Error("message is required");
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

export class ValidationError {
  constructor(message) {
    if (!message) throw Error("message is required");
    this.message = message;
  }
}
