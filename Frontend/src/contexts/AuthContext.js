import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase.js";
import axios from "axios";
import "regenerator-runtime";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [currentID, setCurrentID] = useState();
  const [currentName, setCurrentName] = useState();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      axios.get("http://localhost:3000/profiles/").then((res) => {
        const id = res.data.find((mentor) => mentor.email === user.email)._id;
        const name = res.data.find((mentor) => mentor.email === user.email)
          .name;
        setCurrentID(id);
        setCurrentName(name);
      });

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    currentID,
    currentName,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
