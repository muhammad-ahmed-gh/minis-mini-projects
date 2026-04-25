import { useState, type ReactNode } from "react";
import { ErrorContext } from "../../context/calculator/ErrorContext";

type Props = {
  children: ReactNode | ReactNode[];
};

export function ErrorProvider(props: Props) {
  const [error, setError] = useState(false);

  return (
    <ErrorContext.Provider value={{ error: error, setError: setError }}>
      {props.children}
    </ErrorContext.Provider>
  );
}
