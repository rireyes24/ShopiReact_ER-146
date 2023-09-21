const getProducts = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products/?&offset=10&limit=20');
    const data = await response.json();
    //console.log(data);
    return data;
}


export { getProducts }


