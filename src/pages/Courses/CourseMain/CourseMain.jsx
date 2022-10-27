import React, { useContext } from "react";
import { CoursesContext } from "../../../context/CoursesProvider/CoursesProvider";
import CourseCard from "./CourseCard/CourseCard";

const CourseMain = () => {
  const { courses } = useContext(CoursesContext);
  return (
    <div className="text-[#0F2239]">
      <div
        className={`flex justify-center items-center bg-[url('https://angfuzsoft.com/wordpress/acadu/wp-content/uploads/2022/08/breadcumb-bg.jpg')] py-[100px] w-full bg-cover`}
      >
        <h2 className="text-5xl text-white font-semibold uppercase">Courses</h2>
      </div>

      <p className="font-medium text-[16px]  mt-5 mx-5">
        We have{" "}
        <span className="text-[#0D5EF4]">{courses.length} courses </span>
        available for you
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5 w-full">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default CourseMain;
