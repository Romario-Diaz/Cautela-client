import React, { useEffect, useState } from 'react'

// import AuthService from '../../services/auth.service'
import UserService from '../../services/user.service'

import Sidebar from '../partial-components/sidebar/Sidebar'
import NavbarAdmin from '../partial-components/navbar-admin/NavbarAdmin'
import DesmobilizationPanel from './desmobilization-panel/DesmobilizationPanel'

// import './panel-admin.css'
function PanelAdmin() {

    const [userOfficerName, setUserOfficerName] = useState("")
    const [userOfficerArea, setUserOfficerArea] = useState("")

    useEffect(() => {
        async function getCurrentUser() {
            const userData = await UserService.getDataUser()
            await setUserOfficerName(userData.data[0].fullname)
            await setUserOfficerArea(userData.data[0].area)
        }
        getCurrentUser()
    }, [])

    return (
        <>
            <NavbarAdmin nameUserOfficer={userOfficerName} />
            <Sidebar areaUserOfficer={userOfficerArea}/>
            <DesmobilizationPanel />
        </>
    )
}

export default PanelAdmin