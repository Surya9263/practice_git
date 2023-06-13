import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";

function Status(){
    const {isAuth,token}=useContext(AuthContext)
    return(
        <div>
            <h2>Is auth: {isAuth?"YES":"NO"}</h2>
            <h2>Token: {token}</h2>
        </div>
    )
}

export default Status