import styles from "./Dashboard.module.css"
import Sidebar from "../Sidebar/Sidebar";
import UNavbar from "../UNavbar/UNavbar";

const Dashboard = () => {
  return (
    <div className={styles.main}>
      <UNavbar />
      <div>
        <Sidebar />
      </div>
      <div className={styles.dashboard}>
        <div className={styles.dashboardheader}>
          <h3>Dashboard</h3>
        </div>
        <div className={styles.dashboard0}>
          <div className={styles.dashboard1}>
            mf hb,b
            

            
            
          </div>
          <div className={styles.dashboard1}>
            
          </div>
          <div className={styles.dashboard1}>
            
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;