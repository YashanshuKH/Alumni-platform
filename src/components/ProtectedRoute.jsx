// ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import api from "../api/axios"; // path as needed

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await api.get("/auth/check"); // uses withCredentials
        setIsLoggedIn(!!res.data.isLoggedIn);
      } catch (err) {
        console.error("Error checking login:", err);
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  if (loading) return <p>Loading...</p>;
  return isLoggedIn ? (children || <Outlet />) : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
