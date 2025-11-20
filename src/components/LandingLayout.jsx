import Navbar from "./Getstarted/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "70px" }}>
        {children}
      </div>
    </>
  );
};

export default Layout;
