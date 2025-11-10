import React, { useState, useContext } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { CgPassword } from "react-icons/cg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Getstarted/Navbar/Navbar";
import { login } from "../../../api/AuthApi";
import { AuthContext } from "../../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Please fill in all fields");

    try {
      setLoading(true);
      const res = await login({ email, password }); // axios withCredentials

      if (!res.data.success) {
        alert(res.data.message || "Login failed ❌");
        return;
      }

      // ✅ Update AuthContext
      setUser(res.data.user);
      setIsLoggedIn(true);

      // ✅ Navigate SPA-style
      navigate("/dashboard", { replace: true });

    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed ❌ " + (err.response?.data?.message || ""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <Navbar />

      <div className={styles.loginBox}>
        <h2>Welcome Back 👋</h2>
        <p>Login to continue your journey</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <IoPersonSharp className={styles.icon} />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <CgPassword className={styles.icon} />
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className={styles.eyeIcon}
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <div className={styles.forgotWrapper}>
            <Link to="/forgot">Forgot Password?</Link>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>

          <p className={styles.signupText}>
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
