import React, { useState } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-4xl dark:text-white">
          Have any Questions?
        </h1>

        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          <div className="lg:mx-12">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              Table of Content
            </h1>

            <div className="mt-4 space-y-4 lg:mt-8">
              <Link
                to={"#"}
                className="block text-blue-500 dark:text-blue-400 hover:underline"
              >
                General
              </Link>
              <Link
                to={"#"}
                className="block text-gray-500 dark:text-gray-300 hover:underline"
              >
                Trust & Safety
              </Link>
              <Link
                to={"#"}
                className="block text-gray-500 dark:text-gray-300 hover:underline"
              >
                Services
              </Link>
              <Link
                to={"#"}
                className="block text-gray-500 dark:text-gray-300 hover:underline"
              >
                Billing
              </Link>
              <Link
                to={"#"}
                className="block text-gray-500 dark:text-gray-300 hover:underline"
              >
                Office Cleaning
              </Link>
            </div>
          </div>

          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
            <div className="collapse">
              <input type="checkbox" className="peer" />
              <label className="collapse-title flex items-center focus:outline-none ">
                <svg
                  className="swap-off fill-current flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="swap-on fill-current flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                  How i can play for my appoinment ?
                </h1>
              </label>

              <div className="flex mt-2 md:mx-10 collapse-content transition delay-75 ease-in-out">
                <span className="border border-blue-500"></span>

                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, eum quae. Harum officiis reprehenderit ex quia ducimus
                  minima id provident molestias optio nam vel, quidem iure
                  voluptatem, repellat et ipsa.
                </p>
              </div>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />
            <div className="collapse">
              <input type="checkbox" className="peer" />
              <label className="collapse-title flex items-center focus:outline-none ">
                <svg
                  className="swap-off fill-current flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="swap-on fill-current flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                  How i can play for my appoinment ?
                </h1>
              </label>

              <div className="flex mt-2 md:mx-10 collapse-content transition delay-75 ease-in-out">
                <span className="border border-blue-500"></span>

                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, eum quae. Harum officiis reprehenderit ex quia ducimus
                  minima id provident molestias optio nam vel, quidem iure
                  voluptatem, repellat et ipsa.
                </p>
              </div>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />
            <div className="collapse">
              <input type="checkbox" className="peer" />
              <label className="collapse-title flex items-center focus:outline-none ">
                <svg
                  className="swap-off fill-current flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="swap-on fill-current flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                  How i can play for my appoinment ?
                </h1>
              </label>

              <div className="flex mt-2 md:mx-10 collapse-content transition delay-75 ease-in-out">
                <span className="border border-blue-500"></span>

                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, eum quae. Harum officiis reprehenderit ex quia ducimus
                  minima id provident molestias optio nam vel, quidem iure
                  voluptatem, repellat et ipsa.
                </p>
              </div>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
