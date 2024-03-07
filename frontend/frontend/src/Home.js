import './App.css';
import { Carousel } from "./Carousel";


function Home() {

      
    return (
      <div id="home">
        <div id="carouselExampleInterval" className="carousel slide  " data-bs-ride="carousel">
          <Carousel></Carousel>
        </div>
      </div>
    );
  }
  
  export default Home;