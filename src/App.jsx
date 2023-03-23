import React from 'react'
import styled from 'styled-components';
import { HashRouter, Routes, Route} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { NavigatorBar } from './components/Yard_NavigatorBar';
import { LoginPage } from './components/LoginPage';
import { CreateAccount } from './components/CreateAccountPage';
import { AccountPage } from './components/AccountPage';
import './App.css'

function App() {
  
  const [onCategories, setOnCategories] = React.useState(false);
  const [onAddToCart, setOnAddToCart] = React.useState(false);

  const [addCart, setAddCart] = React.useState(0);

  const [addToCartID, setAddToCartID] = React.useState(0);
  const [addCardTrue, setAddCardTrue] = React.useState(false);

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
 
  return (
    <>
      <HashRouter>
      <NavigatorBar 
        onCategories={onCategories} 
        setOnCategories={setOnCategories}
        onAddToCart={onAddToCart}
        setOnAddToCart={setOnAddToCart}
        addCart={addCart}
      />
        <DivLoginPage>
          <Routes>          
            <Route path="/" element={<HomePage 
              onCategories={onCategories} 
              onAddToCart={onAddToCart}                      
              setAddToCartID={setAddToCartID}              
              addCardTrue={addCardTrue}
              setAddCardTrue={setAddCardTrue}
              addToCartID={addToCartID}
              addCart={addCart}
              setAddCart={setAddCart}
            />} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/create" element={<CreateAccount/>}/>
            <Route path="/account" element={<AccountPage/>}/>
            <Route path="/admin" element={<p></p>}/>
            <Route path="*" element={<p>Not Found</p>}/>
          </Routes>
        </DivLoginPage>
      </HashRouter>
    </>
  )
}

export default App
