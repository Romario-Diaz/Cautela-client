import React from 'react'
import DesmobilizationService from '../../../../services/desmobilization.service'
import '../styles/worker-photo.css'

const WorkerPhoto = ({name, perfil, idDesmo, rrhh, setDesmobilizaciones, desmobilizaciones, codeOfficer, setLoading, setWorker, setModalOpen}) => {

    const sendDocumentToOfficers = () => {
        setLoading(true)
        DesmobilizationService.sendDocumentToOfficers(name, perfil, idDesmo, codeOfficer).then((result) => {
            console.log("el resultado : ", result)
            setWorker([])
            setLoading(false)
            // window.location.href="/admin_panel/make-desmobilization-panel"
        })
    }

    const firmDocument = () => {
        DesmobilizationService.firmDocument(codeOfficer, idDesmo).then((result) => {
            // if(modal === true) {
            //     console.log("no muestres nada ")
            // }else {
                const filtredData = desmobilizaciones.filter(item => item._id !== idDesmo)
                setDesmobilizaciones(filtredData)
                setModalOpen(false)
                DesmobilizationService.addReportCount(1);
            // }

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
        </>
    )
}

export default WorkerPhoto