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

type CalculatorSettings = {
  keys: {
    id: number;
    label: string;
    bg?: string;
    long?: boolean;
  }[];
};

type WeatherSettings = { [index: string]: unknown };
type NotesSettings = { [index: string]: unknown };
type TodoSettings = { [index: string]: unknown };
type ClockSettings = { [index: string]: unknown };
type QuizSettings = { [index: string]: unknown };
type CurrencyConverterSettings = { [index: string]: unknown };
type PrayerTimesSettings = { [index: string]: unknown };

type AppSettingsMap = {
  calculator: CalculatorSettings;
  weather: WeatherSettings;
  notes: NotesSettings;
  todo: TodoSettings;
  clock: ClockSettings;
  quiz: QuizSettings;
  "currency-converter": CurrencyConverterSettings;
  "prayer-times": PrayerTimesSettings;
};

type AppsData = {
  [route in AppRoute]: {
    headerLogo: string;
    headerLinks: HeaderLinks;
    settings: AppSettingsMap[route];
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
        { id: 1, label: "(" },
        { id: 2, label: ")" },
        { id: 3, label: "e" },
        { id: 4, label: "π" },

        { id: 5, label: "7" },
        { id: 6, label: "8" },
        { id: 7, label: "9" },
        { id: 20, label: "⨯" },

        { id: 9, label: "4" },
        { id: 10, label: "5" },
        { id: 11, label: "6" },
        { id: 12, label: "+" },

        { id: 13, label: "1" },
        { id: 14, label: "2" },
        { id: 15, label: "3" },
        { id: 16, label: "-" },

        { id: 8, label: "DEL"},
        { id: 18, label: "0" },
        { id: 17, label: "." },
        { id: 19, label: "/" },

        { id: 21, label: "RESET", long: true, bg: "second" },
        { id: 22, label: "=", long: true, bg: "red" },
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
