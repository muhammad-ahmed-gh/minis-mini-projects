import clsx from "clsx";
import { useEffect, useRef, type Dispatch, type SetStateAction } from "react";

type Props = {
  label: string;
  bg?: string;
  long?: boolean;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
};

export default function CalculatorButton(props: Props) {
  const handleClick = function () {
    switch (props.label) {
      case "RESET":
        props.setInput("");
        break;
      case "DEL":
        props.setInput((prev) => prev.slice(0, -1));
        break;
      default:
        props.setInput((prev) => prev + props.label);
    }
  };

  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyPress = function (e: KeyboardEvent) {
      if (button.current && props.label === e.key) button.current.click();
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => window.removeEventListener("keypress", handleKeyPress);
  }, [props.label]);

  return (
    <button
      ref={button}
      type="button"
      onClick={handleClick}
      className={clsx(
        "border-b-6 rounded-[8px] py-[8px] font-bold text-[21px] cursor-pointer transition-transform duration-100 active:scale-105 ",
        props.bg === "red"
          ? "bg-[#e76e60] border-b-[#a23122] text-white"
          : props.bg === "second"
            ? "bg-primary border-b-primary-darkest text-[#ffffff]"
            : "bg-[#f8f8f8] border-b-[#b2b2b2] text-[#484e5f]",
        props.long ? "[grid-column:span_2]" : "aspect-square",
      )}
    >
      {props.label}
    </button>
  );
}
