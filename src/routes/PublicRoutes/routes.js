import { createBrowserRouter } from "react-router-dom";
import CoursesProvider from "../../context/CoursesProvider/CoursesProvider";
import Main from "../../layouts/Main/Main";
import Login from "../../pages/Authentication/Login";
import Register from "../../pages/Authentication/Register";
import Blog from "../../pages/Blog/Blog";
import Checkout from "../../pages/Checkout/Checkout";
import CourseDetails from "../../pages/Courses/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import Profile from "../../pages/Profile/Profile";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",

    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        loader: () => {
          return fetch("https://code-crate-server.vercel.app/courses");
        },
        element: (
          <CoursesProvider>
            <Courses></Courses>
          </CoursesProvider>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/course/:id",
        loader: ({ params }) => {
          return fetch(
            `https://code-crate-server.vercel.app/course/${params.id}`
          );
        },
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) => {
          return fetch(
            `https://code-crate-server.vercel.app/course/${params.id}`
          );
        },
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/userProfile",
        element: <Profile></Profile>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/reset",
        element: <ResetPassword></ResetPassword>,
      },
    ],
  },
]);
