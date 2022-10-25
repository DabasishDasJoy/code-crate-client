import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CoursesContext } from "../../../context/CoursesProvider/CoursesProvider";

const CourseSideNav = () => {
  const { courses } = useContext(CoursesContext);

  return (
    <div className="border border-red-400 h-full">
      <h1>Course Side Nav</h1>
      <div className="min-h-full flex flex-col gap-5 justify-center items-center">
        {courses.map((course) => (
          <Link>{course.title}</Link>
        ))}
      </div>
    </div>
  );
};

export default CourseSideNav;
