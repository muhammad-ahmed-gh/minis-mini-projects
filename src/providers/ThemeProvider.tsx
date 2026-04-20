import { useState, type ReactNode } from "react";
import { ThemeContext } from "../context/ThemeContext";
import type { Theme } from "../types/mainTypes";

type Props = {
  children: ReactNode | ReactNode[];
};

export default function ThemeProvider(props: Props) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
