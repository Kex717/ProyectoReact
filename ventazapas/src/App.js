import './App.css';
import Inicio from "./Inicio";
import { Routes, Route, HashRouter } from "react-router-dom";
import NotFound from "./componentes/NotFound"
import Registro from "./componentes/registro/Registro"
import InicioSesion from './componentes/inicioSesion/InicioSesion';
import DataProvider from './componentes/context/DataContext';
import CarritoContents from './componentes/carrito/CarritoContents';

function App (){
  return(
    <DataProvider>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Inicio/>}/>
          <Route exact path='/Registro' element={<Registro/>}/>
          <Route exact path='*' element={<NotFound/>}/>
          <Route exact path='/InicioSesion' element={<InicioSesion/>}/>
          <Route exact path='/carrito' element={<CarritoContents/>}/>
        </Routes>
      </HashRouter>
    </DataProvider>
  );
}

export default App;