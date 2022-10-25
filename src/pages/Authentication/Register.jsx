import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Register = () => {
  const { user, login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({});

  const onSubmit = (d) => {
    login(d.email, d.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex items-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
        <h2 className="text-2xl text-center font-semibold text-gray-700 dark:text-white">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              {...register("fullName")}
              placeholder="Full Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              {...register("photoUrl")}
              placeholder="Photo Url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              {...register("password")}
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <Link to={"/re"} className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </div>
          <p className="font-medium my-[16px] text-center">
            <span className="text-black">Already have an account?</span>{" "}
            <Link to={"/login"} className="underline text-[#F9A51A]">
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
