import React from 'react';
import { DivLogin, DivCard, ImageCard, H3Card, H4Card, DivInfoProducts, PDate, PArticles, PPrice, ButtonBuy, PTotal, ButtonDelete } from './styled';
import { CreateContext } from '../../context/AppContext';
import './style.css'

function AddToCart(){

    const { product, setProduct, setProductLength } = React.useContext(CreateContext);

    const imagesURL = 'https://res.cloudinary.com/dejj8n6g7/image/upload/v1679423980/YardSaleReact';
   
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

                {product.map(product => (
                <DivCard key={Math.random()}>
                    <ImageCard src={`${imagesURL}/${product.image}`} alt={product.name} />                
                    <H3Card>$ {product.price}</H3Card>
                    <H4Card>{product.name}</H4Card>  
                    <ButtonDelete type={'button'} onClick={() => deleteToCart(product.id)}><span class="button-delete"></span></ButtonDelete>                      
                </DivCard>
                ))}          

                <DivInfoProducts>                    
                    <PDate>04.25.2021</PDate>
                    <PArticles>{product.length} articles</PArticles> 
                    <PTotal>Total: </PTotal>                         
                    <PPrice>$ {priceTotal}</PPrice>
                </DivInfoProducts>

                <ButtonBuy>BUY</ButtonBuy>                        

            </DivLogin>  
        </>
    );
}

export { AddToCart };

