export function validateStringNotEmpty(value) {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error("Invalid input - must be non-empty string.");
  }
}

export function validateNumber(number) {
  if (typeof number !== "number" || isNaN(number)) {
    throw new Error("Invalid input - must be of type number.");
  }
}
