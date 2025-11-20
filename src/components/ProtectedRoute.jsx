// ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import api from "../api/axios";

function ProtectedRoute({ allowedRoles }) {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    role: null,
  });

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await api.get("/auth/check"); // returns isLoggedIn + role
        console.log(res)
        setAuth({
          isLoggedIn: res.data.isLoggedIn,
          role: res.data.user.role,
        });
      } catch (err) {
        console.error("Error checking login:", err);
      } finally {
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  if (loading) return <p>Loading...</p>;

  // NOT LOGGED IN
  if (!auth.isLoggedIn) return <Navigate to="/login" replace />;

  // ROLE NOT ALLOWED
  if (allowedRoles && !allowedRoles.includes(auth.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
