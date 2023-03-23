import styled from 'styled-components';

const DivLogin = styled.div` 
    position: absolute;   
    align-self: flex-end;   
    justify-self: flex-start;
    top: 0;
    margin-top: 20px;
    margin-right: 10px;
    width: 375px;
    max-width: 375px;    
    border-radius: 28px;
    background-color: #f0f0f0; 
    padding: 20px;
    display: grid;
    justify-content: center;
    align-items: center;    
    z-index: 5;
`;

const DivCard = styled.div`
    background-color: #bebebe;
    width: 90%;
    height: 120px; 
    display: grid;
    grid-template-columns: 40% 40% 20%;  
    grid-auto-flow: 100%;  
    margin: 5px;
    border-radius: 20px;
`;

const ImageCard = styled.img`
    width: 90%;
    height: 90%;
    grid-column: 1 / 2;
    object-fit: cover;
    border-radius: 20px;
    overflow: hidden;    
    align-self: center;
    justify-self: center;
`;

const H3Card = styled.h3`
    width: 100%;
    height: 100%;
    grid-column: 3 / 4;    
    display: grid;
    align-items: center;
    font-size: var(--md);
    font-family: 'Roboto', sans-serif;    
    color: #404040;
    letter-spacing: 1px;
`;

const H4Card = styled.h4`
    width: 100%;
    height: 100%;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: grid;
    align-items: center;
    font-size: var(--sm);
    font-weight: 400;
    font-family: 'Quicksand', sans-serif;
    color: #404040;
    letter-spacing: 1px;
`;

// const ButtonAddCart = styled.button`
//     border: none;
//     background-color: transparent;
//     grid-column: 2 / 3;
//     grid-row: 3 / 5;
//     justify-self: center;
//     align-self: center;
//     width: 48px;
//     height: 48px;       
//     display: grid;
//     place-content: center;
//     cursor: pointer;
// `;



const DivInfoProducts = styled.div`
    background-color: #bebebe;
    width: 90%;
    height: 80px; 
    display: grid;
    grid-template-columns: 80% 20%; 
    grid-template-rows: 50% 50%; 
    place-items: center;
    margin: 5px;
    border-radius: 20px;
`;

const PDate = styled.p`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    font-size: var(--md);
    font-weight: bold;
    line-height: 2rem;
    color: var(--black);
`;

const PArticles = styled.p`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    font-size: var(--sm);
    font-weight: 400;
    line-height: 1.7rem;
    color: #797979;  
`;

const PPrice = styled.p`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    font-size: var(--md);
    font-weight: bold;
    line-height: 1.87rem;
    color: #404040;
    justify-self: flex-start;
`;

export { DivLogin, DivCard, ImageCard, H3Card, H4Card, DivInfoProducts, PDate, PArticles, PPrice };