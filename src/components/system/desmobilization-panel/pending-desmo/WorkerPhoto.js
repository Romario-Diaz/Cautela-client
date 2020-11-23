import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import DesmobilizationService from '../../../../services/desmobilization.service'
import '../styles/worker-photo.css'

const WorkerPhoto = ({name, perfil, idDesmo, rrhh, codeOfficer, setLoading, setWorker, setModalOpen, modal}) => {

    const [redirect, setRedirect] = useState(false)
    const [idReport, setIdReport] = useState("")

    const sendDocumentToOfficers = () => {
        setLoading(true)
        DesmobilizationService.sendDocumentToOfficers(name, perfil, idDesmo, codeOfficer).then((result) => {
            setWorker([])
            setLoading(false)
        })
    }

    const firmDocument = () => {
        DesmobilizationService.firmDocument(codeOfficer, idDesmo).then((result) => {
            console.log("el resultado del reporrrrrrrttt", result.data._id)
                setIdReport(result.data._id)
                setRedirect(true)
            
        })
    }

    return (
        <>
            <div className="perfil-container">
                <div className="image-container">
                    <img src={perfil} className="image-perfil" alt="" />
                </div>
                <p className="name-user">{name}</p>
                <div className="buttons-container">
                    <div className="">
                        {rrhh === true ?
                            <button className="button" onClick={sendDocumentToOfficers}>Enviar Documento</button> 
                            :
                            <button className="button" onClick={firmDocument}>Firmar</button>
                        } 
                    </div>
                </div>
            </div>

            {
                redirect ? 
                   
                    <Redirect to={`/admin_panel/reports/${idReport}`}/>
                :
                <p></p>
            }

        </>
    )
}

export default WorkerPhoto