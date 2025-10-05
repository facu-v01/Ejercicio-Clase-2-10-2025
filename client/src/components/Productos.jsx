/*
Objetivo 
Crear un catálogo de productos con sistema de filtros por categoría y mensajes 
condicionales. 

Requisitos Técnicos 
1. Operador ternario para filtrar productos 
2. Operadores lógicos para mostrar etiquetas de oferta 
3. Keys en elementos iterados (botones y productos) 
4. Ternarios anidados para pluralización de texto

Funcionalidades Esperadas 
● ✅ Botones de filtro por categoría ("todos", "electronica", "ropa", "libros") 
● ✅ Mensaje cuando no hay productos en una categoría 
● ✅ Etiqueta "¡Producto premium!" para productos > $500 
● ✅ Contador dinámico que cambia entre "producto"/"productos" 
● ✅ Texto que muestra la categoría filtrada (excepto "todos") 

Datos Iniciales 
const productos = [ 
{ id: 1, nombre: 'Laptop', categoria: 'electronica', precio: 999 }, 
{ id: 2, nombre: 'Smartphone', categoria: 'electronica', precio: 599 }, 
{ id: 3, nombre: 'Camiseta', categoria: 'ropa', precio: 25 }, 
// ... más productos 
]; 
*/

import { useState } from "react"

const Productos = ({productos}) => {

    const [categoria, setCategoria] = useState("todos")

    const filtrar = () => {
        
        let productosFiltrados = categoria === "todos" ? productos : productos.filter(producto => producto.categoria === categoria)
        
        if (productosFiltrados.length === 0) {
            return (
                <p>No existen productos disponibles en la categoría {categoria}.</p>
            )
        } else {
            return (
                <>
                    {categoria !== "todos" && <p>Categoría filtrada: {categoria}</p>}
                    {categoria !== "todos" && (productosFiltrados.length > 1 ? <p>{productosFiltrados.length} productos encontrados</p> : <p>{productosFiltrados.length} producto encontrado</p>)}

                    <ul>
                        {productosFiltrados.map(({id, nombre, categoria, precio }) => (
                            <li key={id}>
                                <h3 className="nombre-producto">{nombre}</h3>
                                {precio > 500 && <span className="premium">¡Producto premium!</span>}
                                <p className="precio">${precio}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )
        }
    }

    return (
        <div className="filtro-productos">

            <div className="filtro">
                <p>Filtrar según:</p>
                <div className="filtro-btn">
                    <button onClick={() => setCategoria("todos")}>Todos</button>
                    <button onClick={() => setCategoria("electronica")}>Electrónica</button>
                    <button onClick={() => setCategoria("ropa")}>Ropa</button>
                    <button onClick={() => setCategoria("libros")}>Libros</button>
                </div>
            </div>

            <div className="productos">
                {filtrar()}
            </div>

        </div>
    )
}

export default Productos