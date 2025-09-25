import styles from "./Dashboard.module.css";
import Sidebar from "../../Alumni/Sidebar/Sidebar";
import UNavbar from "../../Alumni/UNavbar/UNavbar";
import { Link } from "react-router-dom";

const Dashboard = () => {
const newsData = [
  {
    id: 1,
    title: "AI Conclave 2025 Announced",
    description: "A global summit on AI advancements happening this December.",
    logo: "/images/ai-logo.png",   // local or URL
    link: "/news1",
  },
  {
    id: 2,
    title: "New Internship Opportunities",
    description: "Top companies offering internships for summer 2025.",
    logo: "/images/internship.png",
    link: "/news2",
  },
  {
    id: 3,
    title: "Hackathon Results Declared",
    description: "Winners of the National Hackathon have been announced.",
    logo: "/images/hackathon.png",
    link: "/news3",
  },
  {
    id: 4,
    title: "Upcoming Placement Drives",
    description: "Placement drives scheduled for next month.",
    logo: "/images/placements.png",
    link: "/news4",
  },
];

  return (
    <div className={styles.main}>
      <UNavbar />
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.dashboard}>
        <div className={styles.dashboardheader}>
          <h3>Quick Stats</h3>
        </div>
        <div className={styles.dashboard0}>
          <div className={styles.dashboard1}>
            <h5 className={styles.field}>Connections</h5>
            <h2 className={styles.data}>
              <span>1234</span>
            </h2>
          </div>
          <div className={styles.dashboard1}>
            <h5 className={styles.field}>Upcoming Events</h5>
            <h2 className={styles.data}>
              <span>3</span>
            </h2>
          </div>
          <div className={styles.dashboard1}>
            <h5 className={styles.field}>Notifications</h5>
            <h2 className={styles.data}>
              <span>6</span>
            </h2>
          </div>
        </div>
        <Link className={styles.link}>
          <div className={styles.notice}>
            <span>SIH Prelims to be held on 29th September </span>{" "}
          </div>
        </Link>

{newsData.map((news) => (
  <Link key={news.id} className={styles.link} to={news.link}>
    <div className={styles.dashboard2}>
      {/* Left: Logo */}
      <img
        src={news.logo}
        alt={news.title}
        className={styles.newsLogo}
      />

      {/* Right: Title + Description */}
      <div className={styles.newsContent}>
        <h4 className={styles.newsTitle}>{news.title}</h4>
        <p className={styles.newsDescription}>{news.description}</p>
      </div>
    </div>
  </Link>
))}


      </div>
    </div>
  );
};

export default Dashboard;
