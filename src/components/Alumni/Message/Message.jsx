import React from "react";
import styles from "./Message.module.css";
import UNavbar from "../UNavbar/UNavbar";
import Sidebar from "../Sidebar/Sidebar";

const Message = () => {
  const contacts = [
    { name: "Jutch Fieed", status: "Alumni" },
    { name: "Curent Sools", status: "Alumni" },
    { name: "John Smith", status: "Alumni" },
    { name: "Sarah Chen", status: "Alumni" },
    { name: "Frocks Nume", status: "Alumni" },
    { name: "Ciner Batar", status: "Alumni" },
  ];

  return (
    <div className={styles.main}>
      {/* Top Navbar */}
      <UNavbar />
      <Sidebar />

      <div className={styles.body}>
        {/* Left Sidebar */}
        
        {/* Messaging Area */}
        <div className={styles.chatWrapper}>
          {/* Contacts */}
          <div className={styles.contactsPanel}>
            <div className={styles.search}>
              <input type="text" placeholder="Find contacts..." />
            </div>
            <div className={styles.contactList}>
              {contacts.map((c, i) => (
                <div key={i} className={styles.contactItem}>
                  <span className={styles.contactName}>{c.name}</span>
                  <span className={styles.status}>{c.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chat */}
          <div className={styles.chatPanel}>
            <div className={styles.chatHeader}>
              <h3>John Smith</h3>
              <span className={styles.status}>Online</span>
            </div>

            <div className={styles.chatMessages}>
              <div className={`${styles.message} ${styles.sent}`}>
                Hey Alumni 👋
              </div>
              <div className={`${styles.message} ${styles.received}`}>
                Hi! How are you doing?
              </div>
              <div className={`${styles.message} ${styles.sent}`}>
                All good, just exploring opportunities!
              </div>
            </div>

            <div className={styles.messageArea}>
              <input
                type="text"
                className={styles.messageInput}
                placeholder="Type a message..."
              />
              <div className={styles.actions}>
                <button className={styles.rsvp}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
