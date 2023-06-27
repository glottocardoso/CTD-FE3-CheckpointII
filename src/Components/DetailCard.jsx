import { useEffect, useState, useContext } from "react";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";
import api from "../services/api";
import { DarkModeContext } from "../content/dark-mode";

const DetailCard = (props) => {
  const [darkMode] = useContext(DarkModeContext)
  const { idDentista } = props;
  const [dentista, setDentista] = useState({});

  async function getDentista(){
    try {
      const { data } = await api.get(`/dentista?matricula=${idDentista}`);
      setDentista({nome: data.nome, sobrenome: data.sobrenome, matricula: data.matricula, usuario: data.usuario.username})
    } catch (error) {
      console.log("Erro ao obter dentista procurado");
      console.log(error);
    }
  }

  useEffect(() => {
    getDentista();
    
    //=>DONE Nesse useEffect, você vai fazer um fetch na api passando o 
    //id do dentista que está vindo do react-router e carregar os dados em algum estado
  }, []);
  
  
  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    <>
      <h1 className={`${darkMode?"dark":""}`} style={{margin:0}}>Detail about Dentist {'Nome do Dentista'} </h1>
      <div className={`card col-sm-12 col-lg-6 container ${darkMode?"dark":""}`}></div>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div
          className={`card-body row`}
        >
          <div className={`col-sm-12 col-lg-6`}>
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className={`list-group`}>
              <li className={`list-group-item`}>Nome: {dentista.nome}</li>
              <li className={`list-group-item`}>
                Sobrenome: {dentista.sobrenome}
              </li>
              <li className={`list-group-item`}>
                Usuário: {dentista.usuario}
              </li>
            </ul>
            <div className={`text-center`}>
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-light ${styles.button
                  }`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
