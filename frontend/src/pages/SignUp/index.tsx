import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { api } from '../../assets/api'
import Modal from '../../components/Modal'
import * as C from './style'

export default function SignUp() {

    const [errorModalIsOpen, setErrorModalIsOpen] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const [inputName, setInputName] = useState<string>('')
    const [inputEmail, setInputEmail] = useState<string>('')
    const [inputPassword, setInputPassword] = useState<string>('')
    const [inputCoPassword, setInputCoPassword] = useState<string>('')

    const navigate = useNavigate()

    useEffect( () => {
        window.localStorage.getItem('token') ? navigate('/') : ''
    }, [])

    const handleSingUp = async (evt: any) => {
        evt.preventDefault()
        const isSamePassword = inputPassword === inputCoPassword
        if (isSamePassword) {
            const userData = {
                name: inputName,
                email: inputEmail,
                password: inputPassword
            }
            try {
                const { data } = await api.post('/signup', userData) 
                const {name, token} = data
                window.localStorage.setItem('token', token)
                window.localStorage.setItem('userInfo', name)
                navigate('/')
            } catch (error: any) {
                setErrorMessage(error.response.data.message)
                setErrorModalIsOpen(true)
            }
        } else {
            setErrorMessage('Senha e Confirmação diferentes')
            setErrorModalIsOpen(true)
        }
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
                <C.SignUpBtn onClick={handleSingUp} >Cadastrar</C.SignUpBtn>
                <C.SignUpBtnLink onClick={ evt => {
                    evt.preventDefault()
                    navigate('/signin')
                } } >Já é cadastrado? Faça login!</C.SignUpBtnLink>
            </C.SignUpForm>
            {
                errorModalIsOpen && <Modal modalController={() => setErrorModalIsOpen(false)}>
                    <div style={{backgroundColor: '#ccc', padding: '2rem'}}>
                        <h1>Ops aconteceu um probleminha...</h1>
                        <p style={{marginTop: '1.5rem'}}>{errorMessage}</p>
                    </div>
                </Modal>
            }
        </C.SignUpContainer>
    )
}