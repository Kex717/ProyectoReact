import React, { useContext } from 'react';
import { dataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default function Cards(props) {
  const { setLibrosDelCarrito } = useContext(dataContext);
  const navigate = useNavigate();
  const cookies = new Cookies();
  const iniciado = cookies.get('iniciado');

  function addToCart() {
    
    console.log(iniciado)
    if(!iniciado){
      navigate('/InicioSesion');
      console.log(iniciado)
    }

    setLibrosDelCarrito((currentLibros) => {
      const isItemFound = currentLibros.find((item) => item.id === props.items.id);
      if (isItemFound) {
        return currentLibros.map((item) => {
          if (item.id === props.items.id) {
            return { ...item, cantidad: item.cantidad + 1, precioCarrito: item.precioCarrito + item.precio };
          } else {
            return item;
          }
        });
      } else {
        return [...currentLibros, { ...props.items, cantidad: 1, precioCarrito: props.items.precio }];
      }
    });
    navigate('/carrito');
  }

  return (
    <div className="card2">
      <img src={props.items.image} alt="logo" />
      <div>
        <h5>{props.items.title}</h5>
        <span className="plataforma">Plataforma <br />{props.items.plataforma} <br />Precio: {props.items.precio}</span>
        <p>{props.items.descripcion}</p>
        <button type="button" className="btn btn-outline-primary" onClick={addToCart}>Comprar</button>
      </div>
    </div>
  );
}
