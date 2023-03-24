import React from 'react';
import { NavBar, ButtonMenu, ButtonCart, GreenCircle } from './styled';
import './style.css';

function NavigatorBar({onCategories, setOnCategories, onAddToCart, setOnAddToCart, addCart}){

    return(
        <NavBar className="navbar">

            <ButtonMenu onClick={() => setOnCategories(!onCategories)}>
                <span className="icon-menu"></span>
            </ButtonMenu>

            <span className="icon-logo"></span> 

            <p>User</p>            

            <ButtonCart onClick={() => setOnAddToCart(!onAddToCart)}>            
                <span className="icon-cart"></span>
                <GreenCircle><p>{addCart}</p></GreenCircle>
            </ButtonCart>

            {/* <a href="/" class="email-singin">Sing in</a>             */}

        </NavBar>
    );
}

export { NavigatorBar };