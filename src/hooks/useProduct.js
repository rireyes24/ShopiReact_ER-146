import Search from "antd/es/input/Search";
import { useEffect, useState, useContext } from "react"
import { useProducts } from "./useProducts";
import { useProductsByTitle } from "./useProductsByTitle";

const useProduct = (search) => {

    const { apiProducts } = useProducts();
    const { productsByTitle } = useProductsByTitle(search);

    const [products, setProducts] = useState([]);

    useEffect(() => {    

        setProducts(apiProducts); 
        if(search !== ' ' && products !== false){
            setProducts(productsByTitle);
        } 
        
    }, [search, apiProducts])

    return { products }
}

export { useProduct }