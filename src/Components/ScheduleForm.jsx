import { useContext, useEffect, useState } from "react";
import styles from "./ScheduleForm.module.css";
import api from "../services/api";

const ScheduleForm = () => {

  const [dentistas, setDentistas] = useState([]);
  const [pacientes, setPacientes] = useState([]);

  const getDentistasApi = async () => {
    try {
      const response = await api.get("/dentista");
      return response.data;
    } catch (error) {
      console.log("Erro ao procurar dentistas");
      console.log(error);
    }
  }

  const getPacientesApi = async () => {
    try {
      const response = await api.get("/paciente");
      return response.data.body;
    } catch (error) {
      console.log("Erro ao procurar pacientes");
      console.log(error);
    }
  }

  useEffect(() => {
    const getDentistas = async () => {
      const dentistas = await getDentistasApi();
      if (dentistas) {
        setDentistas(dentistas);
      }
    };
    getDentistas();

    const getPacientes = async () => {
      const pacientes = await getPacientesApi();
      if (pacientes) {
        setPacientes(pacientes);
      }
    };
    getPacientes();
    //Nesse useEffect, você vai fazer um fetch na api buscando TODOS os dentistas
    //e pacientes e carregar os dados em 2 estados diferentes
  }, []);

  const handleSubmit = (event) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //obter os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que marca a consulta
    //lembre-se que essa rota precisa de um Bearer Token para funcionar.
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center container}`
        }
      >
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentist
              </label>
              <select className="form-select" name="dentist" id="dentist">
                {/*Aqui deve ser feito um map para listar todos os dentistas*/}
                {dentistas.map(dentista => (
                  <option key={dentista.matricula} value={dentista.matricula}>
                    {dentista.nome + ' ' + dentista.sobrenome}
                  </option>
                ))}

              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Patient
              </label>
              <select className="form-select" name="patient" id="patient">
                {/*Aqui deve ser feito um map para listar todos os pacientes*/}
                {pacientes.map(paciente => (
                  <option key={paciente.matricula} value={paciente.matricula}>
                    {paciente.nome +' '+ paciente.sobrenome}
                  </option>
                ))}

              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button
              className={`btn btn-light ${styles.button
                }`}
              type="submit"
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
