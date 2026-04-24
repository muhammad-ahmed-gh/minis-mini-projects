import { appsData } from "../../config/appsConfig";
import CalculatorButton from "./Button";
import CalculatorScreen from "./Screen";

export default function Calculator() {
  return (
    <div className="w-fit p-[20px] mt-[50px] mx-auto rounded-[10px] bg-slate-500 border-b-10 border-b-slate-600 animate-float-show ">
      <CalculatorScreen />
      <div className="mt-[20px] grid grid-cols-[repeat(4,minmax(50px,60px))] justify-between gap-[10px] sm:gap-[15px]">
        {appsData.calculator.settings.keys.map((key) => (
          <CalculatorButton
            key={key.id}
            label={key.label}
            bg={key.bg ?? ""}
            long={key.long ?? false}
          />
        ))}
      </div>
    </div>
  );
}
