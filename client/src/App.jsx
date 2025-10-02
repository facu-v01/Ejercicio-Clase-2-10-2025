import Counter from './components/Counter'
import Tareas from './components/Tareas'
import './App.css'
import TodoList from './components/TodoList';

const tareasIniciales = [ 
{ id: 1, texto: 'Aprender React', estado: 'completada' }, 
{ id: 2, texto: 'Practicar hooks', estado: 'en progreso' }, 
{ id: 3, texto: 'Crear proyecto final', estado: 'pendiente' } 
]; 

function App() {

  return (
    <>
      
      <Counter />

      <hr/>
      
      <TodoList />
      
      <hr/>

      <Tareas lista={tareasIniciales} />
    </>
  )
}

export default App
