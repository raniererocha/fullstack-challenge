import styled from "styled-components";
import {Button, ButtonLink, InputForm} from '../../styles/GlobalStyle'

export const Container = styled.section`
    width: 100vw;   
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #3d3d3d;
`
export const Form = styled.form`
    width: 250px;
    max-width: 80%;
    gap: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1 {
        color: white;
        font-size: 2.2rem;
    }
`
export const BtnLogin = styled(Button)`
    
`
export const BtnLink = styled(ButtonLink) `

`
export const LoginInputForm = styled(InputForm) `
`