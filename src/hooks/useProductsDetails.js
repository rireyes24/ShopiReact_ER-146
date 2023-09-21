import { useState } from "react";
import React, { useContext } from 'react';
import { ShopiContext } from "../context/AppContext";

const useProductsDetails = () => {

    const apiProducts = [{id:1}, {id:2}];
   //const { apiProducts } = useContext(ShopiContext);

   console.log(apiProducts);

    
   const [detailProduct, setProductDetail] = useState([]);

   const productDetail = (idCard) => {
       const productIndex = apiProducts.findIndex(item => item.id === idCard);
       const newProduct = apiProducts[productIndex];
       setProductDetail(newProduct);
   }

    return { detailProduct, productDetail };
}

export { useProductsDetails }