import React, { useState, useContext } from "react";
import styles from "./Verify.module.css";
import Navbar from "../../Getstarted/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { verifyOtp } from "../../../api/AuthApi";
import { ResendOtp } from "../../../api/AuthApi";

// import { AuthContext } from "../../../context/AuthContext"; // your auth context

const VerifyEmail = ({ setIsLoggedIn }) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  //   const { setUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    console.log(otp);
    try {
      const res = await verifyOtp({ code: otp });
      console.log(res);
      if (res.data.isLoggedIn) {
        setIsLoggedIn(true);

        // setUser(res.data.user);
        navigate("/dashboard", { replace: true });
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

  const ResendOtp = async () => {
    try {
        const res= await ResendOtp();
    } catch (err){
        console.log(err)
    }
  };
  return (
    <div className={styles.resetContainer}>
      <Navbar />
      <div className={styles.resetBox}>
        <h2>OTP Sent To Your Email</h2>
        <p className={styles.otp}>Enter the OTP</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            maxLength={6}
            minLength={4}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            inputMode="numeric"
            pattern="\d{6}"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Verifying..." : "VERIFY"}
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        <div>
          <span>
            Didn't Recieve Otp ? <a onClick={ResendOtp}>Resend</a>
          </span>
        </div>
        <div className={styles.resetLinks}>
          <a href="/login">Back to Login</a>
          <span> | </span>
          <a href="/signup">Need an account? Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
