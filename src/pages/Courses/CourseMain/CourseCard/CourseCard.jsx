import { useContext } from "react";
import { CoursesContext } from "../../../../context/CoursesProvider/CoursesProvider";

const CourseCard = ({
  course,
  course: { _id, img_url, title, price, author, ratings },
}) => {
  const { author_name, author_img } = author[0];
  const { setSelectedCourse } = useContext(CoursesContext);

  return (
    <div className="w-[350px] h-100 bg-white rounded-lg shadow-lg cursor-pointer">
      <div className="p-5">
        <img
          className="object-cover w-full h-40 shadow rounded-lg"
          src={img_url}
          alt="NIKE AIR"
        />
      </div>

      <div className="px-5 py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-black ">{title}</h1>
          <div className="rating rating-xs rating-half">
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
          </div>
        </div>
        <p className="text-gray-500 flex items-center gap-1 font-medium">
          <div className="w-6 h-6 overflow-hidden border-2 border-gray-400 rounded-full">
            <img
              src={author_img}
              className="object-cover w-full h-full"
              alt="avatar"
            />
          </div>
          {author_name}
        </p>
        <hr className="border-dashed" />
      </div>
    </div>
  );
};

export default CourseCard;
