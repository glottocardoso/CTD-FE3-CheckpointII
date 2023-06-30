import styles from "./Card.module.css";
import { DarkModeContext } from "../content/dark-mode";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Card = (props) => {
  const {matricula, nome, username} = props;
  const [darkMode] = useContext(DarkModeContext);

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        
      <div className={`card ${darkMode?"dark":""}`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody} ${darkMode?"dark":""}`}>
          {/* DONE
          Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <Link to={`/dentist/${matricula}`}>
            <h5 className={`card-title ${!darkMode?"darkFont":""} ${styles.title}`}>{nome}</h5>
          </Link>
          <p className={`card-text ${!darkMode?"darkFont":""}`}>{username}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
