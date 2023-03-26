import styled from 'styled-components';
import './style.css'

const TableGrid = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 182px);   
    place-content: center; 
    gap: 34px;
    margin-top: 32px;    
    margin-bottom: 200px;  
`;

const DivCard = styled.div`
    background-color: transparent;
    width: 180px;
    height: 240px; 
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 76% 4% 10% 10%;
    margin: 5px;
`;

const ImageCard = styled.img`
    width: 100%;
    height: 100%;
    grid-column: 1 / 3;
    object-fit: cover;
    border-radius: 20px;
    overflow: hidden;    
`;

const H3Card = styled.h3`
    width: 100%;
    height: 100%;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    display: grid;
    align-items: center;
    font-size: var(--md);
    font-family: 'Roboto', sans-serif;        
    letter-spacing: 1px;
`;

const H4Card = styled.h4`
    width: 100%;
    height: 100%;
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    display: grid;
    align-items: center;
    font-size: var(--sm);
    font-weight: 400;
    font-family: 'Quicksand', sans-serif;    
    letter-spacing: 1px;
`;

const ButtonAddCart = styled.button`
    border: none;
    background-color: transparent;
    grid-column: 2 / 3;
    grid-row: 3 / 5;
    justify-self: center;
    align-self: center;
    width: 44px;
    height: 44px;       
    display: grid;
    place-content: center;
    cursor: pointer;
    background-color: var( --hospital_green);
    border-radius: 50px;

    &:hover{
        background-color: #979797;
    }
`;

export { TableGrid, DivCard, ImageCard, H3Card, H4Card, ButtonAddCart };