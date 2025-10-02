/*
Crea un componente TodoList que permita agregar nuevas tareas, marcarlas como 
completadas y eliminarlas. Incluye un input para agregar tareas y muestra el total de tareas 
pendientes.
*/

/*
const tareasIniciales = [ 
{ id: 1, texto: 'Aprender React', estado: 'completada' }, 
{ id: 2, texto: 'Practicar hooks', estado: 'en progreso' }, 
{ id: 3, texto: 'Crear proyecto final', estado: 'pendiente' } 
];
*/

import { useState } from "react"

const Tareas = ({lista}) => {
    //Estado con array de las tareas (objetos tipo {id, texto, estado})
    const [tareas, setTareas] = useState(lista)

    //Estado con tarea a agregar por el usuario
    //const [tarea, setTarea] = useState("")

    /*
    //Función que agrega la tarea escrita por el usuario
    const agregarTarea = () => {
        //Se crea el objeto tarea con el texto del input
        const nuevaTarea = {id: tareas.length + 1, texto: tarea, estado: false}
        
        //Se agrega la tarea a la lista
        setTareas([nuevaTarea, ...tareas])

        //Se resetea tarea para que el input esté vacío
        setTarea("")
    }

    //Función que marca la tarea como completada cuando se presiona el botón correspondiente
    const completarTarea = (id) => {
        setTareas(
            tareas.map( (tarea) => 
            tarea.id === id ? {...tarea, estado: true} : tarea
            )
        )
    }

    //Función encargada de eliminar las tareas
    const eliminarTarea = (id) => {
        setTareas(
            tareas.filter(tarea => tarea.id !== id)
        )
    }

*/


    //Función que contabiliza las tareas pendientes (no completadas)
    const tareasPendientes = () => {
        return tareas.filter(tarea => tarea.estado === 'pendiente' || tarea.estado === 'en progreso').length
    }

    return (
        <div className="todo-list">
            <h2>Lista de tareas</h2>
            {/*<div className="add-todo">
                <label htmlFor="add-todo">Agregar tarea:</label>
                <input type="text" value={tarea} onChange={(e) => {setTarea(e.target.value)}}></input>
                <button onClick={agregarTarea}>Agregar tarea</button>
            </div>*/}
            <div className="todo-text">
                <p>
                    Completadas: {tareas.filter(tarea => tarea.estado === 'completada').length} |
                    En progreso: {tareas.filter(tarea => tarea.estado === 'en progreso').length} |
                    Pendientes: {tareas.filter(tarea => tarea.estado === 'pendiente').length} |
                    Totales: {tareas.length}
                    </p>
                <ul>
                    {tareas.map(({id, texto, estado}) => {
                        return (
                            <li key={id}>
                                {estado === 'completada' 
                                ? <span className="completada">✅ {texto} </span> 
                                : estado === 'en progreso' ? <span className="en-progreso">⏳ {texto}</span> : <span className="pendiente">❌ {texto}</span>}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="contador">
                {tareasPendientes() > 0 ? <p>Tareas pendientes: {tareasPendientes()}</p> : <p>No hay tareas pendientes</p>}
            </div>
        </div>
    )
}

export default Tareas