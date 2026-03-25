import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../../firebase.init";

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const emailRef = useRef();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setSuccess(false);

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        if (!res.user.emailVerified) {
          alert("Verify your email");
        } else {
          setSuccess(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setSuccess(false);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Send email for reset");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      Login
      <form onSubmit={handleSignIn}>
        <div className="join">
          <div>
            <label className="input validator join-item">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                name="email"
                type="email"
                ref={emailRef}
                placeholder="mail@site.com"
                required
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
        </div>

        <br />

        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <div>
            <input
              type={showPassword ? "password" : "text"}
              required
              name="password"
              placeholder="Password"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs"
            >
              Eye
            </button>
          </div>
        </label>
        <br />
        <input type="submit" className="btn btn-primary" value="SUBMIT" />
      </form>
      <p onClick={handleForgetPassword}>Forget Password</p>
      {success && <p>Success</p>}
      {success || <p>Failed</p>}
      {<p>{error}</p>}
    </div>
  );
};

export default Login;
