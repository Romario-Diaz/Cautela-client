import React from 'react'
import {
    Link,
    useRouteMatch
} from 'react-router-dom'
import '../styles/title-desmo.css'

const TitleDesmo = ({counter}) => {

    let match = useRouteMatch()

    console.log("el matchhhh : ", match.url)

    return(
        <div className="title-container">
            <h2 className="title-panel">Solicitud Firma de desmovilizacion de Personal</h2>
            <p>{counter}</p>
            <Link to={`${match.url}/list`}>ver todo</Link>
        </div>

    )
}

export default TitleDesmo