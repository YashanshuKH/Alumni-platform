import styles from "./Dashboard.module.css"
import Sidebar from "../Sidebar/Sidebar";
import UNavbar from "../UNavbar/UNavbar";
import { Link } from "react-router-dom";



const Dashboard = () => {
  return (
    <div className={styles.main}>
      <UNavbar />
      <div>
        <Sidebar />
      </div>
      <div className={styles.dashboard}>
        <div className={styles.dashboardheader}>

          <h3>Quick Stats</h3>
        </div>
        <div className={styles.dashboard0}>
          <div className={styles.dashboard1}>
            <h5 className={styles.field}>Connections</h5>
            <h2 className={styles.data}><span>1234</span></h2>
          </div>
          <div className={styles.dashboard1}>
            <h5 className={styles.field}>Upcoming Events</h5>
            <h2 className={styles.data}><span>3</span></h2>
          </div>
          <div className={styles.dashboard1}>
           <h5 className={styles.field}>Notifications</h5>
            <h2 className={styles.data}><span>6</span></h2>           
          </div>
        </div>
            <Link className={styles.link}><div className={styles.notice}><span>SIH Prelims to be held on 29th September </span> </div></Link>
        <div>
        <div className={styles.dashboardheader}>
          <h3>News</h3>
        </div>
            <Link className={styles.link} to="/news1"><div className={styles.dashboard2}></div></Link>
            <Link  className={styles.link}to="/news2"><div className={styles.dashboard2}></div></Link>
            <Link  className={styles.link} to="/news3"><div className={styles.dashboard2}></div></Link>
            <Link className={styles.link} to="/news4"><div className={styles.dashboard2}></div></Link>
        </div>

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
        </div
      </div>
    </div>
  );
};

export default Dashboard;