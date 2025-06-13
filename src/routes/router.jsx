import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import PrivateRoute from "./PrivateRoute";
import PendingAssignment from "../pages/PendingAssignment";
import CreateAssignments from "../pages/CreateAssignments";
import AllAssignments from "../pages/AllAssignments";
import Loader from "../components/Loader";
import axios from "axios";
import AssignmentDetails from "../pages/AssignmentDetails";
import MyAttemptedAssignments from "../pages/MyAttemptedAssignments";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/assignments",
        hydrateFallbackElement: <Loader></Loader>,
        loader: () => axios(`${import.meta.env.VITE_API_URL}/assignments`),
        Component: AllAssignments,
      },
      {
        path: "/pending-assignments",
        element: (
          <PrivateRoute>
            <PendingAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "/create-assignments",
        element: (
          <PrivateRoute>
            <CreateAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-attempted-assignments",
        element: (
          <PrivateRoute>
            <MyAttemptedAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: "/assignment/:id",
        loader: ({ params }) => axios(`${import.meta.env.VITE_API_URL}/assignment/${params.id}`),
        Component: AssignmentDetails,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/forget-password",
        Component: ForgetPassword,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;
