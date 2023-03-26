import {useContext} from 'react';
import { CreateContext } from '../../context/AppContext.js';
import styled from 'styled-components';
import './style.css'

const DivCategories = styled.div`
    position: absolute;
    top: 0;
    align-self: flex-start;
    width: 28%;
    height: 652px;
    max-height: 92vh;    
    padding: 20px 0px;
    display: grid;
    grid-template-rows: 10% 50% 20% 20%;
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 20.68%);
    z-index: 5;
    border-radius: 0px 0px 20px 0px;
`;

const CategoriesTitle = styled.h2`
    margin-left: 20px;
    font-size: var(--md);
    font-weight: bold;
    line-height: 2rem;
    align-self: center;
`;

const ListCategories = styled.ul`
    width: 100%;
    height: 100%; 
    justify-self: center;
    display: flex;
    flex-direction: column;    
`;

const ListLi = styled.li` 

    font-size: var(--md);
    font-weight: bold;
    line-height: 2rem;   
    list-style: none;
`;

const ListA = styled.a`
    font-size: var(--sm);
    font-weight: bold;
    line-height: 1.75rem;
    letter-spacing: 1px;
    color: black;
    text-decoration: none;
`;

const DivAccount = styled.div`
    width: 100%;
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Email = styled.p`
    font-size: var(--md);
    font-weight: 300;
    line-height: 1.75rem;
    color: var(--black);
`;

const Logout = styled.a`
    display: inline-block;
    
    line-height: 1.75rem;
    color: var(--hospital_green);
    text-decoration: none;  
`;

const ButtonCategories = styled.button`
    font-size: var(--md);
    font-weight: bold;
    width: 100%;
    height: 48px;
    background-color: transparent;
    border: none;
    &:hover{
        background-color: #d8d8d8;
    }
`;

function Categories(){

    const {       
        darkMode, 
    } = useContext(CreateContext);

    const DM_Background = `${darkMode ?  'dark' : 'white'}`;
    const DM_Name = `${darkMode ? 'white-color' : 'dark-color'}`;

    return(
        <>
        <DivCategories className={DM_Background}>
            <CategoriesTitle className={`title-categories ${DM_Name}`}>CATEGORIES</CategoriesTitle>

            <ListCategories id="ul-margin">
                <ListLi><ButtonCategories type={'button'} className={DM_Name}>Clothes</ButtonCategories></ListLi>
                <ListLi><ButtonCategories type={'button'} className={DM_Name}>All</ButtonCategories></ListLi>
                <ListLi><ButtonCategories type={'button'} className={DM_Name}>Electronics</ButtonCategories></ListLi>
                <ListLi><ButtonCategories type={'button'} className={DM_Name}>Furnitures</ButtonCategories></ListLi>
                <ListLi><ButtonCategories type={'button'} className={DM_Name}>Toys</ButtonCategories></ListLi>
                <ListLi><ButtonCategories type={'button'} className={DM_Name}>Others</ButtonCategories></ListLi>
            </ListCategories>

            <DivAccount>
                <ListLi><ButtonCategories type={'button'} className={DM_Name}>My orders</ButtonCategories></ListLi>
                <ListLi><ButtonCategories type={'button'} className={DM_Name}>My account</ButtonCategories></ListLi>
            </DivAccount>
            <DivAccount>
                <Email >camilayokoo@gmail.com</Email>
                <Logout href="">Logout</Logout>
            </DivAccount>
        </DivCategories>
           
                
        </>
    );
}

export { Categories };