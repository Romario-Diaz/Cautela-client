import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DesmobilizationService from '../../../services/desmobilization.service'

const LinkReports = ({nameUrl}) => {

    const [countReports, setCountReports] = useState(0)

    useEffect(() => {
        async function counter () {
            const counter_var = await DesmobilizationService.addReportCount(countReports)
            setCountReports(counter_var)
        } 

        counter()
    },[countReports])

    return (
    <Link to={``} className="sidebar-item"><span className="sidebar-item-text">
        {nameUrl} 
        {countReports > 0 ?
                <span className="counter-report"> {countReports}</span>   
            :
                <p></p>
        }
        </span> </Link>
    )
}

export default LinkReports