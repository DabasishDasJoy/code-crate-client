import React from "react";
import CourseSideNav from "./CourseLeftSide/CourseSideNav";
import CourseMain from "./CourseMain/CourseMain";

const Courses = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 flex flex-col border border-orange-400">
        <CourseSideNav></CourseSideNav>
      </div>
      <div className="col-span-9">
        <CourseMain></CourseMain>
      </div>
    </div>
  );
};

export default Courses;
