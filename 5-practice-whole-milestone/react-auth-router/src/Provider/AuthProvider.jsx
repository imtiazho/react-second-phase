import React, { useEffect, useState } from "react";
import app from "../firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "../Context/AuthContext";

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    loading,
    setLoading,
    googleSignIn,
    createUser,
    updateUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
