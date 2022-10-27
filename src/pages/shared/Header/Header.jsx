import React, { useContext, useEffect, useState } from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { themeChange } from "theme-change";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  const location = useLocation();
  const path = location.pathname;

  return (
    <nav
      className={`relative shadow z-50  ${
        path === "/"
          ? "bg-[url('https://angfuzsoft.com/wordpress/acadu/wp-content/plugins/acadu-core/assets/img/header_bg_1.png')] text-white"
          : "text-black bg-white"
      }`}
    >
      <div className="container px-6 py-4 mx-auto ">
        <div className="lg:flex lg:items-center">
          <div className="flex items-center justify-between ">
            {/* brand */}
            <div className="text-xl font-semibold ">
              <NavLink
                to={"/"}
                className="flex gap-1 text-2xl font-bold  transition-colors duration-100 transform  lg:text-3xl"
              >
                <img
                  src="https://i.ibb.co/PtR21RC/favicon.png"
                  alt="bran logo"
                  className="w-10 h-10"
                />
                Code Crate
              </NavLink>
            </div>
            {/* brand */}

            <div className="flex lg:hidden items-center gap-3">
              {/* Profile and toggle for mobile only */}
              <div className="flex lg:hidden  justify-center lg:items-center gap-2">
                <label className="swap swap-rotate">
                  {/* <!-- this hidden checkbox controls the state --> */}
                  <input
                    type="checkbox"
                    data-toggle-theme="light,dark"
                    data-act-class="ACTIVECLASS"
                  />

                  {/* <!-- sun icon --> */}
                  <svg
                    className="swap-on fill-current w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* <!-- moon icon --> */}
                  <svg
                    className="swap-off fill-current w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500  hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={` ${!isOpen ? "hidden" : "block"} w-6 h-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={` ${isOpen ? "hidden" : "block"} w-6 h-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`${
              !isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between flex-1 top-[90px] uppercase font-medium text-sm`}
          >
            <div className="flex sm:flex-col-reverse lg:flex-row lg:items-center lg:justify-between lg:w-full">
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <NavLink
                  to={"/courses"}
                  className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Courses
                </NavLink>
                <NavLink
                  to={"/faq"}
                  className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  FAQ
                </NavLink>
                <NavLink
                  to={"/blog"}
                  className="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Blog
                </NavLink>
              </div>
              <div className="lg:flex lg:items-center justify-between mt-4 lg:mt-0 gap-3">
                <div className="lg:flex sm:hidden w-7 items-center justify-center">
                  <label className="swap swap-rotate">
                    {/* <!-- this hidden checkbox controls the state --> */}

                    <input
                      type="checkbox"
                      data-toggle-theme="light,dark"
                      data-act-class="ACTIVECLASS"
                    />

                    {/* <!-- sun icon --> */}
                    <svg
                      className="swap-on fill-current w-full"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* <!-- moon icon --> */}
                    <svg
                      className="swap-off fill-current w-full"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </div>

                {user && user.uid && (
                  <Link to={"/userProfile"}>
                    <button
                      type="button"
                      className="tooltip tooltip-left tooltip-primary flex items-center focus:outline-none "
                      aria-label="toggle profile dropdown"
                      data-tip={user?.displayName}
                    >
                      <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                        <img
                          src={user?.photoURL}
                          className="object-cover w-full h-full"
                          alt="avatar"
                        />
                      </div>
                      <h3 className="mx-2   lg:hidden">{user?.displayName}</h3>
                    </button>
                  </Link>
                )}

                <div className="flex items-center gap-2 px-4 py-2 font-medium tracking-wide text-white  transition-colors duration-300 transform bg-[#0D5EF4] rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  {user && user.uid ? (
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-1 uppercase"
                    >
                      Logout
                      <FaSignOutAlt />
                    </button>
                  ) : (
                    <Link
                      to={"/login"}
                      className="flex uppercase items-center gap-1"
                    >
                      Login
                      <FaSignInAlt />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
