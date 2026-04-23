import { useParams } from "react-router";
import CalculatorApp from "../apps/CalculatorApp";
import CurrencyConverterApp from "../apps/CurrencyConverterApp";
import NotesApp from "../apps/NotesApp";
import PrayerTimesApp from "../apps/PrayerTimesApp";
import QuizApp from "../apps/QuizApp";
import TodoListApp from "../apps/TodoListApp";
import WeatherApp from "../apps/WeatherApp";
import ClockApp from "../apps/ClockApp";
import NotFoundApp from "./NotFoundApp";
import type { AppRoute } from "../config/appsConfig";
import type { ReactNode } from "react";

type AppsMap = {
  [route in AppRoute]: ReactNode;
}

export default function AppRenderer() {
  const appId = useParams().appId;

  const appsMap: AppsMap = {
    calculator: <CalculatorApp />,
    weather: <WeatherApp />,
    notes: <NotesApp />,
    todo: <TodoListApp />,
    clock: <ClockApp />,
    quiz: <QuizApp />,
    "currency-converter": <CurrencyConverterApp />,
    "prayer-times": <PrayerTimesApp />,
  };

  if (!(appId && appId in appsMap)) return <NotFoundApp />;

  return appsMap[appId as keyof typeof appsMap];
}
