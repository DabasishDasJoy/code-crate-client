import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const { register, handleSubmit } = useForm({});

  const onSubmit = (d) => {
    updateUserProfile(d.name, d.photoURLoUrl)
      .then(() => {
        toast.success("Profile update successful!");
      })
      .catch((err) => toast.error((error) => error.message));
  };

  return (
    <div className="p-10 flex justify-center items-center">
      <div className="py-5 flex flex-col justify-between rounded-lg relative sm:w-[90%] md:w-[50%] shadow-lg min-h-[300px] border mt-10">
        <img
          className="object-cover w-24 h-24 mx-auto rounded-full absolute -top-10 right-2 border-2 border-[#3B82F6]"
          src={user?.photoURL}
          alt="user avatar"
        />
        <div className="p-10">
          <p className="text-2xl text-black font-bold">
            Name: {user?.displayName}
          </p>
          <p className="font-semibold">Email: {user?.email}</p>
        </div>
        <div className="flex justify-center items-center">
          <label
            htmlFor="updateProfileModal"
            className="btn modal-button flex items-center gap-2 px-4 py-2 font-medium tracking-wide text-white  transition-colors duration-300 transform bg-[#0D5EF4] rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Update Profile
          </label>
        </div>
      </div>

      {/* Update Profile Modal*/}
      <div>
        <input
          type="checkbox"
          id="updateProfileModal"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="updateProfileModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-black "
                  htmlFor="LoggingName"
                >
                  Email
                </label>
                <input
                  id="LoggingName"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md   focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  required
                  defaultValue={user?.email}
                  readOnly
                />
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-black "
                  htmlFor="LoggingName"
                >
                  Full Name
                </label>
                <input
                  id="LoggingName"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md   focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  defaultValue={user?.displayName}
                  required
                  {...register("name")}
                />
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-black "
                  htmlFor="LoggingPhotoUrl"
                >
                  Photo Url
                </label>
                <input
                  id="LoggingPhotoUrl"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md   focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  required
                  {...register("photoUrl")}
                />
              </div>
              <div className="flex justify-center p-3">
                <button
                  htmlFor="updateProfileModal"
                  className="flex items-center gap-2 px-4 py-2 font-medium tracking-wide text-white  transition-colors duration-300 transform bg-[#0D5EF4] rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
