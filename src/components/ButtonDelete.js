import styled from "styled-components";

const ButtonDelete = styled.button`
    width: 40px;
    height: 40px;    
    border-radius: 8px;
    border: 0;
    align-self: center;
    justify-self: center;   
    grid-column: 4 / 5;
    grid-row: 1 / 3;
    background-color: #e44a4a;
    font-size: var(--lg);
    font-weight: bold;
    line-height: 2.25rem;
    color: var(--white);
    display: grid;
    place-content: center;
    cursor: pointer;

    &:hover{
        background-color: #e47272;
        
    }

    &:active{
        background-color: #ce5353;
    }
`;

export { ButtonDelete }