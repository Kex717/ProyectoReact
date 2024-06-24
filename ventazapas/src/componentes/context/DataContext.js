import { createContext, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [librosDelCarrito, setLibrosDelCarrito] = useState([]);
    const [cantidadElementos, setCantidadElementos] = useState(0);

    return (
        <dataContext.Provider value={{ librosDelCarrito, setLibrosDelCarrito, cantidadElementos, setCantidadElementos }}>
            {children}
        </dataContext.Provider>
    );
}

export default DataProvider;