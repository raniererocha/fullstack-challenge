import styled from "styled-components";

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