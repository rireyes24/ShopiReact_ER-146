import React, { useContext, useState} from 'react';
import { ShopiContext } from '../../context/AppContext.js';
import styled from "styled-components";
import { useProductsDetails } from '../../hooks/useProductsDetails.js';
import { ImageCard } from '../Card';
import { ButtonBuy } from '../ButtonBuy';
import { H4Card } from '../H4Card.js';


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
    grid-template-rows: 40%  10% 20% repeat(3, 10%);
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


const ProductDetails = () => {
    
    const { detailProduct, setShowDetail } = useContext(ShopiContext);

    return(
        <Container>
            <ImageCard 
                src={detailProduct.images[0]}
                style={{
                    width: '90%',
                    gridColumn: '1 / 2'
                }}
            />
            <h1>{detailProduct.title}</h1>
            <h2 style={{
                gridColumn: '1 / 2'
            }}>Price: ${detailProduct.price}</h2>
            <H4Card style={{
                    width: '90%',
                    gridColumn: '1 / 2', 
                    gridRow: '3 / 4',
                }}
            >{detailProduct.description}</H4Card>
           
            <ButtonBuy
                style={{
                    width: '90%',
                    gridColumn: '1 / 2', 
                    gridRow: '6 / 7',
                }}
            >COMPRAR</ButtonBuy>

             <ButtonBuy 
                onClick={() => setShowDetail(false)}
                style={{
                    width: '90%',
                    backgroundColor: 'red',
                    gridColumn: '1 / 2', 
                    gridRow: '7 / 8',
                }}
            >CLOSE</ButtonBuy>

        </Container>
    );
}

export { ProductDetails }