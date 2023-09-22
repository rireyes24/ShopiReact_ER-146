import React from 'react'
import { Input } from 'antd';
import { useContext, useState, useRef } from 'react';
import { ShopiContext } from '../../context/AppContext.js';
import { useProductsByTitle } from '../../hooks/useProductsByTitle.js';

const FilterProducts = () => {

  const refProduct = useRef(null);

  const { apiProducts, search, setSearch } = useContext(ShopiContext);
  
  const [searchData, setSearchData] = useState([]);

  const { Search } = Input;  

  const valueSearch = (search) => {
    
  }

  const searchProduct = () => {
    setSearch(refProduct.current.input.value);               
  }  
    
  return (
    <>
      <Search 
        placeholder="Filtrar por Nombre..." 
        ref={refProduct}
        onChange={searchProduct}
        style={{ width: 200 }} 
      />     
    </>
  )
}

export { FilterProducts }