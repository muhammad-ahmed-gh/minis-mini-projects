import { useState, type ReactNode } from "react";
import { InputContext } from "../../context/calculator/InputContext";

type Props = {
  children: ReactNode | ReactNode[];
};

export function InputProvider(props: Props) {
  const [input, setInput] = useState("");

  return (
    <InputContext.Provider value={{ input, setInput }}>
      {props.children}
    </InputContext.Provider>
  );
}
