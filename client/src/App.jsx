import Counter from './components/Counter'
import Tareas from './components/Tareas'
import './App.css'
import TodoList from './components/TodoList';
import RoleAuth from './components/RoleAuth'

const tareasIniciales = [ 
{ id: 1, texto: 'Aprender React', estado: 'completada' }, 
{ id: 2, texto: 'Practicar hooks', estado: 'en progreso' }, 
{ id: 3, texto: 'Crear proyecto final', estado: 'pendiente' } 
]; 

const usuarioEjemplo = { 
nombre: 'Ana García', 
email: 'ana@ejemplo.com',  
rol: 'admin', // probar con 'editor' y 'usuario' 
ultimoAcceso: '15/01/2024' 
};  


function App() {

  return (
    <>
      
      <Counter />

      <hr/>
      
      <TodoList />
      
      <hr/>

      <Tareas lista={tareasIniciales} />

      <hr/>

      <RoleAuth />
    </>
  )
}

export default App
