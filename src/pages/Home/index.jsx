import React from 'react';
import { ProductCard } from '../../components/ProductCard';
import { Categories } from '../../components/Categories';
import { AddToCart } from '../../components/AddToCart';
import { CreateContext } from '../../context/AppContext.js'

const HomePage = () => {

    const { onCategories, onAddToCart } = React.useContext(CreateContext);

    return(
       <>
            {onCategories && <Categories />}   

            <ProductCard />

            {onAddToCart && <AddToCart />}
       </>
    );
}


export { HomePage };