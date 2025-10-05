/*
Objetivo 
Desarrollar un componente de lista de tareas que maneje diferentes estados y 
muestre información condicional.

Requisitos Técnicos 
1. Operador ternario para mostrar mensaje cuando no hay tareas 
2. Keys únicas para cada elemento de la lista 
3. Operadores lógicos para mostrar estadísticas solo cuando hay tareas 
4. Funciones con ternarios para determinar colores e iconos según estado 

Funcionalidades Esperadas 
● ✅ Lista de tareas con estados: "pendiente", "en progreso", "completada" 
● ✅ Mensaje "No hay tareas pendientes" cuando el array está vacío 
● ✅ Cada tarea debe mostrar icono y color según su estado 
● ✅ Estadísticas de tareas (completadas/en progreso) solo cuando hay tareas 
● ✅ Estados visuales: 
    ○ Completada: verde (✓) 
    ○ En progreso: naranja (⏳) 
    ○ Pendiente: gris (⏱)

Datos Iniciales 
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
    const [tarea, setTarea] = useState("")

    //Función que agrega la tarea escrita por el usuario
    const agregarTarea = () => {
        //Se crea el objeto tarea con el texto del input
        const nuevaTarea = {id: tareas.length + 1, texto: tarea, estado: "pendiente"}
        
        //Se agrega la tarea a la lista
        setTareas([nuevaTarea, ...tareas])

        //Se resetea tarea para que el input esté vacío
        setTarea("")
    }

    //Función que marca la tarea como "completada" cuando se presiona el botón correspondiente
    const completarTarea = (id) => {
        setTareas(
            tareas.map( (tarea) => 
            tarea.id === id ? {...tarea, estado: "completada"} : tarea
            )
        )
    }

    //Función que marca la tarea como "en progreso" cuando se presiona el botón correspondiente
    const enProgreso = (id) => {
        setTareas(
            tareas.map( (tarea) => 
            tarea.id === id ? {...tarea, estado: "en progreso"} : tarea
            )
        )
    }

    //Función encargada de eliminar las tareas
    const eliminarTarea = (id) => {
        setTareas(
            tareas.filter(tarea => tarea.id !== id)
        )
    }

    return (
        <div className="todo-list">
            
            <div className="contador">
                <p>
                    Completadas: {tareas.filter(tarea => tarea.estado === 'completada').length} |
                    En progreso: {tareas.filter(tarea => tarea.estado === 'en progreso').length} |
                    Pendientes: {tareas.filter(tarea => tarea.estado === 'pendiente').length} |
                    Totales: {tareas.length}
                </p>
            </div>
        
            
            <div className="add-todo">
                <label htmlFor="add-todo">Agregar tarea:</label>
                <input type="text" value={tarea} onChange={(e) => {setTarea(e.target.value)}}></input>
                <button onClick={agregarTarea}>Agregar tarea</button>
            </div>
            
            <div className="todo-text">
                <ul>
                    {tareas.map(({id, texto, estado}) => {
                        return (
                            <li key={id}>
                                {estado === "completada" 
                                ? <span className="completada">✅ {texto} </span> 
                                : estado === "en progreso" 
                                ? <span className="en-progreso">⏳ {texto}</span>
                                : <span className="pendiente">❌ {texto}</span>}
                                {estado !== "completada" && <button className="complete-btn" onClick={() => completarTarea(id)}>(Completada)</button>}
                                {estado === "pendiente" && <button className="pendiente-btn" onClick={() => enProgreso(id)}>(En progreso)</button>}
                                <button className="delete-btn" onClick={() => eliminarTarea(id)}>(Eliminar)</button>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export default Tareas