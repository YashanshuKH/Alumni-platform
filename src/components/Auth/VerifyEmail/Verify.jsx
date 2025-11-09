import React, { useContext, useState } from "react";
import styles from "./Verify.module.css";
import Navbar from "../../Getstarted/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { verifyOtp, ResendOtp } from "../../../api/AuthApi";
import { AuthContext } from "../../../context/AuthContext";

const VerifyEmail = ({ setIsLoggedIn }) => {
    const { email } = useContext(AuthContext);

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendLoading, setResendLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await verifyOtp({ code: otp });
      if (res.data.isLoggedIn) {
        setIsLoggedIn(true);
        navigate("/login", { replace: true });
      } else {
        setError("Invalid OTP or verification failed.");
      }
    } catch (err) {
      console.error(err);
      setError(
        "OTP Expired or Invalid ❌ " + (err.response?.data?.message || "")
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setResendLoading(true);
    try {
      await ResendOtp({email});
      alert("OTP resent successfully ✅ Check your email");
    } catch (err) {
      console.error(err);
      alert("Failed to resend OTP ❌");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <Navbar />
      <div className={styles.loginBox}>
        <h2>Email Verification</h2>
        <p>Enter the OTP sent to your email</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Enter OTP"
              maxLength={6}
              minLength={4}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              inputMode="numeric"
              pattern="\d{6}"
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? "Verifying..." : "VERIFY"}
          </button>
        </form>

        {error && <p className={styles.error}>{error}</p>}

        <p className={styles.resendText}>
          Didn't receive OTP?{" "}
          <button
            className={styles.resendBtn}
            onClick={handleResendOtp}
            disabled={resendLoading}
          >
            {resendLoading ? "Resending..." : "Resend"}
          </button>
        </p>

        <div className={styles.signupText}>
          <a href="/login">Back to Login</a> |{" "}
          <a href="/signup">Need an account? Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
