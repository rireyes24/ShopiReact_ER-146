import React from 'react'
import styled from 'styled-components';
import { HashRouter, Routes, Route} from 'react-router-dom';
import { NavigatorBar } from './components/NavigatorBar';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Login';
import { CreateAccount } from './pages/CreateAccount';
import { AccountPage } from './pages/Account';
import { AuthProvider } from './utils/authentication';
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
        <AuthProvider>
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
          </AuthProvider>
      </HashRouter>
    </>
  )
}

export default App
