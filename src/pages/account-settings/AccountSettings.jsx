import { Outlet } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import PageBody from "../../layout/PageBody";

const AccountSettings = () => {
  return (
    <>
      <Navbar />
      <PageBody>
        <Outlet />
      </PageBody>
      <Footer />
    </>
  );
};

export default AccountSettings;
