import React, { useContext, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((res) => {
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl rounded-none p-8 md:p-12">
        <div className="card-body p-0">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login your account
          </h2>

          <div className="divider mb-8"></div>

          <form onSubmit={handleLogin}>
            {/* Email Field */}
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-bold text-gray-700">
                  Email address
                </span>
              </label>
              <label className="input-group">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlineMail className="text-gray-400 text-xl" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="input bg-gray-100 w-full pl-10 focus:outline-none focus:border-gray-400 border-none rounded-sm"
                  />
                </div>
              </label>
            </div>

            {/* Password Field */}
            <div className="form-control w-full mb-8">
              <label className="label">
                <span className="label-text font-bold text-gray-700">
                  Password
                </span>
              </label>
              <label className="input-group">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlineLockClosed className="text-gray-400 text-xl" />
                  </div>
                  <input
                    required
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="input bg-gray-100 w-full pl-10 focus:outline-none focus:border-gray-400 border-none rounded-sm"
                  />
                </div>
              </label>
            </div>

            {/* Login Button */}
            <div className="form-control mt-6">
              <button className="btn btn-neutral w-full bg-[#404040] hover:bg-black border-none text-white normal-case text-lg rounded-sm">
                Login
              </button>
            </div>
          </form>
          {
            error && <p className="text-red-600">{error}</p>
          }
          <p className="text-center mt-8 text-sm font-medium text-gray-600">
            Dont Have An Account?
            <Link
              to="/auth/register"
              className="text-error ml-1 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
