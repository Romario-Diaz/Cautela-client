import React, { useEffect, useState } from 'react'
import{ Link } from 'react-router-dom'
import ReportService from '../../../services/report.service'

import { Redirect } from 'react-router-dom'

import './reportStyle/list-report.css'

const ListReports = ({match}) => {

    const [ reports, setReports] = useState([])
    const [ redirect, setRedirect ] = useState(false)
    const [ idDesmo, setIdDesmo ] = useState()

    useEffect(() => {
        async function myReports() {
            const result = await ReportService.getAllReports()
            for(let i = 0; i < result.data.length; i++) {

                let res = new Date(result.data[i].date).toISOString().split("T")
                result.data[i].modifiedDate = res[0]
                console.log(result.data) 
            }

            console.log(result.data)
            setReports(result.data)
        }

        myReports()
    },[])

    const goToReport = (item) => {
        console.log("lo que pasamos : ", item._id)
        setIdDesmo(item._id)
        setRedirect(true)
    }

    return (
        <>
        <div className="title-container">
            <h1>Lista de reportes que alguna vez firme</h1>
            <Link to={`/admin_panel/desmobilization-panel/${match.params.codeOfficer}`}>Volver!!!</Link>
        </div>
        <hr />

        <table>
            <thead>
                <tr>
                    <th ><p className="text-table">Codigo Reporte</p></th>
                    <th>Fecha Firma</th>
                    <th>Estado</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {reports.map((item) => 
                    <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.modifiedDate}</td>

                        <td
                            className={item.state === "sin concluir" ? "pending" : "finished"}>
                            {item.state}
                        </td>
                        <td><button onClick={() => goToReport(item)}>Ver!!!</button></td>
                    </tr>
                )}
            </tbody>
        </table>
        {
            redirect && idDesmo? 
                <Redirect to={`/admin_panel/reports/${idDesmo}`}/>
            :
                <p></p>
        }

    </>
    )
}

export default ListReports 