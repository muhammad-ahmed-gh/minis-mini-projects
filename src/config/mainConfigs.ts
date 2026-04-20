import type { Section } from "../types/mainTypes";

type HeaderLinks = {
  sectionId: Section;
  label: string;
  href: string;
}[];

export const headerLinks: HeaderLinks = [
  {
    sectionId: "hero",
    label: "home",
    href: "#hero",
  },
  {
    sectionId: "apps",
    label: "apps",
    href: "#apps",
  },
  {
    sectionId: "contact",
    label: "features",
    href: "#feature",
  },
];
