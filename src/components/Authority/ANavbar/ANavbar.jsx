import styles from "./Navbar.module.css"; // custom CSS Module
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const UNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white">ALUMNI CONNECT</Link>

        {/* Custom Hamburger */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <div className={`${styles.bar} ${menuOpen ? styles.bar1 : ""}`}></div>
          <div className={`${styles.bar} ${menuOpen ? styles.bar2 : ""}`}></div>
          <div className={`${styles.bar} ${menuOpen ? styles.bar3 : ""}`}></div>
        </button>

        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${styles.icon}`} href="#search">
                <CiSearch />
              </a>
            </li>

            <li className="nav-item">
              <div className={styles.notificationWrapper}>
                <a className={`nav-link ${styles.icon}`} href="#notification">
                  <IoIosNotifications />
                </a>
                <span className={styles.notificationBadge}>3</span>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

            <li className="nav-item">
              <div className="dropdown">
                <button
                  className={`btn-secondary ${styles.get_Started}`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Link className={styles.link} to="/login">
                    <FaRegUserCircle />
                  </Link>
                </button>
                <ul
                  className={`dropdown-menu dropdown-menu-end ${styles.dropdown}`}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UNavbar;
