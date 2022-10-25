import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";

export const CoursesContext = createContext();

const CoursesProvider = ({ children }) => {
  const courses = useLoaderData();
  const coursesInfo = { courses };
  return (
    <CoursesContext.Provider value={coursesInfo}>
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesProvider;
