import React, { useEffect, useState } from 'react'
// import SearchWorker from './search-worker/SearchWorker'
// import DesmoDocument from './pending-desmo/DesmoDocument'
// import WorkerPhoto from './pending-desmo/WorkerPhoto'
import DesmobilizationService from '../../../services/desmobilization.service'
import './styles/desmobilization-panel.css'

const DesmobilizationPanel = () => {

    // const [worker, setWorker] = useState([])
    // const [idDesmo, setIdDesmo] = useState("")
    // const [OfficersFirm, setOfficersFirm] = useState([])
    // const [liderFirm, setLiderFirm] = useState()
    // const [reasonRes, setReasonRes] = useState("")
    // const [workerFirm, setWorkerFirm] = useState()

    useEffect(() => {
        console.log(`vamos a traer todas las desmobilizaciones !!!`)
        DesmobilizationService.getAllDesmobilizations().then((result) => {
            console.log("el resultadoooooo", result)
        })
    },[])

    return (
        <>
            <h1>Algo distinto!!!</h1>       
        </>
    )
}

export default DesmobilizationPanel