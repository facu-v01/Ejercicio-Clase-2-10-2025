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

const RoleAuth = ({}) => {
    
    return (

    )
}

export default RoleAuth