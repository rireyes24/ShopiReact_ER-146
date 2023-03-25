import React from 'react';
import { NavBar, ButtonMenu, DivUserCart, ButtonCart, GreenCircle } from './styled';
import './style.css';
import { CreateContext } from '../../context/AppContext';

function NavigatorBar(){

    const {
        onCategories,
        setOnCategories,
        onAddToCart, 
        setOnAddToCart,          
        userName
    } = React.useContext(CreateContext)
    

    return(
        <NavBar className="navbar">

            <ButtonMenu onClick={() => setOnCategories(!onCategories)}>
                <span className="icon-menu"></span>
            </ButtonMenu>

            <span className="icon-logo"></span> 

            <DivUserCart>
                <p>{userName}</p>            

                <ButtonCart onClick={() => setOnAddToCart(!onAddToCart)}>            
                    <span className="icon-cart"></span>
                    <GreenCircle><p></p></GreenCircle>
                </ButtonCart>
            </DivUserCart>
            

            {/* <a href="/" class="email-singin">Sing in</a>             */}

        </NavBar>
    );
}

export { NavigatorBar };