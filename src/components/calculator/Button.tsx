import clsx from "clsx";
import { type Dispatch, type SetStateAction } from "react";

type Props = {
  label: string;
  bg?: string;
  long?: boolean;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
};

const SPECIAL_KEYS = {
  RESET: () => "",
  DEL: (input: string) => input.slice(0, -1),
};

type SpecialKey = keyof typeof SPECIAL_KEYS;

export default function CalculatorButton(props: Props) {
  const handleClick = function () {
    if (props.label in SPECIAL_KEYS) {
      props.setInput(SPECIAL_KEYS[props.label as SpecialKey](props.input));
    } else {
      props.setInput((prev) => prev + props.label);
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
