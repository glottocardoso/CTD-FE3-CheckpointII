import { useContext} from "react";
import styles from "./Navbar.module.css";
import { AuthContext } from "../content/auth-context";
import { DarkModeContext } from "../content/dark-mode";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isLogged, saveIsLogged, removeUserStorage } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const navigate = useNavigate();

  function tokenChecker(){
    const token = localStorage.getItem("token");
    if(token){
      return true;
    } else {
      return false;
    }
  }
  
  const logout = () => {
    removeUserStorage()
    saveIsLogged(false);
    navigate("/");
  }
 
  return (
    <header className={`sticky-top`}>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar navbar-dark bg-dark ou navbar-light bg-light*/}
      <nav
        className={`navbar navbar-expand-sm navbar-light bg-light ${darkMode?"bg-dark":"bg-light"}`}
        aria-label="Third navbar example"
      >
        <div className={`container`}>
          {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
          {tokenChecker()?
            <Link className={`navbar-brand ${styles.navbarBrand} ${darkMode?"dark-font":""}`} to="/home">
              DH Odonto
            </Link>
              : 
            <Link className={`navbar-brand ${styles.navbarBrand} ${darkMode?"dark-font":""}`} to="/">
            DH Odonto
            </Link>
          } 
          <button
            className={`navbar-toggler `}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon `}></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-end`}
            id="navbarsExample03"
          >
            <ul className={`navbar-nav mb-2 mb-sm-0 `}>
              <li className={`nav-item ${styles.navBarLink}`}>
                {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
                {tokenChecker() 
                  ? 
                    <Link className={`nav-link ${darkMode?"dark-font":""}`} to="/home">
                      Home
                    </Link>
                  : 
                  null
                }
              </li>
              {isLogged ? <li className={`nav-item ${styles.navBarLink}`}>
                {/* Se o usuário estiver logado, deverá aparecer um botão de logout
                que vai apagar o token do localstorage.
                Se o usuário estiver deslogado, um link fará um redirecionamento, com react-router,
                ao formulário de login
                O botão de logout deverá ser testado darkmode
                se sim, btn-dark, se não, btn-light */}
            
                {tokenChecker() 
                  ? 
                    <button className={`nav-link border-0 bg-transparent ${darkMode?"dark-font":""}`} onClick={() => logout()}>
                      Logout
                    </button>
                  : 
                    null
                }
                
              </li> : <li className={`nav-item ${styles.navBarLink}`}>
                {/* Se o usuário estiver logado, deverá aparecer um botão de logout
                que vai apagar o token do localstorage.
                Se o usuário estiver deslogado, um link fará um redirecionamento, com react-router,
                ao formulário de login
                O botão de logout deverá ser testado darkmode
                se sim, btn-dark, se não, btn-light */}
                <a className="nav-link" href="/login">
                  Login
                </a>
                
              </li>}

              <li className={`nav-item`}>
                {/* Ao ser clicado, esse botão mudará a aplicação para dark mode ou light mode.
                 Lembre-se de usar um estado no contexto para fazer essa alteração.
                 Na linha seguinte deverá ser feito um teste se a aplicação
                 está em dark mode e deverá utilizar o icone ☀ ou 🌙 e btn-dark ou btn-light*/}
                <button
                  className={`btn ${styles.btnStyle
                    } ${darkMode?"dark-font ":""} ${darkMode?"white":""}`}
                    onClick={()=> setDarkMode(!darkMode)}
                    
                >
                  {darkMode?"🌙":"☀"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
