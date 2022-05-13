import React, {useState} from "react"
import {useNavigate} from 'react-router-dom'

import * as C from './style'

export default function Login() {

    const [emailInput, setEmailInput] = useState<string>('')
    const [passwordInput, setPasswordInput] = useState<string>('')

    const navigate = useNavigate()

    return(
        <C.Container>
            <C.Form onSubmit={
                (evt) => {
                    evt.preventDefault()
                    console.log({
                        email: emailInput,
                        password: passwordInput
                    })
                }
            }>
                <h1>Login</h1>
                <C.InputForm type="email" onChange={evt => setEmailInput(evt.target.value)} placeholder="Email"/>
                
                <C.InputForm type="password" value={passwordInput} onChange={evt => setPasswordInput(evt.target.value)}  placeholder="Senha" />
                <div>
                    <C.Button>Login</C.Button>
                    <C.ButtonLink onClick={ evt => {
                        evt.preventDefault()
                        navigate('/signup')
                    } }>Cadastre-se</C.ButtonLink>
                </div>
            </C.Form>
        </C.Container>
    )
}