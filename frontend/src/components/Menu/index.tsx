import React from 'react'
import * as C from './style'

export default function Menu() {
    return(
        <C.HeaderContainer>
            <h1>TodoApp</h1>
            <div>
                <C.HeaderBtnLink>Logout</C.HeaderBtnLink>
            </div>
        </C.HeaderContainer>
    )
}