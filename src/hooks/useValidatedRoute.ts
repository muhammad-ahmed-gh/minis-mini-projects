import { useParams } from "react-router";
import { appsData, type AppRoute } from "../config/appsConfig";

export const useValidatedRoute = function () {
  const route = useParams().appId;

  return !route || !(route in appsData) ? null : (route as AppRoute);
};
