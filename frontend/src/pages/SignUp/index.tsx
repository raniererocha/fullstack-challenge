import React from 'react'
import {useNavigate} from 'react-router-dom'
import * as C from './style'

export default function SignUp() {

    const navigate = useNavigate()

    return(
        <C.SignUpContainer>
            <C.SignUpForm>
                <h1>Cadastro</h1>
                <C.SignUpInput type="text" placeholder="Nome" />
                <C.SignUpInput type="email" placeholder="Email" />
                <C.SignUpInput type="password" placeholder="Senha" />
                <C.SignUpInput type="password" placeholder="Confirmação da Senha" />
                <C.SignUpBtn>Cadastrar</C.SignUpBtn>
                <C.SignUpBtnLink onClick={ evt => {
                    evt.preventDefault()
                    navigate('/signin')
                } } >Já é cadastrado? Faça login!</C.SignUpBtnLink>
            </C.SignUpForm>
        </C.SignUpContainer>
    )
}