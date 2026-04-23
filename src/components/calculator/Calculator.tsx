import { appsData } from "../../config/appsConfig";
import CalculatorButton from "./Button";
import CalculatorScreen from "./Screen";

export default function Calculator() {
  return (
    <div className="w-fit p-[20px] mx-auto rounded-[10px] bg-slate-500">
      <CalculatorScreen />
      <div className="mt-[20px] grid grid-cols-[repeat(4,70px)] justify-between gap-[20px]">
        {appsData.calculator.settings.keys.map(key => (
            <CalculatorButton key={key.id} label={key.label} bg={key.bg} long={key.long} />
          ))
        }
      </div>
    </div>
  );
}
