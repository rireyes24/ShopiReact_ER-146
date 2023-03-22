import styled from 'styled-components';
import './style.css'

const DivLoginPage = styled.div`
    width: 100%;
    height: 92vh;    
    align-items: center;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
`;

const DivLogin = styled.div`    
    max-width: 375px;
    height: 600px;
    border-radius: 28px;
    background-color: #f0f0f0; 
    padding: 20px;
    display: grid;
    grid-template-rows: 16% 64% 20%;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
`;

const FormLogin = styled.form`
    width: 100%;
    height: 100%;
    grid-row: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const InputText = styled.input`
    width: 328px;
    height: 42px;    
    
    padding: 8px;
    border-radius: 10px;
    border: 0;
    background-color: var(--text_input_field);

    font-size: var(--sm);
    font-weight: 400;
    line-height: 2rem;
    color: #797979;
`;

const InputLabel = styled.label`
    width: 328px;
    margin-top: 20px;
    font-size: var(--sm);
    font-weight: bold;
    line-height: 1.75rem;
    color: var(--black);
`;

const ButtonLogin = styled.button`
    width: 328px;
    height: 52px;    
    border-radius: 10px;
    border: 0;
    margin-top: 32px;
    background-color: var(--hospital_green);
    font-size: var(--lg);
    font-weight: bold;
    line-height: 2.25rem;
    color: var(--white);
    display: grid;
    place-content: center;
    cursor: pointer;
`;

const Forgot = styled.a`
    font-size: var(--sm);
    font-weight: 500;
    color: var(--hospital_green);
    text-decoration: none; 
    text-align: center;  
`;

const ButtonSingUp = styled.button`
    width: 328px;
    height: 48px; 
    border-radius: 10px;
    border: 2px solid var(--hospital_green);
    background-color: var(--white);
    font-size: var(--lg);
    font-weight: bold;
    line-height: 2.25rem;
    color: var(--hospital_green);
    cursor: pointer;
    align-self: center;
    justify-self: center;
`;

export {DivLoginPage, DivLogin, FormLogin, InputText, InputLabel, ButtonLogin, Forgot, ButtonSingUp };