import { cleanNumbers } from "./utils/numbers.js";

export function add(numbers) {
  if (!numbers || !Array.isArray(numbers))
    throw Error("Invalid args: numbers must be an array");

  if (numbers.length === 0) return 0;

  return numbers.reduce((acc, curr) => Number(acc) + Number(curr), 0);
}

export function calculateResult(numberValues) {
  let result = "";
  try {
    const numbers = cleanNumbers(numberValues);

    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }

  return result;
}
