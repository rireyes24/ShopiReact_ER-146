import React from 'react';
import { NavBar, ButtonMenu, DivUserCart, ButtonCart, GreenCircle, ButtonDarkMode } from './styled';
import './style.css';
import { CreateContext } from '../../context/AppContext';

function NavigatorBar(){

    const {
        onCategories,
        setOnCategories,
        onAddToCart, 
        setOnAddToCart,          
        userName,
        product,
        darkMode, 
        setDarkMode,
    } = React.useContext(CreateContext)
    
    return(
        <NavBar className={`navbar ${darkMode ? 'dark' : 'white'}`} >

            <ButtonMenu onClick={() => setOnCategories(!onCategories)}>
                <span className="icon-menu"></span>
            </ButtonMenu>

            <span className="icon-logo"></span> 

            <DivUserCart>
                <ButtonDarkMode onClick={() =>  setDarkMode(!darkMode)}>
                    <span className={`theme-logo ${darkMode ? 'theme-light' : 'theme-dark'}`}></span>
                </ButtonDarkMode>

                <p>{userName}</p>            

                <ButtonCart onClick={() => setOnAddToCart(!onAddToCart)}>            
                    <span className="icon-cart"></span>
                    <GreenCircle><p>{product.length}</p></GreenCircle>
                </ButtonCart>
            </DivUserCart>
            

            {/* <a href="/" class="email-singin">Sing in</a>             */}

        </NavBar>
    );
}

export { NavigatorBar };