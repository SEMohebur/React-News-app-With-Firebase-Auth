import { AuthContext } from "./AuthContext";
import { Children, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../Firevase/firebase.config";

const provider = new GoogleAuthProvider();

// Auth
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(loading, user);

  // regisration
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signOut
  const signOutUser = () => {
    signOut(auth)
      .then(() => alert("Sign Out Succesfully"))
      .catch((er) => console.log(er));
  };

  // singIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  //signinWithGoogle
  const handleSingIngWithGoogle = () => {
    return signInWithPopup(auth, provider);
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

  // console.log(user);
  const authData = {
    user,
    setUser,
    createUser,
    signOutUser,
    signIn,
    loading,
    setLoading,
    updateUser,
    handleSingIngWithGoogle,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
