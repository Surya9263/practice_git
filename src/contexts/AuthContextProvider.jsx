import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

  const value = { isAuth, setIsAuth, token, setToken };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
