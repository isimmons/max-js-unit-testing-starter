import { validateNumber, validateStringNotEmpty } from "./validation.js";

export function transformToNumber(value) {
  if (typeof value !== "number" && typeof value !== "string") return NaN;

  return Number(value);
}

export function cleanNumbers(numberValues) {
  if (!Array.isArray(numberValues))
    throw Error("Invalid arg: provide array of numeric strings");
  const numbers = [];
  for (const numberInput of numberValues) {
    if (typeof numberInput !== "string" || isNaN(Number(numberInput)))
      throw Error("Invalid arg: provide array of numeric strings");
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}
