import { useEffect, useState } from "react";
import { getProducts } from "../API/getProducts";

const useProducts = () => {

    const [apiProducts, setApiProducts] = useState([]);

    useEffect(() => {
      getProducts()
        .then(products => {
          setApiProducts(products);
        })
        .catch(error => {
          console.error(error);
        })
    }, [])
    
    return { apiProducts };  
}


export { useProducts }