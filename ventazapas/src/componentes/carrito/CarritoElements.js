import React, { useContext } from "react";
import { dataContext } from "../context/DataContext";

function CarritoElements() {
    const { librosDelCarrito, setLibrosDelCarrito } = useContext(dataContext);

    const eliminarLibroDelCarrito = (id) => {
        const librosFiltrados = librosDelCarrito.filter((filtro) => filtro.id !== id);
        setLibrosDelCarrito(librosFiltrados);
    };

    const cantidad = (id, value) => {
        setLibrosDelCarrito((actualesLibros) => {
            return actualesLibros.map((libro) => {
                if (libro.id === id) {
                    return { ...libro, precioCarrito: libro.precio * value, cantidad: value };
                }
                return libro;
            });
        });
    };

    const formatoNumero = (number) => {
        return new Intl.NumberFormat().format(number);
    };

    return librosDelCarrito.map((libro) => {
        return (
            <section className="h-100" key={libro.id}>
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <div className="card rounded-3 mb-4">
                                <div className="card-body p-4">
                                    <div className="row d-flex justify-content-between align-items-center">
                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                            <img src={libro.image} className="img-fluid rounded-3" alt={libro.title} />
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                            <p className="lead fw-normal mb-2">{libro.title}</p>
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                            <input
                                                id={libro.id}
                                                min="1"
                                                name="quantity"
                                                value={libro.cantidad}
                                                onChange={(e) => cantidad(libro.id, Number(e.target.value))}
                                                type="number"
                                                className="form-control form-control-sm"
                                            />
                                        </div>
                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h5 className="mb-0">$ {formatoNumero(libro.precioCarrito)}</h5>
                                        </div>
                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                            <button className="btn btn-danger" onClick={() => eliminarLibroDelCarrito(libro.id)}>
                                                <i class="bi bi-trash3"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    });
}

export default CarritoElements;
