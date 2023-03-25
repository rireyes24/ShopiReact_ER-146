import React from 'react';
import { DivLogin, DivCard, ImageCard, H3Card, H4Card, DivInfoProducts, PDate, PArticles, PPrice, ButtonBuy } from './styled';
import { dataProductsCart } from '../../utils/dataProductsCart.js';
import { CreateContext } from '../../context/AppContext';


function AddToCart(){

    const { product, setProduct } = React.useContext(CreateContext);

    const imagesURL = 'https://res.cloudinary.com/dejj8n6g7/image/upload/v1679423980/YardSaleReact';


    const lenghtProducts = product.length;
    const price = product.map(price => price.price);
    const priceTotal = price.reduce((a, b) =>  a + b, 0);

    function deleteToCart(id){                
        const cartIndex = product.findIndex(item => item.id === id);
        const productDelete = product[cartIndex];   
        
        if(productDelete.id === id){
            const newProduct = product.filter((product, i) => i !== cartIndex)
            setProduct(newProduct);
        }
    }


    return(
        <>
            <h2>My Order</h2>            
            <DivLogin>  

                <DivInfoProducts>                    
                    <PDate>04.25.2021</PDate>
                    <PArticles>{lenghtProducts} articles</PArticles>                          
                    <PPrice>$ {priceTotal}</PPrice>
                </DivInfoProducts>

                {product.map(product => (
                <DivCard key={Math.random()}>
                    <ImageCard src={`${imagesURL}/${product.image}`} alt={product.name} />                
                    <H3Card>$ {product.price}</H3Card>
                    <H4Card>{product.name}</H4Card>  
                    <button type={'button'} onClick={() => deleteToCart(product.id)}>X</button>                      
                </DivCard>
                ))}          

                <ButtonBuy>BUY</ButtonBuy>                        

            </DivLogin>  
        </>
    );
}

export { AddToCart };

