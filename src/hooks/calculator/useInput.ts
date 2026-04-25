import { useContext } from "react";
import { InputContext } from "../../context/calculator/InputContext";

export const useInput = function () {
  const input = useContext(InputContext);

  if (!input)
    throw new Error("useInput cannot be used outside an InputProvider");
  return input;
};
