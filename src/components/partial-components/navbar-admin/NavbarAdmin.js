import React from 'react'
import { Link } from 'react-router-dom'
import './navbar-admin.css'

function NavbarAdmin({ nameUserOfficer }) {
    return (
        <header className="navbar-container">
            <nav className="navbar">
                <div className="logo">
                </div>
                <ul className="list-group">
                    <li className="list">
                        <Link to="./login" className="list-item">{nameUserOfficer}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavbarAdmin