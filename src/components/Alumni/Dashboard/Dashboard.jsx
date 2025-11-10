import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "../../Alumni/Sidebar/Sidebar";
import UNavbar from "../../Alumni/UNavbar/UNavbar";
import { Link } from "react-router-dom";
import { FaUsers, FaCalendarAlt, FaBell } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Dashboard = () => {
  const [stats, setStats] = useState({
    connections: 0,
    events: 0,
    notifications: 0,
  });

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: false });

    // Animate numbers
    const target = { connections: 1234, events: 3, notifications: 6 };
    const duration = 1200;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setStats({
        connections: Math.floor(progress * target.connections),
        events: Math.floor(progress * target.events),
        notifications: Math.floor(progress * target.notifications),
      });
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  const statsData = [
    { icon: <FaUsers />, label: "Connections", value: stats.connections, delay: 0, gradient: "linear-gradient(135deg, #b623ff, #e4a5fc)" },
    { icon: <FaCalendarAlt />, label: "Upcoming Events", value: stats.events, delay: 200, gradient: "linear-gradient(135deg, #1a2a6c, #b21f5f, #fdbb2d)" },
    { icon: <FaBell />, label: "Notifications", value: stats.notifications, delay: 400, gradient: "linear-gradient(135deg, #912ed8, #ff9a9e)" },
  ];

  const newsData = [
    { id: 1, title: "AI Conclave 2025 Announced", description: "A global summit on AI advancements happening this December.", logo: "/images/news1.png", link: "/news1" },
    { id: 2, title: "New Internship Opportunities", description: "Top companies offering internships for summer 2025.", logo: "/images/internship.png", link: "/news2" },
    { id: 3, title: "Hackathon Results Declared", description: "Winners of the National Hackathon have been announced.", logo: "/images/hackathon.png", link: "/news3" },
    { id: 4, title: "Upcoming Placement Drives", description: "Placement drives scheduled for next month.", logo: "/images/placements.png", link: "/news4" },
  ];

  return (
    <div className={styles.main}>
      <UNavbar />
      <div className={styles.sidebar}><Sidebar /></div>

      <div className={styles.dashboard}>
        {/* Stats */}
        <div className={styles.dashboardHeader}>
          <h3>Quick Stats</h3>
        </div>
        <div className={styles.statsContainer}>
          {statsData.map((stat, i) => (
            <div
              key={i}
              className={styles.statCard}
              style={{ background: stat.gradient }}
              data-aos="zoom-in"
              data-aos-delay={stat.delay}
            >
              <div className={styles.statIcon}>{stat.icon}</div>
              <h5 className={styles.statLabel}>{stat.label}</h5>
              <h2 className={styles.statValue}>{stat.value}</h2>
            </div>
          ))}
        </div>

        {/* Notice */}
        <Link className={styles.noticeLink} to="/news1">
          <div className={styles.noticeCard} data-aos="fade-right">
            <span>SIH Prelims to be held on 29th September</span>
          </div>
        </Link>

        {/* News */}
        <div className={styles.dashboardHeader}>
          <h3>Latest News</h3>
        </div>
        <div className={styles.newsContainer}>
          {newsData.map((news, index) => (
            <Link key={news.id} to={news.link} className={styles.newsLink}>
              <div
                className={styles.newsCard}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <img src={news.logo} alt={news.title} className={styles.newsLogo} />
                <div className={styles.newsContent}>
                  <h4 className={styles.newsTitle}>{news.title}</h4>
                  <p className={styles.newsDescription}>{news.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
