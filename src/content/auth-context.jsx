import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {

    const [name, setName] = useState("");
    const [isLogged, setIsLogged] = useState(false);
    
    useEffect(() => {
        const response = localStorage.getItem("user_name");
        setName(response);
    }, []);

  function saveIsLogged(status) {
    setIsLogged(status);
  }
  
   function saveName(user_name) {
     setName(user_name);
     localStorage.setItem("user_name", user_name);  
   } 
   
   function saveToken(token) {
     localStorage.setItem("token", token);
   }
   
   function removeUserStorage(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("token");
   }
   
   return (
    <AuthContext.Provider 
        value={{name, saveName, isLogged, saveIsLogged,  removeUserStorage, saveToken}} >
        {children}
    </AuthContext.Provider>    
   );   
}

export default AuthProvider;