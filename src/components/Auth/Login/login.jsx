import { IoPersonSharp } from "react-icons/io5";
import { CgPassword } from "react-icons/cg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Getstarted/Navbar/Navbar";
import { useState } from "react";
import { checkAuth, login } from "../../../api/AuthApi";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      console.log("login response:", res.data);

      if (!res.data.success) {
        alert(res.data.message || "Login error");
        return;
      }

      const maxTries = 6;
      const delayMs = 250;
      let ok = false;

      for (let i = 0; i < maxTries; i++) {
        await new Promise((r) => setTimeout(r, delayMs));
        try {
          const check = await checkAuth();
          if (check.data.isLoggedIn) {
            ok = true;
            break;
          }
        } catch (_) {}
      }

      ok
        ? navigate("/dashboard", { replace: true })
        : (window.location.href = "/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed ❌ " + (err.response?.data?.message || ""));
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

            {/* 👁️ Password Toggle */}
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

          <button type="submit" className={styles.submitBtn}>
            Log In
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
