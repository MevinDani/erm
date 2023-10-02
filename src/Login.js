import React, { useState } from 'react'
import './Login.css'
import baseUrl from './baseurl'
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const company_code = localStorage.getItem("cmpcode")
    const pKey = localStorage.getItem("privatek")

    const loginCall = async () => {
        try {
            const loginData = await fetch(baseUrl + `loginuser?user=${username}&pass=${password}&cmpcode=${company_code}&guid=${pKey}`)
            const data = await loginData.json()
            console.log(data.result1.value[0].Userlogin)
            if (data && data.result1.value[0].Userlogin === "Sucess") {
                alert("successfull login")
            } else if (data && data.result1.value[0].Userlogin === "Failed") {
                alert("invalid username/password")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogin = (e) => {
        e.preventDefault()
        if (username && password) {
            loginCall()
        } else {
            alert("username/password cant be empty")
        }
    }

    return (
        <div className='container'>
            <h2>Admin Login</h2>
            <div className='formContainer'>
                <form>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username' />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' />
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login