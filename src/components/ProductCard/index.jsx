import React, { useContext, useState} from 'react';
import { ShopiContext } from '../../context/AppContext.js';
import { TableGrid, DivCard, ImageCard, H3Card, H4Card, ButtonAddCart } from './styled';
import { dataProducts } from '../../utils/dataProducts.js';
import './style.css';
import Item from 'antd/es/list/Item.js';

function ProductCard(){

    const { apiProducts, setProductDetail, setShowDetail } = useContext(ShopiContext);

    const { product, setProduct, darkMode,  } = React.useContext(ShopiContext);
    
    function addToCart(idCard){     
        const productIndex = apiProducts.findIndex(item => item.id === idCard);
        const newProduct = apiProducts[productIndex];
        return newProduct;        
    }

    // Al hacerle Click a Button AddToCart
    const handleClick = (productID) => {
        const boton = document.getElementById(productID);
        boton.style.background = 'gray';
        boton.disabled = true;

        setTimeout(() => {  

            // Verifico si hay algo en mi array, y su lo hay 
            // Verifico si este producto ya existe
            if(product.length === 0){
                setProduct([...product, addToCart(productID)]);
            } else {
                product.forEach(item => {
                    if(item.id === productID){                        
                        console.log('El producto ya esta agregado');
                    }else if(item.id !== productID){
                        setProduct([...product, addToCart(productID)]);
                    }
                });
            }                      
        }, 100);
    }

    //console.log(product);

    const productDetail = (idCard) => {
        const productIndex = apiProducts.findIndex(item => item.id === idCard);
        const newProduct = apiProducts[productIndex];
        setProductDetail(newProduct);
    }

    const darkModeH3 = `${darkMode ? 'white-h4' : 'dark-h4'}`;
   
    return(
        <>
            <h1 className={`${darkMode ? 'white-color' : 'dark-color'}`}>PRODUCTS</h1>
            <TableGrid>
                {apiProducts.map(product => (                    
                    <DivCard key={product.id}>
                        <ImageCard 
                            src={product.images[0]} 
                            alt={product.title} 
                            onClick={() => {
                                productDetail(product.id)
                                setShowDetail(true);
                            }} 
                        /> 
                        <H3Card className={`${darkMode ? 'white-color' : 'dark-color' }`}>$ {product.price}</H3Card>
                        <H4Card className={darkModeH3}>{product.title}</H4Card>
                        <ButtonAddCart id={product.id} onClick={() => handleClick(product.id)}><span className="button-add-card"></span></ButtonAddCart>                     
                    </DivCard>
                ))}
            </TableGrid>
        </>
    );
}

export { ProductCard };