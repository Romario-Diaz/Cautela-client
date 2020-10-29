import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

function Sidebar({ areaUserOfficer, views }) {
    console.log("las vistaassaaasa : ", views)
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-header">
                    <img src={require('../../../assets/images/user.png')} alt="" />
                    <p className="areaOffice">{areaUserOfficer}</p>
                </div>
                <div>
                    <ul>
                        {views.map((viewer) =>
                            <li className="sidebar-list" key={viewer.view}>
                                <Link to={viewer.url} className="sidebar-item"><span className="sidebar-item-text">{viewer.view}</span> </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar