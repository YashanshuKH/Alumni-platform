import React, { useState } from "react";
import styles from "./Message.module.css";
import UNavbar from "../UNavbar/UNavbar";
import Sidebar from "../Sidebar/Sidebar";
import { FiSend, FiPaperclip, FiSettings } from "react-icons/fi";

const Message = () => {
  const contacts = [
    { id: 1, name: "Akshima Katta", status: "Alumni", avatar: "https://i.pravatar.cc/40?img=1" },
    { id: 2, name: "Mariya Peter", status: "Alumni", avatar: "https://i.pravatar.cc/40?img=2" },
    { id: 3, name: "Sakshi Todi", status: "Alumni", avatar: "https://i.pravatar.cc/40?img=3" },
    { id: 4, name: "Jai Agarwal", status: "Alumni", avatar: "https://i.pravatar.cc/40?img=4" },
    { id: 5, name: "Risha N.", status: "Alumni", avatar: "https://i.pravatar.cc/40?img=5" },
    { id: 6, name: "Ritik Khandelwal", status: "Alumni", avatar: "https://i.pravatar.cc/40?img=6" },
  ];

  const [search, setSearch] = useState("");
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [conversations, setConversations] = useState({
    1: [{ text: "Hey Akshima 👋", type: "sent" }],
    2: [{ text: "Hi Mariya!", type: "sent" }],
    3: [{ text: "Hello Sakshi!", type: "received" }],
    4: [],
    5: [],
    6: [],
  });
  const [newMessage, setNewMessage] = useState("");

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    const updatedConvo = {
      ...conversations,
      [selectedContact.id]: [
        ...(conversations[selectedContact.id] || []),
        { text: newMessage, type: "sent" },
      ],
    };
    setConversations(updatedConvo);
    setNewMessage("");

    // Fake auto reply
    setTimeout(() => {
      setConversations((prev) => ({
        ...prev,
        [selectedContact.id]: [
          ...prev[selectedContact.id],
          { text: "Hello, how are you", type: "received" },
        ],
      }));
    }, 1000);
  };

  return (
    <div className={styles.main}>
      <UNavbar />
      <Sidebar />

      <div className={styles.body}>
        <div className={styles.chatWrapper}>
          {/* Contacts */}
          <div className={styles.contactsPanel}>
            <div className={styles.search}>
              <input
                type="text"
                placeholder="Find contacts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className={styles.contactList}>
              {filteredContacts.map((c) => (
                <div
                  key={c.id}
                  className={`${styles.contactItem} ${
                    selectedContact.id === c.id ? styles.activeContact : ""
                  }`}
                  onClick={() => setSelectedContact(c)}
                >
                  <img src={c.avatar} alt={c.name} className={styles.avatar} />
                  <div>
                    <span className={styles.contactName}>{c.name}</span>
                    <span className={styles.status}>{c.status}</span>
                  </div>
                </div>
              ))}
              {filteredContacts.length === 0 && (
                <p className={styles.noResult}>No contacts found</p>
              )}
            </div>
          </div>

          {/* Chat Panel */}
          <div className={styles.chatPanel}>
            {selectedContact ? (
              <>
                {/* Header */}
                <div className={styles.chatHeader}>
                  <div className={styles.headerLeft}>
  <img
    src={selectedContact.avatar}
    alt={selectedContact.name}
    className={styles.avatarLarge}
  />
  <div>
    <h3>{selectedContact.name}</h3>
  </div>
</div>

                  <FiSettings className={styles.icon} />
                </div>

                {/* Messages */}
                <div className={styles.chatMessages}>
                  {(conversations[selectedContact.id] || []).map((msg, i) => (
                    <div
                      key={i}
                      className={`${styles.message} ${
                        msg.type === "sent" ? styles.sent : styles.received
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>

                {/* Typing Area */}
                <div className={styles.messageArea}>
  <FiPaperclip className={styles.iconAttach} />
  <input
    type="text"
    className={styles.messageInput}
    placeholder="Type a message..."
    value={newMessage}
    onChange={(e) => setNewMessage(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
  />
  <button className={styles.iconButton} onClick={sendMessage}>
    <FiSend />
  </button>
</div>

              </>
            ) : (
              <div className={styles.emptyChat}>Select a contact to start chatting</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
