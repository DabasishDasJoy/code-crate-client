import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CoursesContext } from "../../../context/CoursesProvider/CoursesProvider";

const CourseSideNav = () => {
  const { courses, setSelectedCourse } = useContext(CoursesContext);

  return (
    <div className="border border-red-400 h-full">
      <h1>Course Side Nav</h1>
      <div className="min-h-full flex flex-col gap-5 justify-center items-center">
        {courses.map((course) => (
          <button onClick={() => setSelectedCourse(course)}>
            <Link to={`/course/${course._id}`} key={course._id}>
              {course.title}
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseSideNav;
