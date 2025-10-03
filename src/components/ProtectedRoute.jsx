import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/check", {
          withCredentials: true,
        });
        setIsLoggedIn(res.data.isLoggedIn);
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

  return isLoggedIn ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
