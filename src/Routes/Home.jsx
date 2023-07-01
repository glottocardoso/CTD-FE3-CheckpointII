import { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import api from "../services/api"
import { DarkModeContext } from "../content/dark-mode";

const Home = () => {
  const [dentistas, setDentistas] = useState([]);
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  
  async function getDentistas(){
    try {
      const response = await api.get("/dentista");
      setDentistas(response.data);
    } catch (error) {
      console.log("Erro ao procurar dentistas");
      console.log(error);
    }
    
  }

  useEffect(() => {
    getDentistas();
    
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
  }, []);


  return (
    <>
      <h1 className={`${darkMode?"dark":""}`} style={darkMode?{backgroundColor:"gray", margin:0}:{backgroundColor:"white", margin:0}}>Home</h1>
      <div className={`full-width`} style={darkMode?{backgroundColor:"gray",padding:20}:{backgroundColor:"white",padding:20}}>
        <div className={`card-grid container `} >
          {
            dentistas.map((dentista) => (
              <Card key= {dentista.matricula} matricula={dentista.matricula} nome={dentista.nome} username={dentista.usuario.username}/> 
              ))
            }
        </div>
      </div>
    </>
  );
};

export default Home;
