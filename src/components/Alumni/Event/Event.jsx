import React, { useEffect } from 'react';
import styles from './Event.module.css'; 
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../../Getstarted/Footer/Footer';
import UNavbar from '../UNavbar/UNavbar';

const Event = () => {

  // Scroll reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll(`.${styles.eventCard}`);
    const revealOnScroll = () => {
      revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(top < windowHeight - 100){
          el.classList.add(styles.active);
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // initial check
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const events = [
    { date: "25 Sept 2025", title: "Event 1", location: "JECRC University, Jaipur", btn: "Register Now" },
    { date: "10 Oct 2025", title: "Event 2", location: "Online", btn: "View Details" },
    { date: "18 Nov 2025", title: "Event 3", location: "Delhi NCR", btn: "Register Now" },
    { date: "05 Dec 2025", title: "Event 4", location: "Mumbai", btn: "Register Now" }
  ];

  return (
    <div className={styles.content}>
      <UNavbar />
      <Sidebar />
      <section className={styles.hero}>
        <h2>Upcoming Alumni Events</h2>
        <p>Stay connected, grow together, and never miss an opportunity.</p>
      </section>

      <section className={styles.eventsContainer}>
        {events.map((event, idx) => (
          <div key={idx} className={styles.eventCard}>
            <p className={styles.eventDate}>📅 {event.date}</p>
            <h2 className={styles.eventTitle}>{event.title}</h2>
            <p className={styles.eventLocation}>{event.location}</p>
            <button className={styles.btn}>{event.btn}</button>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Event;
