import React from 'react';
import { NavBar, ButtonMenu, DivUserCart, ButtonCart, GreenCircle, ButtonDarkMode } from './styled';
import './style.css';
import { ShopiContext } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';

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
    } = React.useContext(ShopiContext)
    
    return(
        <NavBar className={`navbar ${darkMode ? 'dark' : 'white'}`} >

            <ButtonMenu onClick={() => setOnCategories(!onCategories)}>
                <span className="icon-menu"></span>
            </ButtonMenu>

            <NavLink className="icon-logo" to={'/home'}></NavLink> 

            <DivUserCart>
                <ButtonDarkMode onClick={() =>  setDarkMode(!darkMode)}>
                    <span className={`theme-logo ${darkMode ? 'theme-light' : 'theme-dark'}`}></span>
                </ButtonDarkMode>

                <NavLink to={'/login'} style={{textDecoration: 'none'}}>{userName}</NavLink>

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