import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HomeFeatureCard = () => {
  return (
    <div
      className={`max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 bg-[url('https://i.ibb.co/hZ8wMTD/cta-bg-3.jpg')] bg-cover h-[300px] flex flex-col justify-center items-start gap-3`}
    >
      <h1 className="text-black text-2xl font-semibold ">
        Get The Best Courses And Enhance Your Knowledge
      </h1>
      <button className="flex items-center gap-1 px-4 py-2 font-medium tracking-wide text-white  transition-colors duration-300 transform bg-[#0D5EF4] rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        Join Us
        <FaArrowRight />
      </button>
    </div>
  );
};

export default HomeFeatureCard;
