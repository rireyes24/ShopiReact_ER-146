import React from 'react'
import { HashRouter, Routes, Route} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { NavigatorBar } from './components/Yard_NavigatorBar';

import './App.css'

function App() {
 
  return (
    <>
      <HashRouter>
      <NavigatorBar />
        <Routes>          
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<p>Login</p>}/>
          <Route path="*" element={<p>Not Found</p>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
