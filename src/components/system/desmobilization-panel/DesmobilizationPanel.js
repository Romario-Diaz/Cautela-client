import React, { useEffect, useState } from 'react'
import { TouchBallLoading } from 'react-loadingg'
import TitleDesmo from './search-worker/TitleDesmo'
// import SearchWorker from './search-worker/SearchWorker'
import DesmoDocument from './pending-desmo/DesmoDocument'
import WorkerPhoto from './pending-desmo/WorkerPhoto'
import DesmobilizationService from '../../../services/desmobilization.service'
import './styles/desmobilization-panel.css'

// import React from 'react';
// import { TouchBallLoading } from 'react-loadingg';
// const Container = () => <TouchBallLoading />;
// export default Container;

const DesmobilizationPanel = ({match}) => {

    const [desmobilizaciones, setDesmobilizaciones] = useState([])

    useEffect(() => {
        async function desmos() {
            const result = await DesmobilizationService.getAllDesmobilizations(match.params.codeOfficer)
            setDesmobilizaciones(result.data)
        }
        desmos()
    }, [match.params.codeOfficer])

    return (
        <>
            <TitleDesmo
                counter={desmobilizaciones.length}
            />
            <hr className="space-line" />
            {
                desmobilizaciones.length === 0 ?
                    <h1>no may nadaa una</h1>
                    :
                    <div className="perfil-des-container">
                        <DesmoDocument
                            idDesmo={desmobilizaciones[desmobilizaciones.length - 1]._id}
                            name={desmobilizaciones[desmobilizaciones.length - 1].workers[0].fullname}
                            position={desmobilizaciones[desmobilizaciones.length - 1].workers[0].position}
                            dateEnd={desmobilizaciones[desmobilizaciones.length - 1].workers[0].dateEnd}
                            code={desmobilizaciones[desmobilizaciones.length - 1].workers[0].code}
                            area={desmobilizaciones[desmobilizaciones.length - 1].workers[0].area}
                            liderFirm={desmobilizaciones[desmobilizaciones.length - 1].liderFirm}
                            reasonRes={desmobilizaciones[desmobilizaciones.length - 1].reasonRes}
                            workerFirm={desmobilizaciones[desmobilizaciones.length - 1].workerFirm}
                            rrhh={false}
                        />
                        <WorkerPhoto
                            name={desmobilizaciones[desmobilizaciones.length - 1].workers[0].fullname}
                            perfil={desmobilizaciones[desmobilizaciones.length - 1].workers[0].perfil}
                            idDesmo={desmobilizaciones[desmobilizaciones.length - 1]._id}
                            rrhh={false}
                            setDesmobilizaciones={setDesmobilizaciones}
                            desmobilizaciones={desmobilizaciones}
                            codeOfficer={match.params.codeOfficer}
                        />
                    </div>
            }
        </>
    )
}

export default DesmobilizationPanel