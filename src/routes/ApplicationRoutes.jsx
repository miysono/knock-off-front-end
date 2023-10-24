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
import AllListingsPage from "../pages/AllListings/AllListingsPage";
import PublicUserProfile from "../pages/PublicUserProfile/PublicUserProfile";
import CreateListingPage from "../pages/CreateListing/CreateListingPage";

const ApplicationRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOMEPAGE ROUTE  */}
        <Route index element={<Homepage />} />

        {/* AUTH ROUTES  */}
        <Route path="auth" element={<Auth />}>
          <Route index element={<Navigate replace to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* ACCOUNT SETTINGS ROUTES  */}
        <Route path="account-settings" element={<AccountSettings />}>
          <Route index element={<AccountSettingsOverview />} />
          <Route path="account-info" element={<AccountInfo />} />
          <Route path="security" element={<AccountSecurity />} />
        </Route>

        {/* LISTING ROUTES  */}
        <Route path="listings" element={<AllListingsPage />} />
        <Route path="listings/:id" element={<ListingPage />} />
        <Route path="create-listing" element={<CreateListingPage />} />

        {/* PPUBLIC USER PROFILES  */}
        <Route path="users/:id" element={<PublicUserProfile />} />

        {/* 404 ROUTE  */}
        <Route path="404" element={<div>404</div>} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRoutes;
