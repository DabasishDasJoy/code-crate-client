import { createBrowserRouter } from "react-router-dom";
import CoursesProvider from "../../context/CoursesProvider/CoursesProvider";
import Main from "../../layouts/Main/Main";
import Login from "../../pages/Authentication/Login";
import Register from "../../pages/Authentication/Register";
import Courses from "../../pages/Courses/Courses";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";

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
    ],
  },
]);
