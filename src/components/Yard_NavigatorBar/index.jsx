import React from 'react';
import { NavBar, ButtonMenu, ButtonCart } from './styled';
import './style.css';

function NavigatorBar(){
    return(
        <NavBar className="navbar">

            <ButtonMenu>
                <span className="icon-menu"></span>
            </ButtonMenu>

            <span className="icon-logo"></span>             

            <ButtonCart>            
                <span className="icon-cart"></span>
            </ButtonCart>

            {/* <a href="/" class="email-singin">Sing in</a>             */}

        </NavBar>
    );
}

export { NavigatorBar };