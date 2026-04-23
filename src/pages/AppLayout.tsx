import { Outlet } from "react-router";
import AppHeader from "../components/AppLayout/AppHeader";

export default function AppLayout() {

  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}
