import clsx from "clsx";

type Props = {
  label: string;
  bg: string;
  long: boolean;
};

export default function CalculatorButton(props: Props) {
  return (
    <button
      type="button"
      className={clsx(
        "border-b-6 rounded-[8px] py-[8px] font-bold text-[21px] cursor-pointer transition-transform duration-100 active:scale-105 ",
        props.bg === "red"
          ? "bg-[#d13f30] border-b-[#902314] text-white"
          : props.bg === "second"
            ? "bg-[#7c82c1] border-b-[#565977] text-[#ffffff]"
            : "bg-[#eae3db] border-b-[#999999] text-[#484e5f]",
        props.long ? "[grid-column:span_2]" : "aspect-square"
      )}
    >
      {props.label}
    </button>
  );
}
