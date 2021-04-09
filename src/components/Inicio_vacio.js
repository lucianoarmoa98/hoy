import React, { useState} from 'react';
 
const Inicio_vacio = () => {
    const [counter, setCounter] = useState(0);
    console.log(setCounter);

    return (
    <div>
    <h1 className="inicio">Pagina de inicio</h1>
    <p className="inicio">Contenido vacio</p>
        <button onClick={() => setCounter(counter+1)}>
        incrementar
        </button>
        <h1>Numer: {counter} </h1>
    </div>
    );
};

export default Inicio_vacio; 
