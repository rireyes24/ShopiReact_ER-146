import React from 'react';
import { ProductCard } from '../../components/ProductCard';
import { Categories } from '../../components/Categories';
import { AddToCart } from '../../components/AddToCart';

const HomePage = (props) => {

    return(
       <>
            {props.onCategories && <Categories />}   

            <ProductCard                
                setAddToCartID={props.setAddToCartID}
                addCardTrue={props.addCardTrue}
                setAddCardTrue={props.setAddCardTrue}
                addToCartID={props.addToCartID}
                addCart={props.addCart} 
                setAddCart={props.setAddCart}
             />

            {props.onAddToCart && 
                <AddToCart addCart={props.addCart} />
            }
       </>
    );
}


export { HomePage };