import React, { useState } from 'react'
import SearchWorker from './search-worker/SearchWorker'
import DesmoDocument from './pending-desmo/DesmoDocument'
import WorkerPhoto from './pending-desmo/WorkerPhoto'
import './styles/desmobilization-panel.css'


const MakeDesmobilizationPanel = () => {

    const [worker, setWorker] = useState([])
    const [idDesmo, setIdDesmo] = useState("")
    const [OfficersFirm, setOfficersFirm] = useState([])
    const [liderFirm, setLiderFirm] = useState()
    const [reasonRes, setReasonRes] = useState("")
    const [workerFirm, setWorkerFirm] = useState()

    return (
        <>
            <SearchWorker
                setWorker={setWorker}
                setIdDesmo={setIdDesmo}
                setOfficersFirm={setOfficersFirm}
                setLiderFirm={setLiderFirm}
                setReasonRes={setReasonRes}
                setWorkerFirm={setWorkerFirm}
            />

            <hr className="space-line" />

            {worker.length === 0 ?
                <h1>No se ha encontrado ningun trabalhador!!!</h1>
                :
                <div className="perfil-des-container">
                    <DesmoDocument
                        id={worker[0]._id}
                        name={worker[0].fullname}
                        position={worker[0].position}
                        dateEnd={worker[0].dateEnd}
                        code={worker[0].code}
                        area={worker[0].area}

                        OfficersFirm={OfficersFirm}
                        liderFirm={liderFirm}
                        reasonRes={reasonRes}
                        workerFirm={workerFirm}
                    />
                    <WorkerPhoto
                        name={worker[0].fullname}
                        perfil={worker[0].perfil}
                        idDesmo={idDesmo} />
                </div>
            }
        </>
    )
}

export default MakeDesmobilizationPanel