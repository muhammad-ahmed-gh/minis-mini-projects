import { Parser } from "expr-eval";

export const getResult = function (expr: string) {
  if (expr === "") return "";

  const tmp = expr
    .replace("π", `${Math.PI}`)
    .replace("e", `${Math.E}`)
    .replace("⨯", "*");

  try {
    const parser = new Parser();
    return parser.evaluate(tmp).toString();
  } catch {
    return "";
  }
}