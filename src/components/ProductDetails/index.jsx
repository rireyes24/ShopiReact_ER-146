import React, { useContext, useState} from 'react';
import { ShopiContext } from '../../context/AppContext.js';
import styled from "styled-components";
import { useProductsDetails } from '../../hooks/useProductsDetails.js';
import { ImageCard } from '../Card';
import { ButtonBuy } from '../ButtonBuy';


const Container = styled.div` 
    position: absolute;   
    align-self: flex-end;   
    justify-self: flex-start;
    top: 0;    
    width: 320px;
    height: 680px;
    max-width: 375px;    
    border-radius: 20px;
    background-color: var(--white-secondary);
    padding: 20px 10px;
    display: grid;
    grid-template-rows: 40% repeat(6, 10%);
    place-items: center;
    justify-content: center;
    align-items: center;    
    z-index: 2;
    box-shadow: -4px 4px 4px 0 rgba(0, 0, 0, 20.68%);
    z-index: 5;
    border-radius: 0px 0px 0px 20px;
    place-items: center;
    justify-items: center;
`;

const Button = styled.button`
    width: 80%;
    height: 40px;
    border: none;
    box-shadow: -4px 4px 4px 0 rgba(0, 0, 0, 20.68%);
    border-radius: 8px;
`;

const ProductDetails = () => {
    
    const { detailProduct, setShowDetail } = useContext(ShopiContext);

    return(
        <Container>
            <ImageCard 
                src={detailProduct.images[0]}
                style={{
                    width: '280px',
                }}
            />
            <h1>{detailProduct.title}</h1>
            <h2>{detailProduct.price}</h2>
            <h3>{detailProduct.description}</h3>
           
            <ButtonBuy
                style={{
                    gridColumn: '1 / 2', 
                    gridRow: '6 / 7',
                }}
            >COMPRAR</ButtonBuy>

             <ButtonBuy 
                onClick={() => setShowDetail(false)}
                style={{
                    backgroundColor: 'red',
                    gridColumn: '1 / 2', 
                    gridRow: '7 / 8',
                }}
            >CLOSE</ButtonBuy>

        </Container>
    );
}

export { ProductDetails }