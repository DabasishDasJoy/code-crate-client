import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const ResetPassword = () => {
  const { user, passwordReset } = useContext(AuthContext);
  const { register, handleSubmit } = useForm({});

  const onSubmit = (d) => {
    passwordReset(d.email)
      .then(() => {
        toast.success("Email has sent");
      })
      .catch((error) => toast.warning(error.message));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-5 px-10 mx-auto flex flex-col justify-between rounded-lg relative sm:w-[90%] md:w-[50%] shadow-lg min-h-[300px] border mt-10">
        <div>
          <label className="text-gray-700 dark:text-gray-200" Htmlfor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:text-gray-300dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            htmlFor="updateProfileModal"
            className="btn modal-button flex items-center gap-2 px-4 py-2 font-medium tracking-wide text-white  transition-colors duration-300 transform bg-[#0D5EF4] rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Send Password verification code
          </button>
        </div>
      </div>
    </form>
  );
};

export default ResetPassword;
