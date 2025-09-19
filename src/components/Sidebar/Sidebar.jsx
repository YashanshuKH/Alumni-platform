import styles from "./Sidebar.module.css";
import { HashLink } from "react-router-hash-link";
import {
  FaHome,
  FaRegUser,
  FaUserFriends,
  FaBriefcase,
  FaCog,
} from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>Dashboard</div>

      <ul className={styles.sidebar_menu}>
        <li className="active">
          <FaHome className="icon" />
          <HashLink className={styles.sidebar_link} smooth to="/dashboard">
            Dashboard
          </HashLink>
        </li>
        <li className="active">
          <FaRegUser className="icon" />
          <HashLink className={styles.sidebar_link} smooth to="/profile">
            Profile
          </HashLink>
        </li>
        <li className="active">
          <FaUserFriends className="icon" />
          <HashLink className={styles.sidebar_link} smooth to="/profile">
            My Networks
          </HashLink>
        </li>
        <li className="active">
          <MdEmojiEvents className="icon" />
          <HashLink className={styles.sidebar_link} smooth to="/events">
            Events
          </HashLink>
        </li>
        <li className="active">
          <FaBriefcase className="icon" />
          <HashLink className={styles.sidebar_link} smooth to="/profile">
            Jobs
          </HashLink>
        </li>
        <li className="active">
          <FaMessage className="icon" />
          <HashLink className={styles.sidebar_link} smooth to="/profile">
            Messages
          </HashLink>
        </li>

        <hr />
        <li className="active">
          <FaCog className="icon" />
          <HashLink className={styles.sidebar_link} smooth to="/profile">
            Settings
          </HashLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
