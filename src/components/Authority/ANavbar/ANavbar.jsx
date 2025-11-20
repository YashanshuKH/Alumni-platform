// import styles from "./Navbar.module.css"; // custom CSS Module
// import { Link } from "react-router-dom";
// import { FaRegUserCircle } from "react-icons/fa";
// import { IoIosNotifications } from "react-icons/io";
// import { CiSearch } from "react-icons/ci";
// import { useState } from "react";
// import { logout } from "../../../api/AdminApi";

// const ANavbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

  
//   const handleLogout = async () => {
//     try {
//       const res = await logout();
//       if (res.data.success) {
//         localStorage.removeItem("user");
//         window.location.href = "/";
//       }
//     } catch (err) {
//       console.error("Logout error:", err);
//     }
//   };
//   return (
//     <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
//       <div className="container-fluid">
//         <Link className="navbar-brand fw-bold text-white">CONNECTED</Link>

//         {/* Custom Hamburger */}
//         <button
//           className={styles.hamburger}
//           onClick={toggleMenu}
//           aria-label="Toggle navigation"
//         >
//           <div className={`${styles.bar} ${menuOpen ? styles.bar1 : ""}`}></div>
//           <div className={`${styles.bar} ${menuOpen ? styles.bar2 : ""}`}></div>
//           <div className={`${styles.bar} ${menuOpen ? styles.bar3 : ""}`}></div>
//         </button>

//         <div
//           className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
//           id="navbarSupportedContent"
//         >
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className={`nav-link ${styles.icon}`} href="#search">
//                 <CiSearch />
//               </a>
//             </li>

//             <li className="nav-item">
//               <div className={styles.notificationWrapper}>
//                 <a className={`nav-link ${styles.icon}`} href="#notification">
//                   <IoIosNotifications />
//                 </a>
//                 <span className={styles.notificationBadge}>3</span>
//               </div>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="#contact">
//                 Contact
//               </a>
//             </li>

//             <li className="nav-item">
//               <div className="dropdown">
//                 <button
//                   className={`btn-secondary ${styles.get_Started}`}
//                   type="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   <Link className={styles.link} to="/login">
//                     <FaRegUserCircle />
//                   </Link>
//                 </button>
//                 <ul
//                   className={`dropdown-menu dropdown-menu-end ${styles.dropdown}`}
//                 >
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Profile
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Settings
//                     </a>
//                   </li>
//                   <hr />
//                   <li>
//                     <a className="dropdown-item" href="#" onClick={handleLogout}>
//                       Logout
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default ANavbar;

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

const ANavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", icon: FaHome, path: "/AlumniHome" },
    { name: "Profile", icon: FaRegUser, path: "/admin-profile" },
    { name: "Events", icon: MdEmojiEvents, path: "/Admin_Emanager" },
    { name: "Alumni Data", icon: FaUserFriends, path: "/AlumniData" },
    { name: "Student Data", icon: FaRegUser, path: "/StudentData" },
     { name: "Message", icon:FaMessage, path: "/Amessage" },
    
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

export default ANavbar;
