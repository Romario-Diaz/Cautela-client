import React from 'react'
import DesmobilizationService from '../../../../services/desmobilization.service'
import '../styles/worker-photo.css'

const WorkerPhoto = ({name, perfil, idDesmo}) => {

    const sendDocumentToOfficers = () => {
        console.log("se ha creado un documento", idDesmo)
        DesmobilizationService.newDesmobilizationDocument(name, perfil).then((result) => {
            console.log(`el resultado : ${result}`)
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
                        <button className="button" onClick={sendDocumentToOfficers}>Enviar Documento</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkerPhoto