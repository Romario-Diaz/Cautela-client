import React from 'react'
import { Link } from 'react-router-dom'
// import DesmobilizationService from '../../../services/desmobilization.service'

const LinkReports = ({nameUrl}) => {

    // const [countReports, setCountReports] = useState(0)

    // useEffect(() => {
    //     async function counter () {
    //         const counter_var = await DesmobilizationService.getReportCount(setCountReports, countReports)
    //         console.log("el counter varrrr:", counter_var)
    //         setCountReports(counter_var)
    //     } 

    //     counter()
    // },[countReports])

    console.log("la urlsss: " , nameUrl)

    return (
    <Link to={`/admin_panel/reports`} className="sidebar-item"><span className="sidebar-item-text">
        {nameUrl} 
        {/* {countReports > 0 ?
                <span className="counter-report"> {countReports}</span>   
            :
                <p></p>
        } */}
        </span> </Link>
    )
}

export default LinkReports