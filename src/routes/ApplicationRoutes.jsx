import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/components/Login";
import Register from "../pages/Login/components/Register";
import Auth from "../pages/Login/Auth";
import Homepage from "../pages/Homepage/Homepage";
import AccountSettings from "../pages/AccountSettings/AccountSettings";
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
        <Route path="account-settings" element={<AccountSettings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRoutes;
