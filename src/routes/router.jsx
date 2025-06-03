import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <h1>hello</h1>,
      },
    ],
  },
]);

export default router;
