import styles from "./Sidebar.module.css";
import { FaHome, FaRegUser, FaUserFriends, FaBriefcase, FaCog } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { FaMessage } from "react-icons/fa6"; 
import { NavLink } from "react-router-dom"; // *** IMPORTANT CHANGE: Use NavLink ***

const Sidebar = () => {
  // *** REMOVE: No need for useState for the active tab, NavLink handles it ***

  const navItems = [
    { name: "Dashboard", icon: FaHome, path: "/dashboard" },
    { name: "Profile", icon: FaRegUser, path: "/profile" },
    { name: "My Networks", icon: FaUserFriends, path: "/" }, // Assuming '/' is the Networks page
    { name: "Events", icon: MdEmojiEvents, path: "/events" },
    { name: "Jobs", icon: FaBriefcase, path: "/jobs" },
    { name: "Messages", icon: FaMessage, path: "/message" },
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

export default Sidebar;