import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlinePhotograph,
  HiOutlineMail,
  HiOutlineLockClosed,
} from "react-icons/hi";
import NavBar from "../NavBar/NavBar";

const Register = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-[95%] mx-auto pt-8">
        <NavBar></NavBar>
        <div className="min-h-screen flex items-center justify-center bg-[#f3f3f3] p-4 font-sans">
          <div className="card w-full max-w-lg bg-base-100 shadow-sm rounded-none p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-[#404040] mb-6">
              Register your account
            </h2>

            <div className="border-t border-gray-200 mb-8"></div>

            <form>
              {/* Your Name */}
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text font-bold text-[#404040]">
                    Your Name
                  </span>
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlineUser className="text-gray-400 text-xl" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input bg-[#f3f3f3] w-full pl-10 focus:outline-none focus:ring-1 focus:ring-gray-400 border-none rounded-sm"
                  />
                </div>
              </div>

              {/* Photo URL */}
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text font-bold text-[#404040]">
                    Photo URL
                  </span>
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlinePhotograph className="text-gray-400 text-xl" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your photo url"
                    className="input bg-[#f3f3f3] w-full pl-10 focus:outline-none focus:ring-1 focus:ring-gray-400 border-none rounded-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text font-bold text-[#404040]">
                    Email
                  </span>
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlineMail className="text-gray-400 text-xl" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="input bg-[#f3f3f3] w-full pl-10 focus:outline-none focus:ring-1 focus:ring-gray-400 border-none rounded-sm"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text font-bold text-[#404040]">
                    Password
                  </span>
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlineLockClosed className="text-gray-400 text-xl" />
                  </div>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="input bg-[#f3f3f3] w-full pl-10 focus:outline-none focus:ring-1 focus:ring-gray-400 border-none rounded-sm"
                  />
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="form-control mb-6">
                <label className="label cursor-pointer justify-start gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm rounded-sm"
                  />
                  <span className="label-text text-gray-500">
                    Accept{" "}
                    <span className="font-bold text-gray-700">
                      Term & Conditions
                    </span>
                  </span>
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="btn btn-neutral w-full bg-[#404040] hover:bg-black border-none text-white normal-case text-lg rounded-sm"
              >
                Register
              </button>
            </form>

            <p className="text-center mt-6 text-sm font-medium text-gray-600">
              Already Have An Account?
              <Link
                to="/login"
                className="text-[#ff5a5f] ml-1 font-bold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
