import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true); // <-- Loader state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);

        // jwt token
        if (user?.email) {
          axios
            .post(
              `${import.meta.env.VITE_API_URL}/jwt`,
              { email: user?.email },
              { withCredentials: true }
            )
            .then(() => {
              // localStorage.setItem("token", res.data.token);
              // console.log(res.data);
            });
        }

        setLoading(false); // <-- Set loading false after auth state is known
      } else {
        setCurrentUser(null);
        setLoading(false); // <-- Set loading false after auth state is unknown
      }
    });

    return () => unsubscribe();
  }, []);
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
  const signOutUser = () => {
    localStorage.removeItem("token");
    return signOut(auth);
  };
  const updateUser = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };
  const userInfo = {
    createUser,
    signInUser,
    continueWithGoogle,
    currentUser,
    signOutUser,
    updateUser,
    loading,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
