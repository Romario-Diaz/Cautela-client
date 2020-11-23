import React, { useEffect, useState } from 'react'
import ReportService from '../../../services/report.service'
import './reportStyle/reports.css'

const Reports = ({ match }) => {


    const [report, setReport] = useState([])
    const [desmobilization, setDesmobilization] = useState([])
    const [worker, setWorker] = useState([])

    useEffect(() => {
        async function getReport() {
            const result = await ReportService.getOneReport(match.params.idReport)
            console.log(result.data)
            let res = new Date(result.data.report[0].date).toISOString().split("T")
            result.data.report[0].modifiedDate = res[0]
            setReport(result.data.report)
            setDesmobilization(result.data.desmo)
            setWorker(result.data.worker)
        }
        getReport()
    }, [match.params.idReport])

    return (
        <>
            {report.length > 0 && desmobilization.length > 0 && worker.length > 0 ?
                <>
                    <div className="header-report">
                        <h1 className="title-report">Desmobilizacion del personal</h1>
                        <span>{report[0].modifiedDate}</span>
                    </div>
                    <br />
                    <div className="body-report">
                        <h2>Desmobilizacion de {worker[0].fullname}</h2>
                        <br />
                        <p><strong>fecha de inicio : </strong>{worker[0].dateInit}</p>
                        <p><strong>fecha de cese : </strong>{worker[0].dateEnd}</p>

                        <br />
                        <br />

                        <p>{worker[0].fullname} ha concluido con su jornada laboral en la empresa OPOS SAC el dia
            {` ${worker[0].dateEnd}`} habiendo iniciado a trabaja a las instalaciones de la empresa
            con el cargo de {worker[0].position} en el area de {worker[0].area} desde el dia {` ${worker[0].dateInit}`}</p>

                        <br />
                        <p>Este documento hace prueba de que {worker[0].fullname} no debe ningun articulo o cualquier
            objeto que sea considerado patrimonio de la empresa OPOS, Confirmando este Hecho habiendo firmado este documento
            el dia {report[0].modifiedDate}</p>
                        <br />

                        <div className="img-container-report">
                            <img src="http://localhost:8000/firms/douglas-firm.png" alt="imagen" className="img-report"/>
                        </div>

                        <br />

                        <p>
                            este documento queda en evidencia la conformidad de esta desmobilizacion
                        </p>
                    </div>
                    <br />
                    <div className="footer-report">
                        <div className="fotter-options">
                            <a target="__blank" href="http://localhost:8000/files/auto.pdf">Descargar pdf!!!</a>
                            <br />
                        </div>
                        <br />
                        <br />
                        <br />
                    </div>
                </>
                :
                <p>wait for it</p>
            }
        </>
    )
}

export default Reports