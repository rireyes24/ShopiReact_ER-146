import styled from 'styled-components';
import './style.css'

const DivCategories = styled.div`
    position: absolute;
    bottom: 0;
    align-self: flex-start;
    width: 28%;
    height: 92vh;
    max-height: 92vh;
    background-color: #ffffff;
    padding: 20px;
    display: grid;
    grid-template-rows: 10% 50% 20% 20%;
    box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 4.68%);
    z-index: 5;
`;

const CategoriesTitle = styled.h2`
    font-size: var(--md);
    font-weight: bold;
    line-height: 2rem;
    align-self: center;
`;

const ListCategories = styled.ul`
    width: 72%;
    height: 100%; 
    justify-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;  
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
    font-size: var(--md);
    font-weight: bold;
    line-height: 1.75rem;
    color: var(--hospital_green);
    text-decoration: none;  
`;

function Categories(){
    return(
        <>
        <DivCategories>
            <CategoriesTitle class="title-categories">CATEGORIES</CategoriesTitle>

            <ListCategories id="ul-margin">
                <ListLi><ListA href="">All</ListA></ListLi>
                <ListLi><ListA href="">Clothes</ListA></ListLi>
                <ListLi><ListA href="">Electronics</ListA></ListLi>
                <ListLi><ListA href="">Furnitures</ListA></ListLi>
                <ListLi><ListA href="">Toys</ListA></ListLi>
                <ListLi><ListA href="">Others</ListA></ListLi>
            </ListCategories>

            <DivAccount>
                <ListLi><ListA href="">My orders</ListA></ListLi>
                <ListLi><ListA href="">My account</ListA></ListLi>
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