import { useContext } from "react";
import LoginForm from "../Components/LoginForm";
import {DarkModeContext} from "../content/dark-mode"

const Login = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  
  return (
    <>
      <div className={`full-width ${darkMode?"dark":""}`}>
        <h1>Login</h1>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
