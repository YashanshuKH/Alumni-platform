import styles from "./Navbar.module.css"; // custom CSS Module
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white">
          ALUMNI CONNECT
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <button className={styles.get_Started}>
              <Link className={styles.link} to="/login">
                Log In
              </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;