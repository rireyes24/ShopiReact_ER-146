import React from 'react';
import { TableGrid, DivCard, ImageCard, H3Card, H4Card, ButtonAddCart } from './styled';
import { dataProducts } from '../../utils/dataProducts.js';


function ProductCard(){

    const imagesURL = 'https://res.cloudinary.com/dejj8n6g7/image/upload/v1679423980/YardSaleReact';

    return(
        <>
            <h1>Card</h1>
            <TableGrid>
                {dataProducts.map(product => (
                    <DivCard key={product.name}>
                        <ImageCard src={`${imagesURL}/${product.image}`} alt={product.name} />                
                        <H3Card>$ {product.price}</H3Card>
                        <H4Card>{product.name}</H4Card>
                        <ButtonAddCart><span className="button-add-card"></span></ButtonAddCart>
                    </DivCard>
                ))}
            </TableGrid>
        </>
    );
}

export { ProductCard };