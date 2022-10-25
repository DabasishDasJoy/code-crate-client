import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const CoursesContext = createContext();

const CoursesProvider = ({ children }) => {
  const courses = useLoaderData();
  const [selectedCourse, setSelectedCourse] = useState({});

  const coursesInfo = { courses, selectedCourse, setSelectedCourse };
  return (
    <CoursesContext.Provider value={coursesInfo}>
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesProvider;
