export function generateResultText(result) {
  if (result === "invalid")
    return "Invalid input. You must enter valid numbers.";

  if (result === "no-calc") return "";

  if (isNaN(Number(result))) throw Error("Invalid arg");

  return `Result: ${result}`;
}

export function outputResult(resultText) {
  const output = document.getElementById("result");

  output.textContent = resultText;
}
