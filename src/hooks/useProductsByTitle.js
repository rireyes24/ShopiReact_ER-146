import { useEffect, useState } from "react";
import { getProductsByTitle } from "../API/getProductsByTitle";


const useProductsByTitle = (search) => {

    const [productsByTitle, setProductsByTitle] = useState([]);

    useEffect(() => {
        getProductsByTitle(search)
            .then(products => setProductsByTitle(products))
            .catch(error => console.error(error))
    }, [search])

    return { productsByTitle };
}

export { useProductsByTitle }



