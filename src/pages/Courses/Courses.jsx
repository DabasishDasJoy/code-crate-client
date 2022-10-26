import React from "react";
import CourseSideNav from "./CourseLeftSide/CourseSideNav";
import CourseMain from "./CourseMain/CourseMain";

const Courses = () => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <CourseSideNav></CourseSideNav>
      </div>
      <div className="w-full">
        <CourseMain></CourseMain>
      </div>
    </div>
  );
};

export default Courses;
