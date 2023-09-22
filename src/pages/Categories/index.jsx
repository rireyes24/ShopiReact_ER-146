import { useContext } from "react";
import styled from "styled-components";
import { ShopiContext } from "../../context/AppContext";
import { useProductsByCategory } from "../../hooks/useProductsByCategory";
import { H4Card } from "../../components/H4Card";
import { ProductCard } from "../../components/ProductCard";


const TableGrid = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 182px);   
    place-content: center; 
    gap: 34px;
    margin-top: 32px;    
    margin-bottom: 200px;  
`;


const CategoriesPage = () => {

    const { categoryID, darkMode } = useContext(ShopiContext);
    console.log(categoryID);
    const { productsCategory, setProductsCategory } = useProductsByCategory(categoryID);

    console.log(productsCategory);

    function addToCart(idCard){     
        const productIndex = products.findIndex(item => item.id === idCard);
        const newProduct = products[productIndex];
        return newProduct;        
    }

    // Al hacerle Click a Button AddToCart
    const handleClick = (productID) => {
        const boton = document.getElementById(productID);
        boton.style.background = 'gray';
        boton.disabled = true;

        setTimeout(() => {  
            // Verifico si hay algo en mi array, y su lo hay 
            // Verifico si este producto ya existe
            if(productsCategory.length === 0){
                setProductsCategory([...productsCategory, addToCart(productID)]);
            } else {
                productsCategory.forEach(item => {
                    if(item.id === productID){                        
                        console.log('El producto ya esta agregado');
                    }else if(item.id !== productID){
                        setProductsCategory([...productsCategory, addToCart(productID)]);
                    }
                });
            }                      
        }, 100);
    }

    const productDetail = (idCard) => {
        // const productIndex = products.findIndex(item => item.id === idCard);
        // const newProduct = products[productIndex];
        // setProductDetail(newProduct);
    }


    return(
        <>
            <TableGrid>
                {productsCategory.map(product => (                    
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.images[0]}
                        title={product.title}
                        price={product.price}
                        darkMode={`${darkMode ? 'white-color' : 'dark-color' }`}  
                        darkModeTitle={`${darkMode ? 'white-h4' : 'dark-h4'}`}
                        productDetail={productDetail}                      
                        handleClick={handleClick}
                        category={product.category.name.toUpperCase()}
                        // setShowDetails={setShowDetails}
                    />
                ))}
            </TableGrid>
        </>
    );
}


export { CategoriesPage }