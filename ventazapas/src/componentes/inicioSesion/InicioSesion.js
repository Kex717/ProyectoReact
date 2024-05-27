import React, { useEffect, useRef, useState } from 'react'
import "./InicioSesion.css"
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import swal from 'sweetalert2';
import usuarios from '../usuariosRegistrados.json'
import ver from './ojo.jpg';
import GoogleOAuth from '../googleOAuthProvider/GoogleOAuthProvider'

const InicioSesion = () =>{
  const cookies = new Cookies();
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const [values, setValues] = useState({
    rol: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    const newValues = {
        ...values,
        [name]: value,
    }
    setValues(newValues)
  }


  const handleClickPassword = (e) => {
    setErrorPassword(false);
  }

  const handleClickEmail = (e) => {
    setErrorEmail(false);
  }

  const handleShowPassword = (e) => {
    setShowPassword(!showPassword);
  }

  const iniciarSesion = (e) => {
    e.preventDefault();
    let select = document.getElementById("exampleFormControlSelect1");
    values.rol = select.value;

    if(values.password.length === 0 && values.email.length === 0){
      setErrorEmail(true);
      setErrorPassword(true);
      return
    }

    if(values.password.length === 0){
      setErrorPassword(true);
    }

    if (values.email.length === 0) {
      setErrorEmail(true);
    }

    fetch("http://localhost:3001/login", {
      method: 'POST',
      headers: {"Content-Type": "Application/json", "Acept": "application/json"},
      body: JSON.stringify(values)
    })

      .then(response => {
        if(response.status === 200 && values.rol === "Usuario"){
          cookies.set('email', values.email,{
            secure: true,
            sameSite: 'none',
            path: '/'
          })
          const usuario = usuarios.find(user => user.email === values.email);
          if(usuario){
            cookies.set('nombreUsu', usuario.nombre);
            cookies.set('apellidoUsu', usuario.apellido);
          }
          cookies.set('iniciado', true);
          window.location.hash = '/'
        }else if(response.status === 200 && values.rol === "Administrador"){
          cookies.set('email', values.email, {
            secure: true,
            sameSite: 'none',
            path: '/'
          })
          const usuario = usuarios.find(user => user.email === values.email);
          if(usuario){
            cookies.set('nombreUsu', usuario.nombre);
            cookies.set('apellidoUsu', usuario.apellido);
          }
          cookies.set('iniciado', true);
          window.location.hash = '/usuarios-registrados'
        }else{
          console.log("sdfd", response.status)
          swal.fire({
            title: "Las credenciales ingresadas no son correctas",
            icon: "error"
          })
          
        }
      })

      .catch(() => swal.fire({
        title: "No se puede iniciar sesion por un problema en el servidor",
        icon: "error"
      }),
      )
  }

  useEffect(()=> {
    if(cookies.get('email')){
      window.location.hash = '/InicioSesion'
    }
  })




  return (
    <div className='container'>
      <Header/>
      <form onSubmit={iniciarSesion}>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5" id='t'>
                <div className="card bg-dark text-white" >
                  <div className="card-body p-5 text-center">

                    <div className="mb-md-5 mt-md-4 pb-0" >

                      <h2 className="fw-bold mb-2 text-uppercase">Iniciar Sesión</h2>

                      <div>
                        <div className='text-start'><label for="exampleFormControlSelect1">Rol</label>
                        </div>
                        <div className='input-group mb-3'>
                          <select className='form-control' id='exampleFormControlSelect1' name='rol'>
                            <option>Administrador</option>
                            <option>Usuario</option>
                          </select>
                        </div>
                      </div>

                      <p className="text-white-50 mb-5">Ingrese su correo y contraseña</p>

                      <div data-mdb-input-init className="form-outline form-white mb-4">
                        <label className="form-label" for="typeEmailX">Correo</label>
                        <input type="email" id="typeEmailX" name = "email" className="form-control form-control-lg" onChange={handleChange} onClick={handleClickEmail}/>
                      </div>

                      <div data-mdb-input-init className="form-outline form-white mb-4">
                        <label className="form-label" for="typePasswordX">Contraseña</label>
                        <input type={showPassword ? "password" : "text"} id="typePasswordX" className="form-control form-control-lg" name='password' onChange={handleChange} onClick={handleClickPassword}/>
                        {/* <span className='input-group-text'><<img></img> onClick={handleShowPassword}/></span> */}
                      </div>
                      
                     
                      
                      {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}
                      <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Iniciar Sesion</button>

                      <div> 
                        <h5></h5>
                        <h5>Acceder Con Google</h5>
                        <center><GoogleOAuth/></center>
                      </div>
                    </div>
                    <div>
                      <Link to={"/Registro"}><p className="mb-0">No tienes una cuenta? Dale click para crearla
                      </p></Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  )
} 
export default InicioSesion;