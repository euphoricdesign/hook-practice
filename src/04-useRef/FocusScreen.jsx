import { useRef } from "react"

export const  FocusScreen = () => {
    
    const inputRef = useRef() // La constante inputRef almacena una referencia al DOM que no tiene valor inicial.

    const setFocus = () => {
        inputRef.current.focus()
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                type="text" 
                placeholder="ingrese su nombre" 
                className="form-control"
                ref={inputRef}
            /> 

            <button className="btn btn-primary" onClick={setFocus}>
                Set focus
            </button>
        </>
    )
}


// Para poder enlazar nuestra referencia, por ejemplo, a nuestro input, se usa la propiedad ref
// Ahora nuestra variable inputRef tiene una referencia directa al input, gracias a la propiedad ref.

// conclusiones:
// useRef es un hook que permite la manipulación directa de elementos del DOM.
// useRef no usa el virtual DOM de react.
// Para enlazar useRef a un elemento HTML, dicho elemento debe tener la propiedad ref con el valor de la variable de referencia.
// useRef siempre regresa un objeto mutable con una única propiedad current.
// Puedes usar un useRef para hacer peticiones a API's de una manera más controlada, y no siempre dependiendo del servidor en producción.