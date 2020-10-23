import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar({ navigation }) {
    return (
        <header className="navbar-containers">
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">Firmas Automaticas</Link>
                </div>
                <ul className="list-group">
                    <li className="list">
                        <Link to="login" className="list-item">
                            Ingresar
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar