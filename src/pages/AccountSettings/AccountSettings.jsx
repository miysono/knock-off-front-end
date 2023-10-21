import { Outlet } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

const AccountSettings = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-start">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AccountSettings;
