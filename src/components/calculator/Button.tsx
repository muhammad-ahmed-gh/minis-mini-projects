import clsx from "clsx";
import { getResult } from "../../utils/calculator";
import { useInput } from "../../hooks/calculator/useInput";
import { useError } from "../../hooks/calculator/useError";

type Props = {
  label: string;
  bg?: string;
  long?: boolean;
};

const SPECIAL_KEYS = {
  RESET: () => "",
  DEL: (input: string) => input.slice(0, -1),
  "=": (input: string) => getResult(input),
};

type SpecialKey = keyof typeof SPECIAL_KEYS;

export default function CalculatorButton(props: Props) {
  const inputState = useInput();
  const errorState = useError();

  const handleClick = function () {
    if (props.label in SPECIAL_KEYS) {
      if (props.label === "=") {
        const result = SPECIAL_KEYS["="](inputState.input);
        if (result === "" && errorState.error === false)
          errorState.setError(true);
        else inputState.setInput(result);
      } else {
        inputState.setInput(
          SPECIAL_KEYS[props.label as SpecialKey](inputState.input),
        );
        if (errorState.error) errorState.setError(false);
      }
    } else {
      inputState.setInput((prev) => prev + props.label);
      if (errorState.error) errorState.setError(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        "border-b-6 rounded-[8px] py-[8px] font-bold text-[21px] cursor-pointer outline-0 transition-[transform_box-shadow] duration-100 active:scale-105 focus:ring-4 focus:ring-primary",
        props.bg === "red"
          ? "bg-[#e76e60] border-b-[#b96155] text-white"
          : props.bg === "second"
            ? "bg-[#62ec12] border-b-[#42b200] text-[#ffffff]"
            : "bg-[#f8f8f8] border-b-[#b2b2b2] text-[#484e5f]",
        props.long ? "[grid-column:span_2]" : "aspect-square",
      )}
    >
      {props.label}
    </button>
  );
}
