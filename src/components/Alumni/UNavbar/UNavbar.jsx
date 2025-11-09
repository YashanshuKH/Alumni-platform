import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { logout } from "../../../api/AuthApi";

const UNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = async () => {
    try {
      const res = await logout();
      if (res.data.success) {
        localStorage.removeItem("user"); // if stored
        window.location.href = "/"; // ✅ hard refresh ensures session cleared
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container-fluid">
        <Link to="/" className={`navbar-brand fw-bold ${styles.navbarbrand}`}>
          ConnectEd
        </Link>

        {/* Hamburger */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          <div className={`${styles.bar} ${menuOpen ? styles.bar1 : ""}`}></div>
          <div className={`${styles.bar} ${menuOpen ? styles.bar2 : ""}`}></div>
          <div className={`${styles.bar} ${menuOpen ? styles.bar3 : ""}`}></div>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className={styles.icon}>
                <CiSearch />
              </button>
            </li>

            <li className="nav-item">
              <div className={styles.notificationWrapper}>
                <button className={styles.icon}>
                  <IoIosNotifications />
                </button>
                <span className={styles.notificationBadge}>3</span>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item dropdown">
              <button
                className={`btn ${styles.profileBtn}`}
                data-bs-toggle="dropdown"
              >
                <FaRegUserCircle />
              </button>

              <ul
                className={`dropdown-menu dropdown-menu-end ${styles.dropdown}`}
              >
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/settings">
                    Settings
                  </Link>
                </li>
                <hr />
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UNavbar;
