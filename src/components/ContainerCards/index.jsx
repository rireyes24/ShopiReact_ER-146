import React, { useContext, useState} from 'react';
import styled from 'styled-components';
import { ShopiContext } from '../../context/AppContext.js';
import { useProduct } from '../../hooks/useProduct.js';
import { ProductCard } from '../ProductCard.jsx';
import './style.css';

const TableGrid = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 182px);   
    place-content: center; 
    gap: 34px;
    margin-top: 32px;    
    margin-bottom: 200px;  
`;

function ContainerCard(){
   

    const { search } = useContext(ShopiContext);

    const { products } = useProduct(search);

    const { setProductDetail, setShowDetails, showDetails } = useContext(ShopiContext);

    const { product, setProduct, darkMode,  } = React.useContext(ShopiContext);
    
    function addToCart(idCard){     
        const productIndex = products.findIndex(item => item.id === idCard);
        const newProduct = products[productIndex];
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

    const productDetail = (idCard) => {
        const productIndex = products.findIndex(item => item.id === idCard);
        const newProduct = products[productIndex];
        setProductDetail(newProduct);
    }

   
    return(
        <>
            <h1 className={`${darkMode ? 'white-color' : 'dark-color'}`}>PRODUCTS</h1>
            <TableGrid>
                {products.map(product => ( 
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.images[0]}
                        title={product.title}
                        price={product.price}
                        darkMode={`${darkMode ? 'white-color' : 'dark-color' }`}  
                        darkModeTitle={`${darkMode ? 'white-h4' : 'dark-h4'}`}
                        productDetail={productDetail}                      
                        handleClick={handleClick}
                        setShowDetails={setShowDetails}
                        category={product.category.name.toUpperCase()}
                    />
                ))}
            </TableGrid>
        </>
    );
}

export { ContainerCard };