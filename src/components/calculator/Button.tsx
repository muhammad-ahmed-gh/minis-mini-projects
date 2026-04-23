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
        "border-b-3 rounded-[5px] py-[10px] font-bold text-[22px] ",
        props.bg === "red"
          ? "bg-[#d13f30] border-b-[#902314] text-white"
          : props.bg === "second"
            ? "bg-[#647299] border-b-[#414e71] text-[#ffffff]"
            : "bg-[#eae3db] border-b-[#999999] text-[#484e5f]",
        props.long && "[grid-column:span_2]"
      )}
    >
      {props.label}
    </button>
  );
}
