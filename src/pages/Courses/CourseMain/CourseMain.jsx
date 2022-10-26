import React, { useContext } from "react";
import { CoursesContext } from "../../../context/CoursesProvider/CoursesProvider";
import CourseCard from "./CourseCard/CourseCard";

const CourseMain = () => {
  const { courses } = useContext(CoursesContext);
  return (
    <>
      <div
        className={`flex justify-center items-center bg-[url("https://i.ibb.co/tY00ygg/breadcumb-bg.jpg")] min-h-[20%] w-full bg-cover`}
      >
        <h2 className="text-5xl text-white font-semibold uppercase">Courses</h2>
      </div>
      <p className="font-medium text-[16px] text-[#0F2239] mt-5 mx-5">
        We have{" "}
        <span className="text-[#0D5EF4]">{courses.length} courses </span>
        available for you
      </p>
      <div className="grid grid-cols-3 gap-5 p-5 w-full">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </>
  );
};

export default CourseMain;
