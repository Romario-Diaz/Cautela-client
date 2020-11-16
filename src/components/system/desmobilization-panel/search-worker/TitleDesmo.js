import React from 'react'
import '../styles/title-desmo.css'

const TitleDesmo = ({counter}) => {
    return(
        <div className="title-container">
            <h2 className="title-panel">Solicitud Firma de desmovilizacion de Personal</h2>
            <p >{counter}</p>
        </div>

    )
}

export default TitleDesmo