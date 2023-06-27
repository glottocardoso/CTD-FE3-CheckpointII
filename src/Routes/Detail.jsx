import DetailCard from "../Components/DetailCard";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Detail = () => {

  const { id } = useParams();
  return (
    <>
      <DetailCard idDentista={id}/>
  
    </>
  )
}

export default Detail