import styled from "styled-components";
import {Form, LoginInputForm, BtnLogin} from '../../pages/Login/style'


interface ContainerProps {
    isAfter: boolean
    isComplete: boolean
}
export const TodoItemContainer = styled.section<ContainerProps>`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    gap: 10px;

    width: 350px;
    max-width: 80%;

    padding: .8rem 1.6rem;
    border-radius: 4px;

    color: #ccc;
    
    position: relative;
    div {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    h1 {
        width: 40%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    background-color: ${props => props.isAfter ? "#fa3939" : props.isComplete ? "#3f9e5a" : '#333'};
    box-shadow: 0 0 2px rgba(0,0,0,.5);
`
export const ButtonInfo = styled.button`

    position: absolute;
    top: calc(50% - 7.5px);
    right: 5px;

    height: 15px;
    width: 15px;

    font-weight: bold;
    font-style: italic;

    border: none;
    border-radius: 50%;
    
    background-color: rgba(255,255,255,.5);
    cursor: pointer;
    transition: background-color .5s ease-in;
    :hover {
        background-color: rgba(255,255,255,.8);
    }
`
export const Popover = styled.section`
    position: absolute;
    background-color: #ccc;
    top: calc(50% + 18px);
    padding: .6rem;
    right: 4px;
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 150;

    ::before {
        content: "";
        background-color: #ccc;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        position: absolute;
        top: -5px;
        right: 3.35px;
    }
`
export const EditeItemForm = styled(Form)`
background-color: #3d3d3d;
    width: 500px;
    max-width: 80%;
    padding: .5rem;
    p {
        color: #ccc;
        width: 80%;
        font-style: italic;
    }
`
export const EditeItemInput = styled(LoginInputForm)`
    
`
interface BtnEditeProps {
    isNegative?: boolean
}
export const BtnEditeItem = styled(BtnLogin)<BtnEditeProps>`
    ${props => props.isNegative ? "background-color: #fa3939; color: #ccc" : ""}
`