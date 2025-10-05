import Counter from './components/Counter'
import Tareas from './components/Tareas'
import './App.css'
import TodoList from './components/TodoList';
import Auth from './components/Auth';
import Productos from './components/Productos';

const tareasIniciales = [ 
{ id: 1, texto: 'Aprender React', estado: 'completada' }, 
{ id: 2, texto: 'Practicar hooks', estado: 'en progreso' }, 
{ id: 3, texto: 'Crear proyecto final', estado: 'pendiente' } 
];

const usuarioEjemplo = { 
  nombre: 'Ana García', 
  email: 'ana@ejemplo.com',  
  rol: 'admin', // ('admin', 'editor' o 'usuario')
  ultimoAcceso: '15/01/2024' 
}; 

const productos = [ 
  { id: 1, nombre: 'Laptop', categoria: 'electronica', precio: 999 }, 
  { id: 2, nombre: 'Smartphone', categoria: 'electronica', precio: 599 }, 
  { id: 3, nombre: 'Camiseta', categoria: 'ropa', precio: 25 }, 
  { id: 4, nombre: 'Pantalón', categoria: 'ropa', precio: 30 }, 
  { id: 5, nombre: 'La voz del gran jefe', categoria: 'libros', precio: 550 }
];

function App() {

  return (
    <>
      
      <Counter />

      <hr/>
      
      <TodoList />
      
      <hr/>

      <Tareas lista={tareasIniciales} />

      <hr/>

      <Auth usuario={usuarioEjemplo}/>
        
      <hr/>
      
      <Productos productos={productos}/>
    </>
  )
}

export default App
