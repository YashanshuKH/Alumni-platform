import React, { createContext, useState, useEffect } from "react";
import { checkAuth } from "../api/AuthApi"; // your API function

// 1️⃣ Create Context
export const AuthContext = createContext();

// 2️⃣ Create Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);       // logged-in user info
  const [email, setEmail] = useState("");       // store email for OTP/resend
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // 3️⃣ Check login status on mount
  useEffect(() => {
    const verifySession = async () => {
      try {
        const res = await checkAuth(); // API call withCredentials
        if (res.data.isLoggedIn) {
          setUser(res.data.user);
          setIsLoggedIn(true);
        }
      } catch (err) {
        setUser(null);
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };
    verifySession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        isLoggedIn,
        setIsLoggedIn,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
