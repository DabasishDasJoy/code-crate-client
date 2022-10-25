import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
        <h2 class="text-2xl text-center font-semibold text-gray-700 dark:text-white">
          Sign In
        </h2>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
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
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <Link
                to={"/resetpassword"}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="font-medium my-[16px] text-center">
            <span className="text-black">Don't have an account?</span>{" "}
            <Link to={"/register"} className="underline text-[#F9A51A]">
              Create an account
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
