import React, {useState, useEffect} from "react"
import {useNavigate} from 'react-router-dom'
import { api } from "../../assets/api"

import * as C from './style'

export default function Login() {

    
    const [emailInput, setEmailInput] = useState<string>('')
    const [passwordInput, setPasswordInput] = useState<string>('')
    
    const navigate = useNavigate()
    
    useEffect( () => {
        window.localStorage.getItem('token') ? navigate('/') : ''
    }, [])
    
    const handleLogin = async (evt: any) => {
        evt.preventDefault()
        try {
           const {data} = await api.post('/signin', {email: emailInput, password: passwordInput})
           const {name, token} = data
           window.localStorage.setItem('token', token)
           window.localStorage.setItem('userInfo', name)
           navigate('/')
        } catch (error: any) {
            alert(error.response.data.message)
        }
    }

    return(
        <C.Container>
            <C.Form>
                <h1>Login</h1>
                <C.LoginInputForm type="email" onChange={evt => setEmailInput(evt.target.value)} placeholder="Email"/>
                <C.LoginInputForm type="password" value={passwordInput} onChange={evt => setPasswordInput(evt.target.value)}  placeholder="Senha" />
                <div>
                    <C.BtnLogin onClick={handleLogin} >Login</C.BtnLogin>
                    <C.BtnLink onClick={ evt => {
                        evt.preventDefault()
                        navigate('/signup')
                    } }>Cadastre-se</C.BtnLink>
                </div>
            </C.Form>
        </C.Container>
    )
}