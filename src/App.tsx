import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import NotFoundPage from "./pages/NotFoundPage";
import AppRenderer from "./pages/AppRenderer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/apps/:appId",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <AppRenderer />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
