import styled from 'styled-components';

const NavBar = styled.nav`
    width: 100%;
    height: 8vh;
    display: grid;
    grid-template-columns: 20% 60% 20%;
    padding: 5px 15px;
    background-color: var(--white);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 4.68%);
    place-items: center;
`;

const ButtonMenu = styled.button`
    width: 40px;
    height: 40px;
    display: grid;
    place-content: center;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    grid-column: 1 / 2;
`;

const ButtonCart = styled.button`
    width: 40px;
    height: 40px;
    display: grid;
    place-content: center;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    grid-column: 3 / 4;    
`;

export { NavBar, ButtonMenu, ButtonCart };