import styled from 'styled-components';

const NavBar = styled.nav`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 20% 60% 20%;    
    padding: 5px 15px;
    background-color: var(--white);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 4.68%);
    place-items: center;
    z-index: 5;
`;

const ButtonMenu = styled.button`
    width: 48px;
    height: 48px;
    display: grid;
    place-content: center;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    grid-column: 1 / 2;
`;

const ButtonCart = styled.button`
    width: 48px;
    height: 48px;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 30% 70%;  
    border: none;
    border-radius: 60px;
    background-color: transparent;
    cursor: pointer;
    grid-column: 3 / 4;    
`;

const GreenCircle = styled.div`
    width: 22px;
    height: 22px;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    align-self: center;
    justify-content: center;
    background-color: #00b400;
    border-radius: 40px;
    color: white;
    display: grid;    
    place-items: center;
    font-family: 'Quicksand', sans-serif;
`;

export { NavBar, ButtonMenu, ButtonCart, GreenCircle };