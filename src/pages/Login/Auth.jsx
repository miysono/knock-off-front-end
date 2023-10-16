import { Outlet } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";

const Auth = () => {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};

export default Auth;
