import React, { useState } from 'react' 
import Navbar from '../partial-components/navbar/Navbar'
import { Redirect } from 'react-router-dom'

import AuthService from '../../services/auth.service'

import './login.css'

const Login = () => {

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ redirect, setRedirect ] = useState(false)

    const login = async () => {
        AuthService.login(username, password).then((result) => {
            if(AuthService.getCurrentUser()) {
                setRedirect(true)
            }else {
                setRedirect(false)
            }
        })
    }

    return (
        <>
            <Navbar />
            <div className="container-login">
                <div className="login-all-body">
                    <h1 className="title">Login</h1>
                    <div className="form-group">
                         <input type="text" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="button-send-container">
                        <button className="button-send" onClick={login}>Ingresar</button>
                    </div>
                </div>
            </div>    
            {redirect ? <Redirect to="/admin_panel" /> : <Redirect to="/login" />}    
        </>

    )
}

export default Login