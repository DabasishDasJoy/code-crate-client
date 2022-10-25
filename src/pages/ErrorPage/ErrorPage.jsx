import React from "react";
import { FaHome } from "react-icons/fa";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center flex flex-col items-center h-screen justify-center">
      <img
        src="https://i.ibb.co/F6dBT5Y/vector-error.png"
        alt=""
        className="mx-auto"
      />
      <p className="text-[48px] mt-[-80px] font-bold leading-5">
        <span className="text-[#0D5EF4]"> Ooops! </span>
        <span className="text-[#0F2239]">
          {error.statusText || error.message}
        </span>{" "}
      </p>
      <p className="mt-5">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>

      <Link to={"/"}>
        <button className="btn mt-10 text-white bg-[#0D5EF4] flex gap-2">
          <FaHome /> Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
