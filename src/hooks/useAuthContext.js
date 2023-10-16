import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuthContext was used outside of the AuthProvider.");
  return context;
};

export { useAuthContext };
