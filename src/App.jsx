import React from 'react'
import styled from 'styled-components';
import { HashRouter, Routes, Route} from 'react-router-dom';
import { NavigatorBar } from './components/NavigatorBar';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Login';
import { CreateAccount } from './pages/CreateAccount';
import { AccountPage } from './pages/Account';
import { AuthProvider } from './utils/authentication';
import { AuthRouter } from './utils/authentication';
import { CreateContext } from './context/AppContext';

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


function App() {
  
  const [onCategories, setOnCategories] = React.useState(false);
  const [onAddToCart, setOnAddToCart] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  const [userName, setUserName] = React.useState('Login');  

  const [product, setProduct] = React.useState([]);

 

  return (
    <>
      <CreateContext.Provider 
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
        }

        }
      >
        <HashRouter>
          <AuthProvider>
            <NavigatorBar/>

              <DivLoginPage className={`${darkMode ? 'dark' : 'white'}`}>
                <Routes>          
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage/>}/>
                  <Route path="/create" element={<CreateAccount/>}/>
                  <Route 
                    path="/account" 
                    element={
                      <AuthRouter>
                        <AccountPage />
                      </AuthRouter>
                    }
                  />
                  <Route path="/admin" element={<p></p>}/>
                  <Route path="*" element={<p>Not Found</p>}/>
                </Routes>
              </DivLoginPage>
            </AuthProvider>
        </HashRouter>
      </CreateContext.Provider>
    </>
  )
}

export default App
