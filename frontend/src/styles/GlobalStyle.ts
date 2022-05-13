import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: sans-serif;
    }
`
export const InputForm = styled.input`
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 2px;
`
export const Button = styled.button`
    padding: 8px 20px;
    border: 1px solid #ccc;
    font-weight: bold;
    color: #333;
    border-radius: 2px;
    cursor: pointer;
`
export const ButtonLink = styled(Button)`
    background-color: transparent;
    border: none;
    color: white;
`