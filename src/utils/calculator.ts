import { Parser } from "expr-eval";

export const getResult = function (expr: string) {
  if (expr === "") return "";

  const finalExpr = expr
    .replaceAll("⨯", "*")
    .replace(/(^|[+\-*/(])π/gi, `$1${Math.PI}`)
    .replace(/(^|[+\-*/(])e/gi, `$1${Math.E}`);
  // replace if π,e follows ( + - * / or are in the beginning

  if (/[πe]/i.test(finalExpr)) return "";

  try {
    return new Parser().evaluate(finalExpr).toString();
  } catch {
    return "";
  }
};
