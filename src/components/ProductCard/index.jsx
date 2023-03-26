import React from 'react';
import { TableGrid, DivCard, ImageCard, H3Card, H4Card, ButtonAddCart } from './styled';
import { dataProducts } from '../../utils/dataProducts.js';
import { CreateContext } from '../../context/AppContext.js'
import './style.css';

function ProductCard(){

    const { product, setProduct, darkMode, } = React.useContext(CreateContext);

    const imagesURL = 'https://res.cloudinary.com/dejj8n6g7/image/upload/v1679423980/YardSaleReact';
    
    function addToCart(idCard){   
        const product = [...dataProducts];     
        const productIndex = dataProducts.findIndex(item => item.id === idCard);
        const newProduct = product[productIndex];                 
        return newProduct;        
    }


    // Al hacerle Click a Button AddToCart
    const handleClick = (productID) => {
        setTimeout(() => {            
            setProduct([...product, addToCart(productID)]);            
        }, 100);
    }

    const darkModeH3 = `${darkMode ? 'white-h4' : 'dark-h4'}`;
   
    return(
        <>
            <h1 className={`${darkMode ? 'white-color' : 'dark-color'}`}>PRODUCTS</h1>
            <TableGrid onClick={() => handleClickClose}>
                {dataProducts.map(product => (
                    <DivCard key={product.id}>
                        <ImageCard src={`${imagesURL}/${product.image}`} alt={product.name} />                
                        <H3Card className={`${darkMode ? 'white-color' : 'dark-color' }`}>$ {product.price}</H3Card>
                        <H4Card className={darkModeH3}>{product.name}</H4Card>
                        <ButtonAddCart onClick={() => handleClick(product.id)}><span className="button-add-card"></span></ButtonAddCart>
                    </DivCard>
                ))}
            </TableGrid>
        </>
    );
}

export { ProductCard };