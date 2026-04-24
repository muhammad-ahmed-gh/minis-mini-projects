import { useState } from "react";
import { appsData } from "../../config/appsConfig";
import CalculatorButton from "./Button";
import CalculatorScreen from "./Screen";

export default function Calculator() {
  const [input, setInput] = useState("");

  return (
    <div className="w-fit p-[20px] mt-[50px] mx-auto rounded-[10px] animate-float-show ">
      <CalculatorScreen input={input} />
      <div className="mt-[20px] grid grid-cols-[repeat(4,minmax(50px,60px))] justify-between gap-[10px] sm:gap-[15px]">
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
