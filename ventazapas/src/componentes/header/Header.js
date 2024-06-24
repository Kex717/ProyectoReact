import React from 'react'
import './header.css'
import logo from './logo.png'
import casa from './casa.png'
import cerrar from './cerrar.png'
import contacto from './contacto.png'
import registro from './registro.png'
import iniciar from './iniciar.png'
import carrito from './carrito.jpg'
import { Link} from 'react-router-dom'
import Cookies from 'universal-cookie';
import SesionCaducada from '../sesionCaducada/SesionCaducada'


export default function Header() {

    const cookies = new Cookies();
    const iniciado = cookies.get('iniciado');
    const correo = cookies.get('email');
    const nombre = cookies.get('nombreUsu');
    const apellido = cookies.get('apellidoUsu');


    const handleLogout = () => {
        cookies.remove('iniciado');
        cookies.remove('email');
        cookies.remove('nombreUsu');
        window.location.href = '/';
    }    
    
    return (
        <div className='contenedor'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id='jo'>
                <div className="container-fluid">
                <img src={logo} className="logo" alt="logo" />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to={"/"}>
                                <li className="nav-item">   
                                    <img src={casa} className="iconos"/>
                                    <a className="nav-link active" aria-current="page">Inicio</a>
                                </li>
                            </Link>

                            {/* <li className="nav-item">
                                <img src={contacto} className="iconos"/>
                                <a className="nav-link disabled" aria-disabled="true">Contacto</a>
                            </li> */}
                            
                            <Link to="/Registro">
                                <li className="nav-item">
                                    <img src={registro} className="iconos"/>
                                    <a className="nav-link disabled" aria-disabled="true">Registro</a>
                                </li>
                            </Link>
                            
                            {/* <Link to="/InicioSesion">
                            <li className="nav-item">
                                <img src={iniciar} className="iconos"/>
                                <a className="nav-link disabled" aria-disabled="true">Iniciar Sesion</a>
                            </li>
                            </Link> */}

                            {iniciado ? (
                                <>
                                <li className="nav-item">
                                    <span className="nav-link">¡Bienvenido! {nombre} {apellido}</span>
                                    <span className="nav-link">{correo}</span>
                                </li>
                                <li className="nav-item">
                                    <img src={cerrar} className="iconos"/>
                                    <a href="#" className="nav-link" onClick={handleLogout}>Cerrar sesión</a>
                                </li>

                                <Link to="/carrito">
                                <li className="nav-item">
                                    <img src={carrito} className="iconos"/>
                                </li>
                                </Link>

                                <SesionCaducada/>
                                </>
                            ) : (
                                <Link to="/InicioSesion">
                                <li className="nav-item">
                                    <img src={iniciar} className="iconos"/>
                                    <a className="nav-link disabled" aria-disabled="true">Iniciar Sesión</a>
                                </li>
                                </Link>
                            )}
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
