/*
Objetivo 
Implementar un sistema de autenticación que muestre interfaces diferentes según el 
estado y rol del usuario. 

Requisitos Técnicos 
1. Operadores ternarios anidados para 3 estados: cargando, logueado, no 
logueado 
2. Operadores lógicos para control de acceso por roles 
3. Operador OR para permisos múltiples (admin O editor) 
4. Simulación de estado asíncrono con loading 

Funcionalidades Esperadas 
● ✅ Tres estados visuales distintos: 
    ○ Cargando: spinner y mensaje 
    ○ No logueado: formulario de login 
    ○ Logueado: panel de usuario 
● ✅ Información del usuario: nombre, email, rol, último acceso 
● ✅ Botones según rol: 
    ○ Admin + Editor: "Gestionar Contenido" 
    ○ Solo Admin: "Panel de Administración" 
    ○ Todos: "Mi Perfil", "Configuración" 
● ✅ Botón de cerrar sesión 

Usuario de Ejemplo 
const usuarioEjemplo = { 
nombre: 'Ana García', 
email: 'ana@ejemplo.com',  
rol: 'admin', // probar con 'editor' y 'usuario' 
ultimoAcceso: '15/01/2024' 
}; 
*/

import { useState } from "react"

const Auth = ({usuario}) => {

    const {nombre, email, rol, ultimoAcceso} = usuario
    
    // -- HOOKS -- //
    const [estado, setEstado] = useState("login")
    
    const [datos, setDatos] = useState({email: email, password: ""})

    const [mostrarSpinner, setMostrarSpinner] = useState(false)

    // -- FUNCIÓN ACTUALIZACIÓN DE DATOS -- //
    //Se define la función encargada de actualizar en tiempo real los campos con lo que el usuario escribe y los mensajes de error
    const actualizarDatos = (d) => {
        const {name, value} = d.target

        const datosNuevos = { ...datos, [name]: value }
        setDatos(datosNuevos)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setEstado("logging")
        setMostrarSpinner(true)
        setTimeout(() => {
            setMostrarSpinner(false)
            setEstado("logged")
        }, 1000);

    }

    // -- FUNCIÓN LOGIN -- //
    const login = () => {
        return (
            <>
                <h2>Acceso</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="auth-label">
                            <label htmlFor="email">E-mail:</label>
                        </div>
                        <div>
                            <input
                                id="email" 
                                type="text" 
                                name="email" 
                                className="login-input" 
                                value={datos.email} 
                                onChange={actualizarDatos} />
                        </div>
                    </div>

                    <div>
                        <div className="auth-label">
                            <label htmlFor="password">Contraseña:</label>
                        </div>
                        <div>
                            <input
                                id="password" 
                                type="password" 
                                name="password" 
                                className="login-input" 
                                value={datos.password} 
                                onChange={actualizarDatos} />
                        </div>
                    </div>
                    
                    <div className="auth-button">
                        <button type="submit">Ingresar</button>
                    </div>
                </form>
            </>
        )
    }

    // --- FUNCIÓN PANEL DE USUARIO -- //
    const panelUsuario = (nombre, rol, email, ultimoAcceso) => {
        return (
            <>
                <h2>¡Bienvenido/a de nuevo {nombre}!</h2>
                <p>Rol: {rol}</p>
                <p>E-mail: {email}</p>
                <p>Último acceso: {ultimoAcceso}</p>
                <button>Mi Perfil</button>
                <button>Configuración</button>
                {(rol === "admin" || rol === "editor") && <button>Gestionar contenido</button>}
                {rol === "admin" && <button>Panel de Administración</button>}
                <button>Cerrar sesión</button>
            </>
        )
    }

    return (
        <div className="auth">
            {estado === "login" && login()}
            {mostrarSpinner && <div className="spinner"></div>}
            {estado === "logged" && panelUsuario(nombre, rol, email, ultimoAcceso)}
        </div>
    )

}

export default Auth