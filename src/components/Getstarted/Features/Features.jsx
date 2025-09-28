import React, { useEffect } from "react";
import styles from "./Features.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    title: "Smart Communication & Networking",
    icon: "💬",
    animation: "fade-up",
  },
  {
    title: "Unified Data & Records Management",
    icon: "📑",
    animation: "fade-up",
  },
  {
    title: "Secure & Easy Access",
    icon: "🔒",
    animation: "fade-up",
  },
];

const KeyFeatures = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false, // 👈 run animation every time element enters view
  });
}, []);

  return (
    <section className={`${styles.featuresSection} `}>
      <h2 className={styles.heading} data-aos="fade-down">
        Key Features
      </h2>

      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={styles.featureCard}
            data-aos={feature.animation}
            data-aos-delay={index * 200} // staggered delay
          >
            <div className={styles.icon}>{feature.icon}</div>
            <p className={styles.title}>{feature.title}</p>
          </div>
        ))}
      </div>

      <p className={styles.joinText} data-aos="zoom-in">
        Join Alumni Connect Today!
      </p>
      <button className={styles.ctaBtn} data-aos="flip-up">
        Get Started
      </button>
    </section>
  );
};

export default KeyFeatures;
