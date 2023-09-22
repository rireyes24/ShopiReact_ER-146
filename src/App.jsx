import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { HashRouter, Routes, Route, useRoutes} from 'react-router-dom';
import { NavigatorBar } from './components/NavigatorBar';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Login';
import { ShopiContext } from './context/AppContext'
import { AccountPage } from './pages/Account';
import { AuthProvider } from './utils/authentication';
import { AuthRouter } from './utils/authentication';
import { CreateAccount } from './pages/CreateAccount'
import { getProducts } from './API/getProducts';
import { useProducts } from './hooks/useProducts';
import { useProductsByTitle } from './hooks/useProductsByTitle';
import { useProductsDetails } from './hooks/useProductsDetails';
import { MyOrder } from './pages/Order';
import { MyOrders } from './pages/Orders';
import { CategoriesPage } from './pages/Categories';

import './App.css'

const DivLoginPage = styled.div`
  position: relative;   
  top: 0%;
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  width: 100%;    
  display: flex;
  align-items: center; 
  flex-direction: column;
  justify-content: center;    
`;

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },    
    { path: '/home', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> }, 
    { path: '/create', element: <CreateAccount /> },
    { path: '/account', element: <AuthRouter> <AccountPage /> </AuthRouter> },
    { path: '/products/:id', element: <CategoriesPage></CategoriesPage> },
    { path: '/orders', element: <MyOrders></MyOrders> },
    { path: '/orders/order', element: <MyOrder></MyOrder> },
    { path: '/orders/order/:id', element: <MyOrder></MyOrder> },
    { path: '/admin', element: <h1>Aqui se Administra....</h1> },
    { path: '*', element: <h1>Not Found Che...</h1> },
  ]);

  return routes;
}


function App() {
  
  const [onCategories, setOnCategories] = React.useState(false);
  const [onAddToCart, setOnAddToCart] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  const [userName, setUserName] = React.useState('LOGIN');  

  const [product, setProduct] = React.useState([]);


  const [detailProduct, setProductDetail] = useState({images: ['']});
  const [showDetail, setShowDetail] = useState(false);

  const { apiProducts } = useProducts();

  
  const [search, setSearch] = useState(' ');
  

  //const { detailProduct, productDetail } = useProductsDetails();


  const [myOrders, setMyOrders] = useState([]);


  const [categoryID, setCategoryID] = useState(0);

  return (
    <>
      <ShopiContext.Provider 
        value={{
          onCategories,
          setOnCategories,
          onAddToCart,
          setOnAddToCart,          
          
          //AccountPage
          setUserName,
          userName,

          product,
          setProduct,

          darkMode, 
          setDarkMode,

          apiProducts,
          detailProduct,
          setProductDetail,
          setShowDetail,
          showDetail,
          //productDetail,

          myOrders, setMyOrders,

          search, setSearch,

          categoryID, setCategoryID
        }

        }
      >
        <HashRouter>
          <AuthProvider>
            <NavigatorBar/>
              <DivLoginPage className={`${darkMode ? 'dark' : 'white'}`}>
                <AppRoutes />      
              </DivLoginPage>
          </AuthProvider>                      
        </HashRouter>
      </ShopiContext.Provider>
    </>
  )
}

export default App
