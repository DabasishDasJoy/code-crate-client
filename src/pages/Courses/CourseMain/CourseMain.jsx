import React, { useContext } from "react";
import { CoursesContext } from "../../../context/CoursesProvider/CoursesProvider";
import CourseCard from "./CourseCard/CourseCard";

const CourseMain = () => {
  const { courses } = useContext(CoursesContext);
  return (
    <>
      <h1 className="text-center">Courses</h1>
      <div className="grid grid-cols-3 gap-5 p-5">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </>
  );
};

export default CourseMain;
