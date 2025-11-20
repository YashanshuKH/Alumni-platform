import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { useState, useEffect, useContext } from "react";
import { logout } from "../../../api/AuthApi";
import {
  FaHome,
  FaRegUser,
  FaUserFriends,
  FaBriefcase,
  FaCog,
} from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { NavLink } from "react-router-dom"; // *** IMPORTANT CHANGE: Use NavLink ***

const UNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", icon: FaHome, path: "/AlumniHome" },
    { name: "Profile", icon: FaRegUser, path: "/profile" },
    { name: "Events", icon: MdEmojiEvents, path: "/events" },
    { name: "Jobs", icon: FaBriefcase, path: "/jobs" },
    { name: "Messages", icon: FaMessage, path: "/message" },
  ];
  const handleLogout = async () => {
    try {
      const res = await logout();
      if (res.data.success) {
        localStorage.removeItem("user");
        window.location.href = "/";
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <nav className={styles.navbar}>
      {/* BRAND */}
      <Link className={styles.brand}>ConnectEd</Link>

      <ul className={styles.sidebar_menu}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.name}>
              {/* 1. NavLink handles both redirection AND highlighting.
                2. The className function receives { isActive } and returns the appropriate class string.
              */}
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.sidebar_item} ${styles.active}`
                    : styles.sidebar_item
                }
                // Use 'end' for exact matching on the root path ('/')
                end={item.path === "/"}
              >
                <Icon className={styles.icon1} />
                <span className={styles.sidebar_link}>{item.name}</span>
              </NavLink>
            </li>
          );
        })}

        <hr className={styles.divider} />
      </ul>

      <div className={styles.rightSection}>
        <button className={styles.icon}>
          <CiSearch />
        </button>

        <div className={styles.notificationWrapper}>
          <button className={styles.icon}>
            <IoIosNotifications />
          </button>
          <span className={styles.notificationBadge}>3</span>
        </div>

        {/* PROFILE DROPDOWN */}
        <div className={styles.dropdownWrapper}>
          <button className={styles.profileBtn}>
            <FaRegUserCircle />
          </button>

          <div className={styles.dropdownMenu}>
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
            <hr />
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UNavbar;
