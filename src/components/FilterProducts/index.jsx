import React from 'react'
import { Input } from 'antd';
import { useContext, useState, useRef } from 'react';
import { ShopiContext } from '../../context/AppContext.js';

const FilterProducts = () => {

  // const refProduct = useRef(null);

  // const { apiProducts } = useContext(ShopiContext);
  
  // const [search, setSearch] = useState('');
  // const [searchData, setSearchData] = useState([]);

  // const { Search } = Input;  

  // const valueSearch = (search) => {
    
  // }

  // const searchProduct = () => {
  //   setSearch(refProduct.current.value);               
  // }

  // console.log(search);
    
  // return (
  //   <>
  //     <Search 
  //       placeholder="Filtrar por Nombre..." 
  //       ref={refProduct}
  //       onSearch={searchProduct} 
  //       value={search}
  //       style={{ width: 200 }} 
  //     />     
  //   </>
  // )
}

export { FilterProducts }