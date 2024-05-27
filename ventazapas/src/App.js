import './App.css';
import Inicio from "./Inicio";
import { Routes, Route, HashRouter } from "react-router-dom";
import NotFound from "./componentes/NotFound"
import Registro from "./componentes/registro/Registro"
import InicioSesion from './componentes/inicioSesion/InicioSesion';

function App (){
  return(
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/Registro' element={<Registro/>}/>
        <Route exact path='*' element={<NotFound/>}/>
        <Route exact path='/InicioSesion' element={<InicioSesion/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;