import React from 'react';
import { DivLogin, DivCard, ImageCard, H3Card, H4Card, DivInfoProducts, PDate, PArticles, PPrice, PTotal, ButtonDelete } from './styled';
import { ShopiContext } from '../../context/AppContext';
import { ButtonBuy } from '../ButtonBuy';
import { useNavigate } from 'react-router-dom';
import './style.css'

function AddToCart(){

    const { product, setProduct, setProductLength, myOrders, setMyOrders } = React.useContext(ShopiContext);

    const price = product.map(price => price.price);
    const priceTotal = price.reduce((a, b) =>  a + b, 0);

    function deleteToCart(id){              
       
        const newProduct = product.filter(product => id !== product.id)
        setProduct(newProduct);   
        
        const boton = document.getElementById(id);
        boton.style.background = 'var( --hospital_green)';
        boton.disabled = false;       
    }
    

    const navigate = useNavigate();

    function goToOrder(){
        setMyOrders([...myOrders, { id: myOrders.length + 1, name: `Order ${myOrders.length + 1}`, order: [...product]}])
        setTimeout(()=> {            
            navigate('/orders/order');       
        }, 100);
    }

    console.log('ORDER: ', myOrders);
    
    return(
        <>
            <h2>My Order</h2>            
            <DivLogin>  

                {product.map(product => (
                    <DivCard key={product.id}>
                        <ImageCard src={product.images[0]} alt={product.title} />                
                        <H3Card>$ {product.price}</H3Card>
                        <H4Card>{product.tlite}</H4Card>  
                        <ButtonDelete type={'button'} onClick={() => deleteToCart(product.id)}><span className="button-delete"></span></ButtonDelete>                      
                    </DivCard>
                ))}          

                <DivInfoProducts>                    
                    <PDate>04.25.2021</PDate>
                    <PArticles>{product.length} articles</PArticles> 
                    <PTotal>Total: </PTotal>                         
                    <PPrice>$ {priceTotal}</PPrice>
                </DivInfoProducts>

                <ButtonBuy onClick={goToOrder}>BUY</ButtonBuy>                        

            </DivLogin>  
        </>
    );
}

export { AddToCart };

