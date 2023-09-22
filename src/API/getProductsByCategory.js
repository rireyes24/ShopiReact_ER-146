const getProductsByCategory = async (id) => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${id}`);
    const data = await response.json();
    console.log(data);
    return data;
}


export { getProductsByCategory }
