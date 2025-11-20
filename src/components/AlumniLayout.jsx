import UNavbar from "./Alumni/UNavbar/UNavbar";

const Layout = ({ children }) => {
  return (
    <>
      <UNavbar />

      {/* Page content wrapper that automatically adjusts its margin */}
      <div className="pageContent">
        {children}
      </div>
    </>
  );
};

export default Layout;
