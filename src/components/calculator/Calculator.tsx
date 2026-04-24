import { useEffect, useMemo, useState } from "react";
import { appsData } from "../../config/appsConfig";
import CalculatorButton from "./Button";
import CalculatorScreen from "./Screen";
import { Parser } from "expr-eval";
import { BASIC_KEYS, KEYBOARD_MAP } from "../../data/calculator";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const result = useMemo(() => {
    if (input === "") return "";

    const tmp = input
      .replace("π", `${Math.PI}`)
      .replace("e", `${Math.E}`)
      .replace("⨯", "*");

    try {
      const parser = new Parser();
      return parser.evaluate(tmp).toString();
    } catch {
      console.log("ERROR OCCURRED");
      return "";
    }
  }, [input]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (KEYBOARD_MAP.CLEAR.includes(e.key)) {
        setInput("");
        setError(false);
      }
      else if (KEYBOARD_MAP.DELETE.includes(e.key)) {
        setInput((prev) => prev.slice(0, -1));
        setError(false);
      }
      else if (KEYBOARD_MAP.EQUALS.includes(e.key)) {
        if (result === "" && error === false) setError(true);
        else setInput(result);
      }
      else if (KEYBOARD_MAP.PI.includes(e.key)) {
        setInput((prev) => prev + "π");
        setError(false);
      }
      else if (KEYBOARD_MAP.MULTIPLY.includes(e.key)) {
        setInput((prev) => prev + "⨯");
        setError(false);
      }
      else if (BASIC_KEYS.includes(e.key)) {
        setInput((prev) => prev + e.key);
        setError(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [error, result]);

  return (
    <div className="w-[270px] sm:w-[310px] md:w-[325px] p-[20px] mt-[10px] mx-auto rounded-[10px] animate-float-show ">
      <CalculatorScreen input={input} result={result} error={error} />
      <div className="mt-[20px] grid grid-cols-4 justify-between gap-[10px] sm:gap-[15px]">
        {appsData.calculator.settings.keys.map((key) => (
          <CalculatorButton
            key={key.id}
            label={key.label}
            bg={key.bg}
            long={key.long}
            input={input}
            setInput={setInput}
          />
        ))}
      </div>
    </div>
  );
}
