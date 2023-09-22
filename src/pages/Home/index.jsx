import React from 'react';
import { ContainerCard } from '../../components/ContainerCards';
import { Categories } from '../../components/Categories';
import { AddToCart } from '../../components/AddToCart';
import { ShopiContext } from '../../context/AppContext.js';
import { Banners } from '../../components/Banners';
import { FilterProducts } from '../../components/FilterProducts';
import { ProductDetails } from '../../components/ProductDetails';

const HomePage = () => {

    const { onCategories, onAddToCart, showDetail } = React.useContext(ShopiContext);

    return(
       <>
            {onCategories && <Categories />}  

            <Banners />

            <FilterProducts />

            { showDetail ? <ProductDetails /> : <></>}

            <ContainerCard />

            {onAddToCart && <AddToCart />}
       </>
    );
}


export { HomePage };