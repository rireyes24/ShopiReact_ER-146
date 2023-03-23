import React from 'react';
import { DivLogin, DivCard, ImageCard, H3Card, H4Card, DivInfoProducts, PDate, PArticles, PPrice, ButtonBuy } from './styled';
import { dataProductsCart } from '../../utils/dataProductsCart.js';


function AddToCart({ addCart }){

    const imagesURL = 'https://res.cloudinary.com/dejj8n6g7/image/upload/v1679423980/YardSaleReact';

    const price = dataProductsCart.map(price => price.price);
    const priceTotal = price.reduce((a, b) =>  a + b, 0);

    return(
        <>
            <h2>My Order</h2>            
            <DivLogin>  

                <DivInfoProducts>                    
                    <PDate>04.25.2021</PDate>
                    <PArticles>{addCart} articles</PArticles>                          
                    <PPrice>$ {priceTotal}</PPrice>
                </DivInfoProducts>

                {dataProductsCart.map(product => (
                <DivCard key={Math.random()}>
                    <ImageCard src={`${imagesURL}/${product.image}`} alt={product.name} />                
                    <H3Card>$ {product.price}</H3Card>
                    <H4Card>{product.name}</H4Card>                        
                </DivCard>
                ))}          

                <ButtonBuy>BUY</ButtonBuy>                        

            </DivLogin>  
        </>
    );
}

export { AddToCart };

