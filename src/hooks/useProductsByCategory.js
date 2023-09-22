import { useEffect, useState } from "react"
import { getProductsByCategory } from "../API/getProductsByCategory"

const useProductsByCategory = (categoryID) => {

    const [productsCategory, setProductsCategory] = useState([]);

    useEffect(() => {
        getProductsByCategory(categoryID)
            .then(products => setProductsCategory(products))
            .catch(error => console.error(error))
    }, [])

    return { productsCategory }
}

export { useProductsByCategory }