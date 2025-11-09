import React, { useContext, useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { CgPassword } from "react-icons/cg";
import { TbLockPassword } from "react-icons/tb";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Getstarted/Navbar/Navbar";
import { signup } from "../../../api/AuthApi";
import styles from "./Signup.module.css";
import { AuthContext } from "../../../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { setEmail: setAuthEmail } = useContext(AuthContext); // context email setter

  // Local states
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signup({
        firstname,
        middlename,
        lastname,
        mobileno,
        email,
        password,
        confirmpassword,
      });

      if (res.data.success) {
        setAuthEmail(email); // store email in context for OTP verification
        navigate("/verify");
      }
    } catch (err) {
      console.error(err);
      alert("Signup failed ❌ " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className={styles.loginContainer}>
      <Navbar />
      <div className={styles.loginBox}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Row */}
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <IoPersonSharp className={styles.icon} />
              <input
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <IoPersonSharp className={styles.icon} />
              <input
                type="text"
                placeholder="Middle Name"
                value={middlename}
                onChange={(e) => setMiddlename(e.target.value)}
              />
            </div>
          </div>

          {/* Last Name / Mobile */}
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <IoPersonSharp className={styles.icon} />
              <input
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <CiMobile1 className={styles.icon} />
              <input
                type="text"
                placeholder="Mobile Number"
                maxLength={10}
                inputMode="numeric"
                pattern="\d{10}"
                value={mobileno}
                onChange={(e) => setMobileno(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className={styles.row1}>
            <div className={styles.formGroup}>
              <MdAlternateEmail className={styles.icon} />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}></div>
          </div>

          {/* Password / Confirm Password */}
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <CgPassword className={styles.icon} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                className={styles.eyeIcon}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div className={styles.formGroup}>
              <TbLockPassword className={styles.icon} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
                required
              />
              <div
                className={styles.eyeIcon}
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Register
          </button>

          <div className={styles.signupText}>
            Already have an account? <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
