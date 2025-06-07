import React from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const provider = new GoogleAuthProvider();
  const continueWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  const userInfo = {
    createUser,
    signInUser,
    continueWithGoogle
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
