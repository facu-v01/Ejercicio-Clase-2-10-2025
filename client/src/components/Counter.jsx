/*
Crea un componente Counter que permita incrementar, decrementar y resetear un contador. 
El contador debe tener un valor mínimo de 0 y máximo de 10. Muestra mensajes cuando se 
alcancen los límites. 
*/

import { useState } from "react"

const Counter = () => {
    const [valor, setValor] = useState(0)

    const reset = () => {
        setValor(0)
    }

    return (
        <div className="counter">
            <h1>Contador</h1>
            <p>
                El siguiente contador puede incrementar su valor hasta el 10.<br/>
                Para resetear, presionar el botón correspondiente.
            </p>
            
            <h2>{valor}</h2>

            <div className="button-controls">
                <button className="button" onClick={() => {setValor(valor+1)}} disabled={valor >= 10}>Incrementar (+1)</button>
                <button className="reset" onClick={reset}>Resetear contador</button>
            </div>
        </div>
    )
}

export default Counter