import React, { useContext } from "react";
import { FaFileCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CoursesContext } from "../../../context/CoursesProvider/CoursesProvider";

const CourseSideNav = () => {
  const { courses, setSelectedCourse } = useContext(CoursesContext);

  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r sticky top-0">
      <h3 className="text-center font-semibold text-2xl">We Are Offering</h3>
      <div className="relative mt-6">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>

        <input
          type="text"
          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
          placeholder="Search"
        />
      </div>

      <div className="flex flex-col flex-1 mt-6">
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
