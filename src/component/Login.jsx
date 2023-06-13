import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";

function Login() {
  const { isAuth, setIsAuth, token, setToken } = useContext(AuthContext);

  const handleLoginLogout = () => {
    if (!isAuth) {
      setIsAuth(true);
      setToken("abcd");
    } else {
      setIsAuth(false);
      setToken("");
    }
  };

  return <button onClick={handleLoginLogout}>{isAuth ? "LOGOUT" : "LOGIN"}</button>;
}

export default Login;
