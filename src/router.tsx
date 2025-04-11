import { createBrowserRouter } from "react-router";
import Layout from "./layout/Layout";
import StartingPage from "./components/StartingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/about",
        element: <StartingPage />,
      },
    ],
  },
]);
