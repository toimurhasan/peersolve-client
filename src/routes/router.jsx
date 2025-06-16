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
import AssignmentInfo from "../pages/AssignmentInfo";
import useAxiosSecure from "../hooks/useAxiosSecure";
import UpdateAssignment from "../pages/UpdateAssignment";

const axiosSecure = useAxiosSecure();

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
        hydrateFallbackElement: <Loader></Loader>,
        loader: () => axios(`${import.meta.env.VITE_API_URL}/assignments`),
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
        path: "/my-attempted-assignments/:email",
        loader: ({ params }) => axiosSecure(`/my-attempted-assignments/${params.email}`),
        element: (
          <PrivateRoute>
            <MyAttemptedAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: "/assignment/:id",
        hydrateFallbackElement: <Loader></Loader>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: ({ params }) => axiosSecure(`/assignment/${params.id}`),
        element: (
          <PrivateRoute>
            <AssignmentDetails></AssignmentDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/assignment-info/:id",
        hydrateFallbackElement: <Loader></Loader>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: ({ params }) => axiosSecure(`/assignment-info/${params.id}`),
        element: (
          <PrivateRoute>
            <AssignmentInfo></AssignmentInfo>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-assignment/:id",
        Component: UpdateAssignment,
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
