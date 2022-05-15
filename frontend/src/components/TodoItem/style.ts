import styled from "styled-components";

export const TodoItemContainer = styled.section`
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

    background-color: #333;
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