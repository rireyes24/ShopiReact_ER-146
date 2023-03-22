import React from 'react'
import { HashRouter, Routes, Route} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { NavigatorBar } from './components/Yard_NavigatorBar';
import { LoginPage } from './components/LoginPage';

import './App.css'

function App() {
 
  return (
    <>
      <HashRouter>
      <NavigatorBar />
        <Routes>          
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="*" element={<p>Not Found</p>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
