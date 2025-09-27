import { useEffect } from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "../../Alumni/Sidebar/Sidebar";
import UNavbar from "../../Alumni/UNavbar/UNavbar";
import { Link } from "react-router-dom";
import { FaUsers, FaCalendarAlt, FaBell } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Dashboard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Animation speed & trigger once
  }, []);

  const newsData = [
    {
      id: 1,
      title: "AI Conclave 2025 Announced",
      description: "A global summit on AI advancements happening this December.",
      logo: "/images/ai-logo.png",
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
      {/* Navbar */}
      <UNavbar />

      {/* Sidebar */}
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      {/* Dashboard Content */}
      <div className={styles.dashboard}>
        {/* Quick Stats */}
        <div className={styles.dashboardheader}>
          <h3>Quick Stats</h3>
        </div>
        <div className={styles.dashboard0}>
          <div className={styles.dashboard1} data-aos="zoom-in">
            <FaUsers size={28} style={{ marginBottom: "0.5rem" }} />
            <h5 className={styles.field}>Connections</h5>
            <h2 className={styles.data}>
              <span>1234</span>
            </h2>
          </div>
          <div className={styles.dashboard1} data-aos="zoom-in" data-aos-delay="200">
            <FaCalendarAlt size={28} style={{ marginBottom: "0.5rem" }} />
            <h5 className={styles.field}>Upcoming Events</h5>
            <h2 className={styles.data}>
              <span>3</span>
            </h2>
          </div>
          <div className={styles.dashboard1} data-aos="zoom-in" data-aos-delay="400">
            <FaBell size={28} style={{ marginBottom: "0.5rem" }} />
            <h5 className={styles.field}>Notifications</h5>
            <h2 className={styles.data}>
              <span>6</span>
            </h2>
          </div>
        </div>

        {/* Notice Section */}
        <Link className={styles.link}>
          <div className={styles.notice} data-aos="fade-right">
            <span>SIH Prelims to be held on 29th September</span>
          </div>
        </Link>

        {/* News Section */}
        <div className={styles.dashboardheader}>
          <h3>News</h3>
        </div>
        {newsData.map((news, index) => (
          <Link key={news.id} className={styles.link} to={news.link}>
            <div
              className={styles.dashboard2}
              data-aos="fade-up"
              data-aos-delay={index * 150} // Stagger effect
            >
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
