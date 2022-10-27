import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Checkout = () => {
  const { title, price } = useLoaderData();

  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center">
      <section className="w-[50%] p-6 mx-auto bg-white rounded-md shadow-md mt-10">
        <h2 className="text-center text-3xl font-semibold text-black capitalize mb-5">
          Checkout
        </h2>
        <h2 className="text-lg font-semibold text-black capitalize">
          Course: {title}
        </h2>
        <h2 className="text-lg font-semibold text-black capitalize">
          Price: {price}
        </h2>

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-black " htmlFor="username">
                Name
              </label>
              <input
                id="username"
                defaultValue={user?.displayName}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-black " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                defaultValue={user?.email}
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-black " htmlFor="password">
                Address
              </label>
              <input
                id="password"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-black " htmlFor="passwordConfirmation">
                Contact
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Checkout;
