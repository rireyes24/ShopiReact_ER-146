const getProductsByTitle = async (title) => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${title}`);
    const data = await response.json();

    return data;
}

export { getProductsByTitle }