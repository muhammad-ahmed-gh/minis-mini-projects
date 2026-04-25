import { createContext, type Dispatch, type SetStateAction } from "react";

type InputContextType = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

export const InputContext = createContext<InputContextType | null>(null);
