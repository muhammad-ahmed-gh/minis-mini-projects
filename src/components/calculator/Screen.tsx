type Props = {
  input: string;
  result: string;
  error: boolean;
};

export default function CalculatorScreen(props: Props) {
  return (
    <div className="bg-[#373c5c] rounded-[5px] pt-[15px] px-[25px] pb-[5px] font-bold text-[22px] ">
      <p className="text-white h-[50px] [letter-spacing:1px] overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-thumb]:rounded-full ">
        {props.input}
      </p>
      <p className="text-end text-[20px] text-slate-400 h-[45px] overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-thumb]:rounded-full">
        {props.error ? "Invalid input" : props.result}
      </p>
    </div>
  );
}
