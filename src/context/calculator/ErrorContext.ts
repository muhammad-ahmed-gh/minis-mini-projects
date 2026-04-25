import { createContext, type Dispatch, type SetStateAction } from "react";

type ErrorContextType = {
  error: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
}

export const ErrorContext = createContext<ErrorContextType | null>(null);
