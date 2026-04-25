import { useEffect, useMemo } from "react";
import { appsData } from "../../config/appsConfig";
import CalculatorButton from "./Button";
import CalculatorScreen from "./Screen";
import { BASIC_KEYS, KEYBOARD_MAP } from "../../data/calculator";
import { getResult } from "../../utils/calculator";
import { useInput } from "../../hooks/calculator/useInput";
import { useError } from "../../hooks/calculator/useError";

export default function Calculator() {
  const { input, setInput } = useInput();
  const { error, setError } = useError();
  const result = useMemo(() => getResult(input), [input]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (KEYBOARD_MAP.CLEAR.includes(e.key)) {
        setInput("");
        setError(false);
      } else if (KEYBOARD_MAP.DELETE.includes(e.key)) {
        setInput((prev) => prev.slice(0, -1));
        setError(false);
      } else if (KEYBOARD_MAP.EQUALS.includes(e.key)) {
        if (result === "" && error === false) setError(true);
        else setInput(result);
      } else if (KEYBOARD_MAP.PI.includes(e.key)) {
        setInput((prev) => prev + "π");
        setError(false);
      } else if (KEYBOARD_MAP.MULTIPLY.includes(e.key)) {
        setInput((prev) => prev + "⨯");
        setError(false);
      } else if (BASIC_KEYS.includes(e.key)) {
        setInput((prev) => prev + e.key);
        setError(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [error, result, setInput, setError]);

  return (
    <div className="w-[270px] sm:w-[310px] md:w-[325px] p-[20px] mt-[10px] mx-auto rounded-[10px] animate-float-show ">
      <CalculatorScreen />
      <div className="mt-[20px] grid grid-cols-4 justify-between gap-[10px] sm:gap-[15px]">
        {appsData.calculator.settings.keys.map((key) => (
          <CalculatorButton
            key={key.id}
            label={key.label}
            bg={key.bg}
            long={key.long}
          />
        ))}
      </div>
    </div>
  );
}
