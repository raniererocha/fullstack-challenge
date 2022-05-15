import styled from "styled-components";

import {Container, Form, LoginInputForm, BtnLogin} from '../Login/style'

export const HomeContainer = styled(Container)`
    flex-direction : column;
    align-items: center;
    justify-content: flex-start;
`
export const HomeAddItem = styled.button`
    width: 3rem;
    height: 3rem;
    border: .2rem solid #ccc;
    background-color: #333;
    color: #ccc;
    border-radius: 50%;
    font-size: 2rem;
    font-weight: bold;
    margin-top: 1rem;
    cursor: pointer;
`
export const HomeForm = styled(Form)`
    background-color: #3d3d3d;
    width: 500px;
    max-width: 80%;
    padding: .5rem;
`
export const HomeInputForm = styled(LoginInputForm)`

`
export const HomeBtn = styled(BtnLogin)`

`