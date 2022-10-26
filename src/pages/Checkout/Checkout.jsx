import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { CoursesContext } from "../../context/CoursesProvider/CoursesProvider";

const Checkout = () => {
  const { selectedCourse } = useContext(CoursesContext);
  console.log(
    "🚀 ~ file: Checkout.jsx ~ line 7 ~ Checkout ~ selectedCourse",
    selectedCourse
  );
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center">
      <section class="w-[50%] p-6 mx-auto bg-white rounded-md shadow-md mt-10">
        <h2 class="text-center text-3xl font-semibold text-black capitalize mb-5">
          Checkout
        </h2>
        <h2 class="text-lg font-semibold text-black capitalize">
          Course: {selectedCourse.title}
        </h2>
        <h2 class="text-lg font-semibold text-black capitalize">
          Price: {selectedCourse.price}
        </h2>

        <form>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-black " for="username">
                Name
              </label>
              <input
                id="username"
                defaultValue={user?.displayName}
                type="text"
                class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-black " for="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                defaultValue={user?.email}
                class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-black " for="password">
                Address
              </label>
              <input
                id="password"
                type="password"
                class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-black " for="passwordConfirmation">
                Contact
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Checkout;
