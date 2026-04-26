import { Parser } from "expr-eval";

export const getResult = function (expr: string) {
  if (expr === "") return "";

  const finalExpr = expr
    .replaceAll("⨯", "*")
    .replace(/(^|[+\-*/(])π/gi, `$1${Math.PI}`) // replace if π follows ( + - * / or is in the beginning
    .replace(/(^|[+\-*/(])e/gi, `$1${Math.E}`);

  if (/[πe]/i.test(finalExpr)) return "";

  try {
    const parser = new Parser();
    return parser.evaluate(finalExpr).toString();
  } catch {
    return "";
  }
};
