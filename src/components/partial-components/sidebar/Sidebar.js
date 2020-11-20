import React from 'react'
import { Link } from 'react-router-dom'
import LinkReports from './LinkReports'
import './sidebar.css'

function Sidebar({ areaUserOfficer, views }) {
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-header">
                    <img src={'http://localhost:8000/statics/user.png'} alt="" />
                    <p className="areaOffice">{areaUserOfficer}</p>
                </div>
                <div>
                    <ul>
                        {views.map((viewer) =>
                            <li className="sidebar-list" key={viewer.view}>
                                <Link to={`${viewer.url}`} className="sidebar-item"><span className="sidebar-item-text">{viewer.view}</span> </Link>
                            </li>
                        )}
                        <li className="sidebar-list">
                            <LinkReports 
                            nameUrl="Reportes"
                            // countReports={countReports}
                            // setCountReports={setCountReports}
                            />
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar