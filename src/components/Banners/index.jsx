import React from 'react';
import styled from 'styled-components'
import './styled.css'

const DivBanner = styled.div`
    width: 100%;
    height: 28vh;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    margin-bottom: 30px;
`;

const ImageBanner = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    z-index: 1;
`;

const ButtonMoveBaner = styled.button`
    width: 80px;
    height: 100%;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    z-index: 3;
    align-self: center;
    background-color: transparent;
    border: none;
    display: grid;

    &:hover{
        background-color: #1b1b1b85;
    }
`;

function Banners(){
    return(
        <DivBanner>            
            <ButtonMoveBaner style={{justifySelf: 'flex-start'}}><div className="arrow arrow-left"></div></ButtonMoveBaner>
            <ImageBanner src="https://res.cloudinary.com/dejj8n6g7/image/upload/v1679771764/YardSaleReact/banner_j0imxi.jpg" />
            <ButtonMoveBaner style={{justifySelf: 'flex-end'}}><div className="arrow arrow-right"></div></ButtonMoveBaner>
        </DivBanner>
    );
}

export { Banners };