import React, { useState } from 'react'
import desmobilizationService from '../../../../services/desmobilization.service'
import DesmobilizationService from '../../../../services/desmobilization.service'
import '../styles/search-worker.css'

const SearchWorker = ({ setWorker, setOfficersFirm, setLiderFirm, setReasonRes, setWorkerFirm }) => {

    const [dni, setDni] = useState()
    const [reason, setReason] = useState("RENUNCIA")
    const [id, setId] = useState(false)

    const findWorker = async () => {
        DesmobilizationService.findWorker(dni, reason).then((result) => {
            setWorker(result.data.worker)
            if (result.data.demobilization._id) {
                setId(result.data.demobilization._id)
                setOfficersFirm(result.data.demobilization.firmsOfficers)
                setLiderFirm(result.data.demobilization.liderFirm)
                setReasonRes(result.data.demobilization.reason)
                setWorkerFirm(result.data.demobilization.workerFirm)
            }
        })
    }

    const cancelDesmo = async () => {
        desmobilizationService.cancelDesmobilization(id).then(() => {
            window.location.href="/admin_panel"
        })
    }

    return (
        <>
            {id ?
                <p></p>
                :
                <h2 className="search-title">Crea un nuevo documento</h2>
            }
            <div className="search-container">
                {id ?
                    <h2>Usuario encontrado!!!</h2>
                    :
                    <div className="controllers-search">
                        <div className="search-box">
                            <label htmlFor="">DNI : </label>
                            <input type="text"
                                placeholder="Ingresa tu dni..."
                                onChange={(e) => setDni(e.target.value)} />
                        </div>

                        <div>
                            Motivo ? :
                                <select onChange={(e) => setReason(e.target.value)}>
                                <option value="RENUNCIA">RENUNCIA</option>
                                <option value="TERMINO DE CONTRATO">TERMINO DE CONTRATO</option>
                            </select>
                        </div>

                        <div className="search-box">
                            <button className="button" onClick={findWorker}>Buscar Trabajador</button>
                        </div>

                    </div>
                }
                {id ?
                    <div className="btn-cancel">
                        <button className="button" onClick={cancelDesmo}>Cancelar</button>
                    </div>
                    :
                    <p></p>
                }
            </div>
        </>
    )
}

export default SearchWorker