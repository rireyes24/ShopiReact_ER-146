import styled from 'styled-components';
import './style.css'

const DivCard = styled.div`
    background-color: transparent;
    width: 180px;
    height: 240px; 
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 76% 12% 12%;
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
    grid-row: 2 / 3;
    display: grid;
    align-items: center;
    font-size: 16px;
    letter-spacing: 1px;
`;

const H4Card = styled.h4`
    width: 100%;
    height: 100%;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    display: grid;
    align-items: center;
    font-size: 14px;
    letter-spacing: 1px;
`;

const ButtonAddCart = styled.button`
    border: none;
    background-color: transparent;
    grid-column: 2 / 3;
    grid-row: 2 / 4;
    justify-self: center;
    align-self: center;
    width: 48px;
    height: 48px;       
    display: grid;
    place-content: center;
    cursor: pointer;
`;

export { DivCard, ImageCard, H3Card, H4Card, ButtonAddCart };