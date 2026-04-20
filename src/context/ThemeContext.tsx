import { createContext } from "react";
import type { Theme } from "../types/ui";

export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | null>(null);
