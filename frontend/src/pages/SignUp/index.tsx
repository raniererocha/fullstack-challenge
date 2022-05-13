import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import * as C from './style'

export default function SignUp() {

    const [inputName, setInputName] = useState<string>('')
    const [inputEmail, setInputEmail] = useState<string>('')
    const [inputPassword, setInputPassword] = useState<string>('')
    const [inputCoPassword, setInputCoPassword] = useState<string>('')

    const navigate = useNavigate()

    const handleSingUp = async (evt) => {
        evt.preventDefault()
    }

    return(
        <C.SignUpContainer>
            <C.SignUpForm>
                <h1>Cadastro</h1>
                <C.SignUpInput 
                    type="text" 
                    placeholder="Nome" 
                    value={inputName}
                    onChange={ evt => setInputName(evt.target.value) }
                />
                <C.SignUpInput 
                    type="email" 
                    placeholder="Email" 
                    value={inputEmail}
                    onChange={ evt => setInputEmail(evt.target.value) }
                />
                <C.SignUpInput 
                    type="password" 
                    placeholder="Senha" 
                    value={inputPassword}
                    onChange={ evt => setInputPassword(evt.target.value) }
                />
                <C.SignUpInput 
                    type="password" 
                    placeholder="Confirmação da Senha" 
                    value={inputCoPassword}
                    onChange={ evt => setInputCoPassword(evt.target.value) }
                />
                <C.SignUpBtn onClick={ handleSignUp} >Cadastrar</C.SignUpBtn>
                <C.SignUpBtnLink onClick={ evt => {
                    evt.preventDefault()
                    navigate('/signin')
                } } >Já é cadastrado? Faça login!</C.SignUpBtnLink>
            </C.SignUpForm>
        </C.SignUpContainer>
    )
}