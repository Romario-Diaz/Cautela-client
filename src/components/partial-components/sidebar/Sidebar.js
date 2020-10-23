import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

function Sidebar({areaUserOfficer}) {
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-header">
                    <img src={require('../../../assets/images/user.png')} alt="" />
                    <p className="areaOffice">{areaUserOfficer}</p>
                </div>
                <div>
                    <ul>
                        <li className="sidebar-list">
                            <Link to="#" className="sidebar-item"><span className="sidebar-item-text">Desmovilizacion</span> </Link>
                        </li>
                        <li className="sidebar-list">
                            <Link to="#" className="sidebar-item"><span className="sidebar-item-text">Cautela</span> </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar