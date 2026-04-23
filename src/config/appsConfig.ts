// import { useParams } from "react-router";
// import CalculatorApp from "../apps/CalculatorApp";
// import CurrencyConverterApp from "../apps/CurrencyConverterApp";
// import NotesApp from "../apps/NotesApp";
// import PrayerTimesApp from "../apps/PrayerTimesApp";
// import QuizApp from "../apps/QuizApp";
// import TodoListApp from "../apps/TodoListApp";
// import WeatherApp from "../apps/WeatherApp";
// import ClockApp from "../apps/ClockApp";

// export const appsMap = {
//   calculator: <CalculatorApp />,
//   weather: <WeatherApp />,
//   notes: <NotesApp />,
//   todo: <TodoListApp />,
//   clock: <ClockApp />,
//   quiz: <QuizApp />,
//   "currency-converter": <CurrencyConverterApp />,
//   "prayer-times": <PrayerTimesApp />,
// };

export type AppRoute =
  | "calculator"
  | "weather"
  | "notes"
  | "todo"
  | "clock"
  | "quiz"
  | "currency-converter"
  | "prayer-times";

type HeaderLinks = {
  id: number;
  label: string;
  href: string;
  target?: string;
  rel?: string;
}[];

type AppsData = {
  [route in AppRoute]: {
    headerLogo: string;
    headerLinks: HeaderLinks;
    settings: { [index: string]: unknown };
  };
};

export const appsData: AppsData = {
  calculator: {
    headerLogo: "Calculator",
    headerLinks: [
      {
        id: 1,
        label: "home",
        href: "/",
      },
    ],
    settings: {
      keys: [
        { id: 1, label: "7" },
        { id: 2, label: "8" },
        { id: 3, label: "9" },
        { id: 4, label: "DEL", bg: "second" },
        { id: 5, label: "4" },
        { id: 6, label: "5" },
        { id: 7, label: "6" },
        { id: 8, label: "+" },
        { id: 9, label: "1" },
        { id: 10, label: "2" },
        { id: 11, label: "3" },
        { id: 12, label: "-" },
        { id: 13, label: "." },
        { id: 14, label: "0" },
        { id: 15, label: "/" },
        { id: 16, label: "⨯" },
        { id: 17, label: "RESET", long: true, bg: "second" },
        { id: 18, label: "=", long: true, bg: "red" },
      ],
    },
  },
  weather: {
    headerLogo: "Weather",
    headerLinks: [
      {
        id: 1,
        label: "home",
        href: "/",
      },
    ],
    settings: {},
  },
  notes: {
    headerLogo: "Notes",
    headerLinks: [
      {
        id: 1,
        label: "home",
        href: "/",
      },
    ],
    settings: {},
  },
  todo: {
    headerLogo: "To-do List",
    headerLinks: [
      {
        id: 1,
        label: "home",
        href: "/",
      },
    ],
    settings: {},
  },
  clock: {
    headerLogo: "Clock",
    headerLinks: [
      {
        id: 1,
        label: "home",
        href: "/",
      },
    ],
    settings: {},
  },
  quiz: {
    headerLogo: "Quiz",
    headerLinks: [
      {
        id: 1,
        label: "home",
        href: "/",
      },
    ],
    settings: {},
  },
  "currency-converter": {
    headerLogo: "Currency Converter",
    headerLinks: [
      {
        id: 1,
        label: "home",
        href: "/",
      },
    ],
    settings: {},
  },
  "prayer-times": {
    headerLogo: "Prayer Times",
    headerLinks: [
      {
        id: 1,
        label: "home",
        href: "/",
      },
    ],
    settings: {},
  },
};
