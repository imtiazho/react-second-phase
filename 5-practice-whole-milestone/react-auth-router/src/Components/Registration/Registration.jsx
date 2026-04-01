import React, { use } from "react";
import {
  HiOutlineMail,
  HiOutlinePhotograph,
  HiOutlineUser,
} from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const { googleSignIn, createUser, setLoading, setUser, updateUser } = use(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const handleSignUpWithEmailAndPassword = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password).then((res) => {
      const user = res.user;
      updateUser({ displayName: name, photoURL: photo })
        .then((res) => {
          setUser({ ...user, displayName: name, photoURL: photo });
        })
        .catch(setUser(user));
    });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-[#f3f3f3] p-4 font-sans">
        <div className="card w-full max-w-lg bg-base-100 shadow-sm rounded-none p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-[#404040] mb-6">
            Register your account
          </h2>

          <div className="border-t border-gray-200 mb-8"></div>

          <form onSubmit={handleSignUpWithEmailAndPassword}>
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
                  name="name"
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
                  name="photo"
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
                  name="email"
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
                  name="password"
                  placeholder="Enter your password"
                  className="input bg-[#f3f3f3] w-full pl-10 focus:outline-none focus:ring-1 focus:ring-gray-400 border-none rounded-sm"
                />
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="btn btn-neutral w-full bg-[#404040] hover:bg-black border-none text-white normal-case text-lg rounded-sm"
            >
              Register
            </button>
          </form>

          {/* Google */}
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-blue-400 mt-4 text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          <p className="text-center mt-6 text-sm font-medium text-gray-600">
            Already Have An Account?
            <Link
              to="/auth/login"
              className="text-[#ff5a5f] ml-1 font-bold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
