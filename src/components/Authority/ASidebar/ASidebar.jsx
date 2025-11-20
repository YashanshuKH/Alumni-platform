import styles from "./ASidebar.module.css";
import { FaHome, FaRegUser, FaUserFriends, FaBriefcase, FaCog } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { FaMessage } from "react-icons/fa6"; 
import { NavLink } from "react-router-dom"; // *** IMPORTANT CHANGE: Use NavLink ***

const ASidebar = () => {
  // *** REMOVE: No need for useState for the active tab, NavLink handles it ***

  const navItems = [
    { name: "Dashboard", icon: FaHome, path: "/AdminDashboard" },
    { name: "Profile", icon: FaHome, path: "/admin-profile" },
    { name: "Events", icon: MdEmojiEvents, path: "/Admin_Emanager" },
    { name: "Alumni Database", icon: FaUserFriends, path: "/AlumniData" },
    { name: "Student Database", icon: FaRegUser, path: "/StudentData" },
  ];

  const settingsItem = { name: "Settings", icon: FaCog, path: "/settings" };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}></div>

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
                <Icon className={styles.icon} />
                <span className={styles.sidebar_link}>{item.name}</span>
              </NavLink>
            </li>
          );
        })}

        <hr className={styles.divider} />

        <li>
          <NavLink
            to={settingsItem.path}
            className={({ isActive }) =>
              isActive
                ? `${styles.sidebar_item} ${styles.active}`
                : styles.sidebar_item
            }
          >
            <settingsItem.icon className={styles.icon} />
            <span className={styles.sidebar_link}>{settingsItem.name}</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default ASidebar;