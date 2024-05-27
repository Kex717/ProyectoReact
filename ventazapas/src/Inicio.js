import Footer from './componentes/footer/Footer';
import CardList from './componentes/body/CardList';
import Header from './componentes/header/Header';
import Carrusel from './componentes/carrusel/Carrusel';
import App from './App';

function Inicio() {
  return (
   <div>
      <Header/>
      <Carrusel/>
      <CardList/>
      <Footer/>
   </div>
     
  );
}

export default Inicio;