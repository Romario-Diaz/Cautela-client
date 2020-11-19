import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DesmoOne from './DesmoOne'
import ModalContainer from '../../partial-components/modal/ModalContainer'
import DesmobilizationService from '../../../services/desmobilization.service'
import "./styles/desmo-list.css"

const DesmoList = ({ match }) => {


    const [desmobilizaciones, setDesmobilizaciones] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [desmo, setDesmo] = useState()

    useEffect(() => {
        async function desmos() {
            const result = await DesmobilizationService.getAllDesmobilizations(match.params.codeOfficer)
            console.log("resulsss : ", result)
            setDesmobilizaciones(result.data)
        }
        desmos()
    }, [match.params.codeOfficer])

    const openModal = (myDesmo) => {
        console.log("abriendo el modal", myDesmo)
        setModalOpen(true)
        setDesmo(myDesmo)
    }

    return (
        <>
            <div className="title-container">
                <h1>Lista de las desmobilizaciones pendientes</h1>
                <Link to={`/admin_panel/desmobilization-panel/${match.params.codeOfficer}`}>Volver!!!</Link>
            </div>
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {desmobilizaciones.map((item) => 
                        <tr key={item.workers[0].code}>
                            <td>{item.workers[0].code}</td>
                            <td>{item.workers[0].fullname}</td>
                            <td> <button onClick={() => openModal(item)}>Ver !!!</button></td>
                        </tr>
                    )}
                </tbody>
            </table>

            <ModalContainer 
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                desmo={desmo} 
                match={match}
                desmobilizaciones={desmobilizaciones}
                setDesmobilizaciones={setDesmobilizaciones}
            />
        </>
    )
}

export default DesmoList