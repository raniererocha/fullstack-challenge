import React, {useState, useEffect} from "react"
import {useNavigate} from 'react-router-dom'
import { api } from "../../assets/api"
import { getItem } from "../../assets/localStorage"

import * as C from './style'

export default function Login() {

    const [emailInput, setEmailInput] = useState<string>('')
    const [passwordInput, setPasswordInput] = useState<string>('')

    const navigate = useNavigate()

    return(
        <C.Container>
            <C.Form onSubmit={
                async (evt) => {
                    evt.preventDefault()
                    try {
                       await api.post('/signin', {email: emailInput, password: passwordInput})
                    } catch ({message}) {
                        alert(message)
                    }
                }
            }>
                <h1>Login</h1>
                <C.LoginInputForm type="email" onChange={evt => setEmailInput(evt.target.value)} placeholder="Email"/>
                <C.LoginInputForm type="password" value={passwordInput} onChange={evt => setPasswordInput(evt.target.value)}  placeholder="Senha" />
                <div>
                    <C.BtnLogin>Login</C.BtnLogin>
                    <C.BtnLink onClick={ evt => {
                        evt.preventDefault()
                        navigate('/signup')
                    } }>Cadastre-se</C.BtnLink>
                </div>
            </C.Form>
        </C.Container>
    )
}