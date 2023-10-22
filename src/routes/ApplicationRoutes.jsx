import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/components/Login";
import Register from "../pages/Login/components/Register";
import Auth from "../pages/Login/Auth";
import Homepage from "../pages/Homepage/Homepage";
import AccountSettings from "../pages/AccountSettings/AccountSettings";
import AccountInfo from "../pages/AccountSettings/components/outlets/AccountInfo";
import AccountSecurity from "../pages/AccountSettings/components/outlets/AccountSecurity";
import AccountSettingsOverview from "../pages/AccountSettings/components/outlets/AccountSettingsOverview";
import ListingPage from "../pages/Listing/ListingPage";

const ApplicationRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="auth" element={<Auth />}>
          <Route index element={<Navigate replace to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="account-settings" element={<AccountSettings />}>
          <Route index element={<AccountSettingsOverview />} />
          <Route path="account-info" element={<AccountInfo />} />
          <Route path="security" element={<AccountSecurity />} />
        </Route>
        <Route path="listings/:id" element={<ListingPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRoutes;
