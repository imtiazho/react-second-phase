import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign in with google</button>
      )}

      {user && (
        <div>
          <h1>{user.displayName}</h1>
          <h1>{user.email}</h1>
        </div>
      )}
    </div>
  );
};

export default Login;
