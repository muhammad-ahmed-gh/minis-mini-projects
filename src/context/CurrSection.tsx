import { createContext } from "react";
import type { Section } from "../types/mainTypes";

export const CurrSectionContext = createContext<Section>("hero");
