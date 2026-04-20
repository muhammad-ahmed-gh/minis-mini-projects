import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import NotFound from "./pages/NotFound";
import AppRenderer from "./pages/AppRenderer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/app/:appId",
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
