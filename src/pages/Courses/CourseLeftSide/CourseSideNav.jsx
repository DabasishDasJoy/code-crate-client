import React, { useContext } from "react";
import { FaFileCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CoursesContext } from "../../../context/CoursesProvider/CoursesProvider";

const CourseSideNav = () => {
  const { courses, setSelectedCourse } = useContext(CoursesContext);

  return (
    <div className="flex flex-col text-black w-64 h-screen px-4 py-8 bg-white border-r sticky top-0">
      <h3 className="text-center font-semibold text-2xl">We Are Offering</h3>
      <hr className="w-[90%] text-3xl mt-4 mx-auto font" />
      <div className="flex flex-col flex-1 mt-6 font-semibold">
        <nav className="flex flex-col gap-5 px-5">
          {courses.map((course) => (
            <Link to={`/course/${course._id}`} key={course._id}>
              <button
                onClick={() => setSelectedCourse(course)}
                className="flex gap-1 items-center"
              >
                <FaFileCode /> {course.title}
              </button>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CourseSideNav;
