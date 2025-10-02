/*
Crea un componente TodoList que permita agregar nuevas tareas, marcarlas como 
completadas y eliminarlas. Incluye un input para agregar tareas y muestra el total de tareas 
pendientes.
*/

import { useState } from "react"

const TodoList = () => {
    //Estado con array de las tareas (objetos tipo {id, titulo, completada})
    const [tareas, setTareas] = useState([])

    //Estado con tarea a agregar por el usuario
    const [tarea, setTarea] = useState("")

    //Función que agrega la tarea escrita por el usuario
    const agregarTarea = () => {
        //Se crea el objeto tarea con el texto del input
        const nuevaTarea = {id: tareas.length + 1, titulo: tarea, completada: false}
        
        //Se agrega la tarea a la lista
        setTareas([nuevaTarea, ...tareas])

        //Se resetea tarea para que el input esté vacío
        setTarea("")
    }

    //Función que marca la tarea como completada cuando se presiona el botón correspondiente
    const completarTarea = (id) => {
        setTareas(
            tareas.map( (tarea) => 
            tarea.id === id ? {...tarea, completada: true} : tarea
            )
        )
    }

    //Función encargada de eliminar las tareas
    const eliminarTarea = (id) => {
        setTareas(
            tareas.filter(tarea => tarea.id !== id)
        )
    }

    //Función que contabiliza las tareas pendientes (no completadas)
    const tareasPendientes = () => {
        return tareas.filter(tarea => tarea.completada === false).length
    }

    return (
        <div className="todo-list">
            <div className="add-todo">
                <label htmlFor="add-todo">Agregar tarea:</label>
                <input type="text" value={tarea} onChange={(e) => {setTarea(e.target.value)}}></input>
                <button onClick={agregarTarea}>Agregar tarea</button>
            </div>
            <div className="todo-text">
                <ul>
                    {tareas.map(({id, titulo, completada}) => {
                        return (
                            <li key={id}>
                                {completada ? <span className="completed">✅ {titulo} </span> : <span>❌ {titulo}</span>}
                                {completada === false && <button className="delete-btn" onClick={() => completarTarea(id)}>(Completada)</button>}
                                <button className="delete-btn" onClick={() => eliminarTarea(id)}>(Eliminar)</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="contador">
                <p>Tareas pendientes: {tareasPendientes()}</p>
            </div>
        </div>
    )
}

export default TodoList