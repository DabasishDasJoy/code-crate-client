import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit } = useForm({});
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (d) => {
    login(d.email, d.password)
      .then((res) => {
        console.log(res.user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex items-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
        <h2 className="text-2xl text-center font-semibold text-gray-700 dark:text-white">
          Sign In
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
              type="password"
              {...register("password")}
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p className="font-medium my-[16px] text-center">
            <span className="text-black">Don't have an account?</span>{" "}
            <Link to={"/register"} className="underline text-[#F9A51A]">
              Create an account
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
