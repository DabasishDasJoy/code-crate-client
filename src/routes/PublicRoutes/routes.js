import { createBrowserRouter } from "react-router-dom";
import CoursesProvider from "../../context/CoursesProvider/CoursesProvider";
import Main from "../../layouts/Main/Main";
import Login from "../../pages/Authentication/Login";
import Register from "../../pages/Authentication/Register";
import Checkout from "../../pages/Checkout/Checkout";
import CourseDetails from "../../pages/Courses/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import Profile from "../../pages/Profile/Profile";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      return fetch("https://code-crate-server.vercel.app/courses");
    },
    element: (
      <CoursesProvider>
        <Main></Main>
      </CoursesProvider>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",

        element: <Courses></Courses>,
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
            `https://code-crate-server.vercel.app/courses/${params.id}`
          );
        },
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/checkout",
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
    ],
  },
]);
