import React from 'react';
import styled from 'styled-components';

import { DivLogin, DivCard, ImageCard, H3Card, H4Card } from './styled';
import { dataProducts } from '../../utils/dataProducts.js';
import { dataProductsCart } from '../../utils/dataProductsCart.js';


const DivInfoProducts = styled.div`
    background-color: #bebebe;
    width: 90%;
    height: 80px; 
    display: grid;
    grid-template-columns: 80% 20%; 
    grid-template-rows: 50% 50%; 
    place-items: center;
    margin: 5px;
    border-radius: 20px;
`;

const PDate = styled.p`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    font-size: var(--md);
    font-weight: bold;
    line-height: 2rem;
    color: var(--black);
`;

const PArticles = styled.p`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    font-size: var(--sm);
    font-weight: 400;
    line-height: 1.7rem;
    color: #797979;  
`;

const PPrice = styled.p`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    font-size: var(--md);
    font-weight: bold;
    line-height: 1.87rem;
    color: #404040;
    justify-self: flex-start;
`;



function AddToCart({ addToCartID, addCardTrue, setAddCardTrue }){

    const imagesURL = 'https://res.cloudinary.com/dejj8n6g7/image/upload/v1679423980/YardSaleReact';

    const totalPice = dataProductsCart.map(price => price.price);
    //const priceTotal = totalPice.reduce((a, b) => { return a + b || 1});

    const modArray = Math.random();
    console.log(modArray);

    return(
        <>
            <h2>My Order</h2>            
            <DivLogin>  

                <DivInfoProducts>                    
                    <PDate>04.25.2021</PDate>
                    <PArticles>{dataProductsCart.length} articles</PArticles>                          
                    <PPrice>$ </PPrice>
                </DivInfoProducts>

                {dataProductsCart.map(product => (
                <DivCard key={Math.random()}>
                    <ImageCard src={`${imagesURL}/${product.image}`} alt={product.name} />                
                    <H3Card>$ {product.price}</H3Card>
                    <H4Card>{product.name}</H4Card>                        
                </DivCard>
                ))}                                  

            </DivLogin>  
        </>
    );
}

export { AddToCart };

