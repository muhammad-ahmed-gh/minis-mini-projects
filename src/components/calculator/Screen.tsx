type Props = {
  input: string;
  result: string;
  error: boolean;
};

export default function CalculatorScreen(props: Props) {
  return (
    <div className="bg-[#373c5c] rounded-[5px] p-[15px_25px] font-bold text-[22px] ">
      <p className="text-white mb-[7px] h-[33px] [letter-spacing:1px]">
        {props.input}
      </p>
      <p className="text-end text-[20px] text-slate-400 h-[30px]">
        {props.error ? "Invalid input" : props.result}
      </p>
    </div>
  );
}
