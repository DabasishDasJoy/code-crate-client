import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const { login, loginWithGoogle, loginWithFacebook, loginWithGitHub } =
    useContext(AuthContext);
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

  const handleFacebookLogin = () => {
    loginWithFacebook()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        console.log(res.user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };
  const handleGithubLogin = () => {
    loginWithGitHub()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl my-5">
      <div
        className="hidden bg-cover lg:block lg:w-1/2"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80")`,
        }}
      ></div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full px-6 py-8 md:px-8 lg:w-1/2"
      >
        <h2 className="text-2xl font-semibold text-center text-black uppercase">
          Sign In
        </h2>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b  lg:w-1/4"></span>

          <p className="text-xs text-center text-gray-500 uppercase ">with</p>

          <span className="w-1/5 border-b  lg:w-1/4"></span>
        </div>

        <div className="flex justify-evenly items-center">
          {/* facebook */}
          <button
            onClick={handleFacebookLogin}
            className="flex items-center justify-center mt-4 text-black transition-colors duration-300 transform border rounded-lg hover:bg-gray-50 "
          >
            <div className="px-4 py-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="w-6 h-6"
              >
                <linearGradient
                  id="Ld6sqrtcxMyckEl6xeDdMa"
                  x1="9.993"
                  x2="40.615"
                  y1="9.993"
                  y2="40.615"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#2aa4f4" />
                  <stop offset="1" stopColor="#007ad9" />
                </linearGradient>
                <path
                  fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                  d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                />
                <path
                  fill="#fff"
                  d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                />
              </svg>
              <span className="w-5/6  text-gray-600 font-bold text-center">
                Facebook
              </span>
            </div>
          </button>

          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center mt-4 text-black transition-colors duration-300 transform border rounded-lg hover:bg-gray-50 "
          >
            <div className="px-4 py-2 flex items-center">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
              <span className="w-5/6  text-gray-600 font-bold text-center">
                Google
              </span>
            </div>
          </button>

          {/* Github */}
          <button
            onClick={handleGithubLogin}
            className="flex items-center justify-center mt-4 text-black transition-colors duration-300 transform border rounded-lg hover:bg-gray-50 "
          >
            <div className="px-4 py-2 flex items-center">
              <svg
                className="w-6 h-6"
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
              >
                <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" />
              </svg>
              <span className="w-5/6  text-gray-600 font-bold text-center">
                GitHub
              </span>
            </div>
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b  lg:w-1/4"></span>

          <p className="text-xs text-center text-gray-500 uppercase ">
            or login with email
          </p>

          <span className="w-1/5 border-b  lg:w-1/4"></span>
        </div>

        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-black "
            htmlFor="LoggingEmailAddress"
          >
            Email Address
          </label>
          <input
            id="LoggingEmailAddress"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md   focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
            required
            {...register("email")}
          />
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <label
              className="block mb-2 text-sm font-medium text-black "
              htmlFor="loggingPassword"
            >
              Password
            </label>
            <Link
              to={"/reset"}
              className="inline-block mt-4 text-center text-blue-500 md:mt-0 hover:underline dark:text-blue-400"
            >
              Forgot Password?
            </Link>
          </div>

          <input
            id="loggingPassword"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
            required
            {...register("password")}
          />
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#3B82F6] rounded hover:bg-[#2c66c3] focus:outline-none focus:bg-[#3B82F6]"
          >
            Login
          </button>
        </div>
        <p className="mt-8 text-xs font-light text-center text-gray-400">
          {" "}
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="font-medium text-gray-700  hover:underline"
          >
            Create One
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
