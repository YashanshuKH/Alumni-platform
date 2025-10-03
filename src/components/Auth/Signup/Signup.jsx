import { IoPersonSharp } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { CgPassword } from "react-icons/cg";
import { TbLockPassword } from "react-icons/tb";
import Navbar from "../../Getstarted/Navbar/Navbar";

import styles from "./Signup.module.css";
import { signup } from "../../../api/AuthApi";
import { useNavigate } from "react-router";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [middlename, setmiddlename] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [mobileno, setMobileNo] = useState("");
  const [User, setUser] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signup({ firstname , middlename,lastname,mobileno, email, password ,confirmpassword});
      if (res.data.success) {
        // setUser(res.data.user);
        navigate("/login");
        // setError("");
      }
    } catch (err) {
      console.log(err);
      alert("Signup failed ❌ " + (err.response?.data?.message || ""));
    }
  };
  return (
    <div className={styles.body}>
      <Navbar />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.title}>Sign Up</div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="firstname">
              <IoPersonSharp /> First Name:
            </label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="middlename">
              <IoPersonSharp /> Middle Name:
            </label>
            <input type="text" name="middlename" value={middlename}
              onChange={(e) => setmiddlename(e.target.value)} placeholder="Middle Name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastname">
              <IoPersonSharp /> Last Name:
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="mobileno">
              <CiMobile1 /> Mobile:
            </label>
            <input
              type="text"
              name="mobileno"
              placeholder="Mobile Number"
              maxLength={10}
              inputMode="numeric"
              pattern="\d{10}"
              value={mobileno}
              onChange={(e) => setMobileNo(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">
              <MdAlternateEmail /> Email:
            </label>
            <input type="email" name="email" value={email}
              onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          </div>
        </div>

        {/* Password Row */}
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="password">
              <CgPassword /> Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmpassword">
              <TbLockPassword /> Confirm Password:
            </label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submitBtn}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
