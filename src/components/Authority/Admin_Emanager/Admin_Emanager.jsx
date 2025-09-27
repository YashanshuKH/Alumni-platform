 import React from "react";
import styles from "./Admin_Emanager.module.css"; 
import UNavbar from "../../Alumni/UNavbar/UNavbar";
import ASidebar from "../ASidebar/ASidebar";

const Admin_Emanager = () => {
  return (
    <div className={styles.container}>
      <UNavbar />
      <ASidebar />
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Events</h1>
          <div className={styles.headerRight}>
            <button><i className="fas fa-plus"></i></button>
            <button><i className="far fa-bell"></i></button>
            <div className={styles.user}>
              <img
                src="https://placehold.co/32x32/E93D82/FFFFFF?text=DT"
                alt="User"
              />
              <div>
                <p>Dwayne Tatum</p>
                <p>Organizer</p>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.breadcrumb}>
            <p>Home &gt; Events</p>
            <div className={styles.buttons}>
              <button className={styles.addEvent}>
                <i className="fas fa-plus"></i> Add Event
              </button>
              <button>Manage Events</button>
            </div>
          </div>

          <div className={styles.tableContainer}>
            <h2>Event List</h2>
            <div className={styles.searchFilter}>
              <input type="text" placeholder="Search..." />
              <button>
                <i className="fas fa-filter"></i> Filter
              </button>
            </div>
            <table>
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>Event Name</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>Annual Tech Conference 2025</td>
                  <td>Oct 15, 2025</td>
                  <td>Convention Center</td>
                  <td><span className={styles.published}>Published</span></td>
                  <td>
                    <a href="#"><i className="fas fa-edit"></i></a>
                    <a href="#"><i className="fas fa-trash-alt"></i></a>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>Summer Music Festival</td>
                  <td>Nov 05, 2025</td>
                  <td>City Park</td>
                  <td><span className={styles.draft}>Draft</span></td>
                  <td>
                    <a href="#"><i className="fas fa-edit"></i></a>
                    <a href="#"><i className="fas fa-trash-alt"></i></a>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>Charity Gala Dinner</td>
                  <td>Nov 20, 2025</td>
                  <td>Grand Ballroom</td>
                  <td><span className={styles.cancelled}>Cancelled</span></td>
                  <td>
                    <a href="#"><i className="fas fa-edit"></i></a>
                    <a href="#"><i className="fas fa-trash-alt"></i></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin_Emanager;
