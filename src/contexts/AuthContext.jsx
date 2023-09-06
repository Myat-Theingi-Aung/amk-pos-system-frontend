import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create the AuthContext
const AuthContext = createContext();

// Create a custom hook for using the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || null);

  // csrf token generation for guest methods
  const csrfToken = async () => {
    await axios.get("http://localhost:8000/sanctum/csrf-cookie");
    return true;
  };

  // Set user to local storage whenever it changes
  useEffect(() => {
    user ? localStorage.setItem("user", JSON.stringify(user)) : localStorage.removeItem("user");
    token ? localStorage.setItem("token", JSON.stringify(token)) : localStorage.removeItem("token");
  }, [user, token]);

  // Create the context value
  const contextValue = { user, setUser, csrfToken, token, setToken };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
