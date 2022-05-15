import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as C from './style'

export default function Menu() {
    const navigate = useNavigate()

    const handleLogout = (evt: any) => {
        evt.preventDefault()
        window.localStorage.removeItem('token')
        navigate('/signin')
    }

    return(
        <C.HeaderContainer>
            <h1>TodoApp</h1>
            <div>
                <C.HeaderBtnLink onClick={handleLogout}>Logout</C.HeaderBtnLink>
            </div>
        </C.HeaderContainer>
    )
}