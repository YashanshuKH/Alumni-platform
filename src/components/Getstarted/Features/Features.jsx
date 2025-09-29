import React, { useEffect } from "react";
import styles from "./Features.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Smart Communication & Networking",
    titleAnimation: "fade-right",
    animation: "fade-left",
    style: "feature1",
    info : "Our platform makes it simple for alumni, students, and institutions to stay connected. With built-in messaging, discussion forums, and event updates, we enable real-time communication and stronger professional networking opportunities."

  },
  {
    title: "Unified Data & Records Management",
    titleAnimation: "fade-left",
    animation: "fade-right",
    style: "feature2",
    info : "Say goodbye to scattered alumni records. We provide a centralized, organized, and easily searchable database where institutions can securely manage alumni profiles, achievements, and participation — all in one place."
  },
  {
    title: "Secure & Easy Access",
    titleAnimation: "fade-right",
    animation: "fade-left",
    style: "feature3",
    info : "Security and usability go hand in hand. With role-based access, encryption, and authentication protocols, our platform ensures that sensitive data stays protected while offering a seamless and user-friendly experience for every stakeholder."
  },
];

const KeyFeatures = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // run animation every time element enters view
    });
  }, []);

  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.heading} data-aos="fade-down">
        Key Features
      </h2>

      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${styles.featureCard} ${styles[feature.style]}`}
            data-aos={feature.animation}
            data-aos-delay={index * 200}
          >
            <p
              className={styles.title}
              data-aos={feature.titleAnimation}
              data-aos-delay={index * 200 + 100} // stagger title a bit
            >
              {feature.title}
            </p>
            <p
              className={styles.info}
              data-aos={feature.titleAnimation}
              data-aos-delay={index * 200 + 100} // stagger title a bit
            >
              {feature.info}
            </p>
          </div>
        ))}
      </div>

      <p className={styles.joinText} data-aos="zoom-in">
        Join Alumni Connect Today!
      </p>

              <button className={styles.ctaBtn} data-aos="flip-up">
              <Link className={styles.link} to="/login">
                Get Started
              </Link>
              </button>

    </section>
  );
};

export default KeyFeatures;
