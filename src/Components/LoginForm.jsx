import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import { useContext } from "react";
import { AuthContext } from "../content/auth-context";
import api from "../services/api";
import { DarkModeContext } from "../content/dark-mode";


const LoginForm = () => {
/*
  const handleSubmit = (e) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };
  */
  
  const navigate = useNavigate();
  const { saveName, saveToken, saveIsLogged } = useContext(AuthContext);
  const darkMode = useContext(DarkModeContext);
  
   const handleSubmit = async(e) => {
    e.preventDefault();
    
    const username = e.target[0].value;
    const password = e.target[1].value;
    
    //login nao pode ser menor que 5 carcteres
    if(username.length <5){
      alert("Verifique os seus dados para acessar a ")
      console.error("username precisa ser maior do que 5 caracteres")
    }else{
      try {
        const response = await api.post("/auth", {
          "username": username, 
          "password": password
        });
        saveName(username);
        saveToken(response.data.token);
        saveIsLogged(true);
        navigate("/home");
        
      } catch (error) {
        alert("Verifique os seus dados");
        console.error("login não autorizado");
        console.log(error);
      }
    }
  }

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
            />
            
            <button  className="btn btn-primary" type="submit"> 
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
