import { useContext } from "react";
import { ErrorContext } from "../../context/calculator/ErrorContext";

export const useError = function () {
  const error = useContext(ErrorContext);

  if (!error)
    throw new Error("useError cannot be used outside an ErrorProvider");
  return error;
};
