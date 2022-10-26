import { useContext } from "react";
import { Link } from "react-router-dom";
import { CoursesContext } from "../../../../context/CoursesProvider/CoursesProvider";

const CourseCard = ({
  course,
  course: { _id, img_url, title, price, author, ratings },
}) => {
  const { author_name, author_img } = author[0];
  const { setSelectedCourse } = useContext(CoursesContext);

  return (
    <Link to={`/course/${_id}`}>
      <div className="w-[350px] h-100 bg-white rounded-lg shadow-lg cursor-pointer relative">
        {ratings > 4 && (
          <div className="absolute top-5 right-5 badge bg-red-600 border-none ">
            Top Rated
          </div>
        )}
        <div className="p-5">
          <img
            className="object-cover w-full h-40 shadow rounded-lg"
            src={img_url}
            alt="courseImage"
          />
        </div>

        <div className="flex flex-col gap-3 px-5 py-2">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-black ">{title}</h1>
            <div className="rating rating-xs rating-half flex items-center">
              <input type="radio" name="rating-1" className="rating-hidden" />
              {}
              <>
                <input
                  type="radio"
                  name="rating-1"
                  className="bg-gray-500 mask mask-star-2 mask-half-1"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="bg-green-500 mask mask-star-2 mask-half-2"
                />
              </>
              <p>({ratings})</p>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="text-gray-500 flex items-center gap-1 font-medium">
              <div className="w-6 h-6 overflow-hidden border-2 border-gray-400 rounded-full">
                <img
                  src={author_img}
                  className="object-cover w-full h-full"
                  alt="avatar"
                />
              </div>
              <p>{author_name}</p>
            </div>
            <p className="text-xl font-bold mt-2">{price}</p>
            <hr className="border-dashed mt-5" />
            <div className="flex justify-between mt-2">
              <small>Lessons</small>
              <small>Students</small>
              <small>17 h 30 m</small>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
