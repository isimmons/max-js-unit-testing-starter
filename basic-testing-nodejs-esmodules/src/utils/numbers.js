export function transformToNumber(value) {
  if (typeof value !== "number" && typeof value !== "string") return NaN;

  return Number(value);
}
