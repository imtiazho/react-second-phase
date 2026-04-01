import React, { use, useRef } from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const { googleSignIn, setLoading, signInUser, resetPassword } =
    use(AuthContext);
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res);
        navigate(`${location.state ? location.state : '/'}`)
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const handleSignInWithEmailAndPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((res) => {console.log(res)
        navigate(`${location.state ? location.state : '/'}`)
      })
      .catch((error) => console.log(error));
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        console.log("Sent Email");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center  p-4">
        <div className="card w-full max-w-lg bg-base-300 shadow-xl rounded-none p-8 md:p-12">
          <div className="card-body p-0">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Login your account
            </h2>

            <div className="divider mb-8"></div>

            <form onSubmit={handleSignInWithEmailAndPassword}>
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
                      <HiOutlineMailOpen className="text-gray-400 text-xl" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      ref={emailRef}
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

            <p className="text-center mt-8 text-sm font-medium text-gray-600">
              Dont Have An Account?
              <Link
                to="/auth/register"
                className="text-error ml-1 hover:underline"
              >
                Register
              </Link>
            </p>

            <p onClick={handleForgetPassword} className="text-center mt-8 text-sm font-medium text-gray-600">
              Reset Password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
