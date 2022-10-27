import React, { createRef } from "react";
import { FaArrowLeft, FaDownload, FaKey } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import ReactToPdf from "react-to-pdf";

const CourseDetails = () => {
  const ref = createRef();
  const { _id, title, img_url, author, ratings } = useLoaderData();

  return (
    <div>
      <div
        className={`flex justify-center items-center bg-[url("https://i.ibb.co/tY00ygg/breadcumb-bg.jpg")] py-[100px] w-full bg-cover`}
      >
        <h2 className="text-5xl text-white font-semibold uppercase">{title}</h2>
      </div>

      <div className="flex justify-between px-10 mt-5">
        <Link
          to={"/courses"}
          className="flex gap-1 items-center px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#0D5EF4] rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          <FaArrowLeft></FaArrowLeft>
          Go Back to courses
        </Link>
        <ReactToPdf targetRef={ref} filename={`${title}.pdf`}>
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="flex gap-1 items-center px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#0D5EF4] rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              <FaDownload />
              Download
            </button>
          )}
        </ReactToPdf>
      </div>

      <div ref={ref} className="grid lg:grid-cols-12 grid-cols-1 py-10">
        <div className="col-span-9 flex flex-col gap-10 items-center lg:order-1 sm:order-1">
          <div className="shadow-lg w-[90%]  p-10 rounded-lg">
            <img src={img_url} alt="" className="w-full border rounded-lg" />
            <div>
              <h3 className="text-[36px] font-bold text-black">{title}</h3>
            </div>
            <div className="flex gap-5 text-[16px] font-medium">
              <p className="border-r-2 pr-4">Instrutor: {author.author_name}</p>
              <p className="border-r-2 pr-4">Ratings: {ratings}</p>
            </div>
          </div>

          <div className="shadow-lg w-[90%]  p-10 rounded-lg">
            <h4 className="text-[24px] font-semibold">About this Course</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ad eligendi at eius molestiae tempore quisquam itaque explicabo
              ipsum, reiciendis deleniti porro consequuntur doloribus quas
              facere! Velit magnam culpa, sunt minima, maxime magni
              necessitatibus ex fugit corrupti fugiat asperiores placeat fuga
              dolorem eligendi quibusdam facere distinctio possimus doloremque
              reiciendis pariatur!
            </p>
          </div>

          <button className="sm:order-3 lg:order-2">
            <Link
              to={`/checkout/${_id}`}
              className="flex items-center gap-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#0D5EF4] rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Get premium access
              <FaKey />
            </Link>
          </button>
        </div>
        <div className="col-span-3 flex flex-col gap-10 items-center">
          <div className="border shadow-lg rounded-lg p-8 h-[500px] w-[90%]">
            <h3 className="text-2xl text-center font-bold">Requirements</h3>
            <ul className="list-disc list-inside mt-5 ">
              <li>Home broadband</li>
              <li>Personal Laptop</li>
              <li>Computer Fundamental</li>
              <li>Basic knowledge about Computer Programming</li>
            </ul>
          </div>
          <div className="border shadow-lg rounded-lg p-8 h-[500px] w-[90%]">
            <h3 className="text-2xl text-center font-bold">Audience</h3>
            <ul className="list-disc list-inside mt-5">
              <li>Beginners in Programming</li>
              <li>Computer Science students.</li>
              <li>Competetive programmers.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
