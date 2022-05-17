import styled from "styled-components";

export const ModalContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
`
export const BtnClose = styled.button`
    background-color: transparent;
    color: #ccc;
    font-size: 4rem;
    border: none;
    position: absolute;
    top: 10px;
    right: 10px;
    transform: rotate(45deg);
`
