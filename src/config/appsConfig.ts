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
  },
};
