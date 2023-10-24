import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// AUTH ROUTES
import Login from "../pages/Login/components/outlets/Login";
import Register from "../pages/Login/components/outlets/Register";
import Auth from "../pages/Login/Auth";

// HOMEPAGE ROUTE
import Homepage from "../pages/homepage/Homepage";

// ACCOUNT SETTINGS ROUTES
import AccountSettings from "../pages/account-settings/AccountSettings";
import AccountInfo from "../pages/account-settings/components/outlets/AccountInfo";
import AccountSecurity from "../pages/account-settings/components/outlets/AccountSecurity";
import AccountSettingsOverview from "../pages/account-settings/components/outlets/AccountSettingsOverview";

// LISTING ROUTES
import CreateListingPage from "../pages/create-listing/CreateListingPage";
import AllListingsPage from "../pages/all-listings/AllListingsPage";
import ListingPage from "../pages/listing-page/ListingPage";

// PUBLIC USER PROFILE
import PublicUserProfile from "../pages/public-user-profile/PublicUserProfile";
import PageNotFound from "../pages/page-not-found/PageNotFound";

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
        <Route path="404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRoutes;
