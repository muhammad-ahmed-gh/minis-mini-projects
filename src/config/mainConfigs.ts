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

type Cards = {
  id: number;
  appPath: string;
  title: string;
  description: string;
  icon: string;
}[];

export const appsData: Cards = [
  {
    id: 1,
    appPath: "calculator",
    title: "Calculator",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, sequi? Deserunt magnam eius",
    icon: "fa-solid fa-square-root-variable",
  },
  {
    id: 2,
    appPath: "clock",
    title: "Clock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, sequi? Deserunt magnam eius",
    icon: "fa-solid fa-hourglass-half",
  },
  {
    id: 3,
    appPath: "currency-converter",
    title: "Currency Converter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, sequi? Deserunt magnam eius",
    icon: "fa-solid fa-dollar-sign",
  },
  {
    id: 4,
    appPath: "notes",
    title: "Notes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, sequi? Deserunt magnam eius",
    icon: "fa-solid fa-thumbtack",
  },
  {
    id: 5,
    appPath: "prayer-times",
    title: "Prayer Times",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, sequi? Deserunt magnam eius",
    icon: "fa-solid fa-mosque",
  },
  {
    id: 6,
    appPath: "quiz",
    title: "Quiz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, sequi? Deserunt magnam eius",
    icon: "fa-solid fa-check",
  },
  {
    id: 7,
    appPath: "todo",
    title: "To-do List",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, sequi? Deserunt magnam eius",
    icon: "fa-solid fa-list-check",
  },
  {
    id: 8,
    appPath: "weather",
    title: "Weather",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, sequi? Deserunt magnam eius",
    icon: "fa-solid fa-umbrella",
  },
];
