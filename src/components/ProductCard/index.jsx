import React from 'react';
import { TableGrid, DivCard, ImageCard, H3Card, H4Card, ButtonAddCart } from './styled';
import { dataProducts } from '../../utils/dataProducts.js';
import { dataProductsCart } from '../../utils/dataProductsCart';

function ProductCard({ addCardTrue, setAddCardTrue, setAddCart }){

    const imagesURL = 'https://res.cloudinary.com/dejj8n6g7/image/upload/v1679423980/YardSaleReact';
    
    function addToCart(idCard){   
        const product = [...dataProducts];     
        const productIndex = dataProducts.findIndex(item => item.id === idCard);
        const newProduct = product[productIndex];

        console.log(newProduct);
        return newProduct;        
    }

    React.useEffect(() => {
           
        setAddCardTrue(false);

    }, [addCardTrue])

    

    // Al hacerle Click a Button AddToCart
    const handleClick = (productID) => {
        setTimeout(() => {
            dataProductsCart.push(addToCart(productID))   
            setAddCart(dataProductsCart.length);
            setAddCardTrue(true);
        }, 100);
    }

    return(
        <>
            <h1>Card</h1>
            <TableGrid>
                {dataProducts.map(product => (
                    <DivCard key={product.name}>
                        <ImageCard src={`${imagesURL}/${product.image}`} alt={product.name} />                
                        <H3Card>$ {product.price}</H3Card>
                        <H4Card>{product.name}</H4Card>
                        <ButtonAddCart onClick={() => handleClick(product.id)}><span className="button-add-card"></span></ButtonAddCart>
                    </DivCard>
                ))}
            </TableGrid>
        </>
    );
}

export { ProductCard };