import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config"

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const loginuser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  }
  // useEffect(() => {
  //   const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
  //     console.log("current user in inside auth state observer", currentUser);
  //     setUser(currentUser);
  //   })
  //   return () => {
  //     return unsubcribe();
  //   }
  // }, [])
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, loggedUser => {
      console.log("logged user inside the state", loggedUser);
      setUser(loggedUser);
      setLoading(false);
    })
    return () => {
      unsubcribe();
    }
  }, [])

  const authInfo = {
    user,
    createUser,
    loginuser,
    logout,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;