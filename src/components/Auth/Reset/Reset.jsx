import React, { useState } from "react";
import styles from "./Reset.module.css";
import Navbar from "../../Getstarted/Navbar/Navbar";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import { reset } from "../../../api/AuthApi";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pass !== confirmPass) {
      return alert("❌ Passwords do not match");
    }

    const strongPassword =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

    if (!strongPassword.test(pass)) {
      return alert(
        "Password must include:\n• Minimum 8 characters\n• Uppercase & lowercase\n• Number\n• Special symbol"
      );
    }

    try {
      const res = await reset(token, { password: pass });
      if (res.data.success) {
        alert("✅ Password updated successfully!");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      alert("❌ Reset failed");
    }
  };

  return (
    <div className={styles.resetContainer}>
      <Navbar />
      <div className={styles.resetBox}>
        <h2>Reset Password</h2>
        <p>Create your new password</p>

        <form onSubmit={handleSubmit}>
          {/* New Password */}
          <div className={styles.inputWrapper}>
            <input
              type={showPass ? "text" : "password"}
              placeholder="New Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
            <span onClick={() => setShowPass(!showPass)}>
              {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className={styles.inputWrapper}>
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              required
            />
            <span onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>

          <button type="submit">Update Password</button>
        </form>

        <div className={styles.resetLinks}>
          <a href="/login">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
