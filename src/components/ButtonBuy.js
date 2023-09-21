import styled from "styled-components";

const ButtonBuy = styled.button`
    width: 100%;
    height: 54px;    
    border-radius: 10px;
    border: 0;
    margin-top: 10px;
    background-color: var(--hospital_green);
    font-size: var(--lg);
    font-weight: bold;
    line-height: 2.25rem;
    color: var(--white);
    display: grid;
    place-content: center;
    cursor: pointer;

    &:hover{
        background-color: #979797;
    }
`;

export { ButtonBuy }