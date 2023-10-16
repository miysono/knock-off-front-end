import { createContext, useState } from "react";
import {
  registerUserRequest,
  loginUserRequest,
  currentUserRequest,
} from "../services/user-requests";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const isUserLoggedIn = () => {
    if (localStorage.getItem("token")) return true;
    else return false;
  };

  const [isLoading, setIsLoading] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(isUserLoggedIn);

  const loginWithEmail = async (email, password) => {
    try {
      setIsLoading(true);
      const res = await loginUserRequest(email, password);
      return res;
    } catch (err) {
      throw new Error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email, password, lastName, number, firstName) => {
    try {
      setIsLoading(true);
      const res = await registerUserRequest(
        email,
        password,
        number,
        firstName,
        lastName
      );
      return res;
    } catch (err) {
      throw new Error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const currentUser = async () => {
    try {
      setIsLoading(true);
      const res = await currentUserRequest();
      return res;
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUserLoggedIn(false);
  };

  const resetPassword = (password, newPassword) => {};

  return (
    <AuthContext.Provider
      value={{
        loginWithEmail,
        register,
        currentUser,
        setUserLoggedIn,
        logout,
        userLoggedIn,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
