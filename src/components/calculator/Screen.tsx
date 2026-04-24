type Props = {
  input: string;
};

export default function CalculatorScreen(props: Props) {
  const getResult = function () {

    const exp = props.input
      .replace("π", `${Math.PI}`)
      .replace("e", `${Math.E}`)
      .replace("⨯", "*");

    try {
      return eval(exp);
    } catch {
      return "Invalid input";
    }
  };

  return (
    <div className="bg-[#373c5c] rounded-[5px] p-[15px_25px] font-bold text-[22px] ">
      <p className="text-white mb-[7px] h-[33px]">{props.input}</p>
      <p className="text-end text-[20px] text-slate-400 h-[30px]">
        {getResult()}
      </p>
    </div>
  );
}
