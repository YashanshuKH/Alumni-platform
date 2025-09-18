

import { IoPersonSharp } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { FaRegAddressCard, FaAddressBook, FaCity } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { CgCalendarDates, CgPassword } from "react-icons/cg";
import { TbMapPinCode, TbBuildingEstate, TbLockPassword } from "react-icons/tb";
import Navbar from "../Navbar/Navbar";

import styles from "./Signup.module.css";

const Signup = () => {
  return (
    
    <div className={styles.body}>
      <Navbar />
      <h2 className={styles.title}>Sign Up</h2>
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="firstname">
              <IoPersonSharp /> First Name:
            </label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="middlename">
              <IoPersonSharp /> Middle Name:
            </label>
            <input type="text" name="middlename" placeholder="Middle Name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastname">
              <IoPersonSharp /> Last Name:
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              required
            />
          </div>
        </div>

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
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">
            <MdAlternateEmail /> Email:
          </label>
          <input type="email" name="email" placeholder="Email" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="dob">
            <CgCalendarDates /> Date of Birth:
          </label>
          <input type="date" name="dob" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="pannumber">
            <FaRegAddressCard /> PAN:
          </label>
          <input
            type="text"
            name="pannumber"
            placeholder="PAN Number"
            maxLength={10}
            pattern="[Link-Z0-9]{10}"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="aadhaarnumber">
            <FaRegAddressCard /> Aadhaar:
          </label>
          <input
            type="text"
            name="aadhaarnumber"
            placeholder="Aadhaar Number"
            maxLength={12}
            inputMode="numeric"
            pattern="\d{12}"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">
            <FaAddressBook /> Address:
          </label>
          <input type="text" name="address" placeholder="Address" required />
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="pincode">
              <TbMapPinCode /> Pincode:
            </label>
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              maxLength={6}
              inputMode="numeric"
              pattern="\d{6}"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="city">
              <FaCity /> City:
            </label>
            <input type="text" name="city" placeholder="City" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="state">
              <TbBuildingEstate /> State:
            </label>
            <input type="text" name="state" placeholder="State" required />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="password">
              <CgPassword /> Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
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
              required
            />
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
