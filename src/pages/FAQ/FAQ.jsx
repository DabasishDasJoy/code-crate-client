import React, { useState } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-white ">
      <div
        className={`flex justify-center items-center bg-[url("https://i.ibb.co/tY00ygg/breadcumb-bg.jpg")] py-[100px] w-full bg-cover`}
      >
        <h2 className="text-5xl text-white font-semibold uppercase">
          Have Any questions?
        </h2>
      </div>
      <div className="container px-6 py-12 mx-auto">
        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          <div className="lg:mx-12">
            <h1 className="text-xl font-semibold  ">Table of Content</h1>

            <div className="mt-4 space-y-4 lg:mt-8">
              <Link to={""} className="block text-blue-500 hover:underline">
                General
              </Link>
              <Link to={""} className="block text-gray-500  hover:underline">
                Trust & Safety
              </Link>
              <Link to={""} className="block text-gray-500  hover:underline">
                Services
              </Link>
              <Link to={""} className="block text-gray-500  hover:underline">
                Billing
              </Link>
              <Link to={""} className="block text-gray-500  hover:underline">
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
                <h1 className="mx-4 text-xl text-gray-700 ">
                  How Can I Purchace the Course ?
                </h1>
              </label>

              <div className="flex mt-2 md:mx-10 collapse-content transition delay-75 ease-in-out">
                <span className="border border-blue-500"></span>

                <p className="max-w-3xl px-4 text-gray-500 ">
                  Go to courses section. Then select the course and then click
                  get premium access.
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
                <h1 className="mx-4 text-xl text-gray-700 ">
                  How can go get premium access ?
                </h1>
              </label>

              <div className="flex mt-2 md:mx-10 collapse-content transition delay-75 ease-in-out">
                <span className="border border-blue-500"></span>

                <p className="max-w-3xl px-4 text-gray-500 ">
                  To get premium access you need to have an account. If you
                  already have account then login otherwise create a new
                  account.
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
                <h1 className="mx-4 text-xl text-gray-700 ">
                  How can see my profile ?
                </h1>
              </label>

              <div className="flex mt-2 md:mx-10 collapse-content transition delay-75 ease-in-out">
                <span className="border border-blue-500"></span>

                <p className="max-w-3xl px-4 text-gray-500 ">
                  Go to your profile avatar then click the avater,it will direct
                  you to the profile page.
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
