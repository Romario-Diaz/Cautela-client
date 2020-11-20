import React, { useEffect, useState } from 'react'
import{ Link } from 'react-router-dom'
import ReportService from '../../../services/report.service'

const ListReports = ({match}) => {

    const [ reports, setReports] = useState([])

    useEffect(() => {
        async function myReports() {
            const result = await ReportService.getAllReports()
            console.log("los reportes : ", result)
            setReports(result.data)
        }

        myReports()
    },[])

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
                    <th>Codigo Reporte</th>
                    <th>Fecha Firma</th>
                    <th>Estado</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {reports.map((item) => 
                    <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.date}</td>
                        <td>{item.state}</td>
                        <td><button>Ver!!!</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
    )
}

export default ListReports 