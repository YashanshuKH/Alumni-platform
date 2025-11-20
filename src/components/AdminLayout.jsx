import ANavbar from "./Authority/ANavbar/ANavbar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <ANavbar />
      {/* Page content wrapper that automatically adjusts its margin */}
      <div className="pageContent">{children}</div>
    </>
  );
};

export default AdminLayout;
