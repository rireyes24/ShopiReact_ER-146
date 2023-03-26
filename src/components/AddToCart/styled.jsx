import styled from 'styled-components';

const DivLogin = styled.div` 
    position: absolute;   
    align-self: flex-end;   
    justify-self: flex-start;
    top: 0;    
    width: 320px;
    max-width: 375px;    
    border-radius: 20px;
    background-color: var(--white-secondary);
    padding: 20px 10px;
    display: grid;
    grid-template-columns: 100%;
    place-items: center;
    justify-content: center;
    align-items: center;    
    z-index: 2;
    box-shadow: -4px 4px 4px 0 rgba(0, 0, 0, 20.68%);
    z-index: 5;
    border-radius: 0px 0px 0px 20px;
`;

const DivCard = styled.div`
    
    width: 100%;
    height: 90px; 
    border: none;    
    display: grid;
    grid-template-columns: 30% 5% 45% 20%;  
    grid-template-rows: 50% 50%;  
    margin: 5px;
    border-radius: 10px;    
`;

const ImageCard = styled.img`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 40%);
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    object-fit: cover ;    
    overflow: hidden;    
    align-self: center;
    justify-self: center;
`;

const H3Card = styled.h3`
    width: 100%;
    height: 100%;
    grid-column: 3 / 4;       
    grid-row: 2 / 3;
    display: grid;
    align-self:center;    
    font-size: var(--md);
    font-family: 'Roboto', sans-serif;    
    color: #404040;
    letter-spacing: 1px;
`;

const H4Card = styled.h4`
    width: 100%;
    height: 100%;
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    display: grid;
    align-items: center;
    font-size: var(--sm);
    font-weight: 400;
    font-family: 'Quicksand', sans-serif;
    color: #404040;
    letter-spacing: 1px;
`;

const DivInfoProducts = styled.div`    
    width: 100%;
    height: 60px; 
    display: grid;
    grid-template-columns: 50% 50%; 
    grid-template-rows: 60% 40%; 
    place-items: center;    
    margin: 30px 5px 20px 5px;
    border-radius: 8px;
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
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    font-size: var(--sm);
    font-weight: 400;
    line-height: 1.7rem;
    color: #797979;      
`;

const PPrice = styled.p`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    font-size: var(--md);
    font-weight: bold;
    line-height: 1.87rem;
    color: #404040;
    justify-self: center;
    align-self: center;
`;

const PTotal = styled.p`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    font-size: var(--md);
    font-weight: bold;
    line-height: 1.87rem;
    color: #404040;
    justify-self: self-start;
    align-self: center;
    padding-left: 34px;
`;

const ButtonBuy = styled.button`
    width: 100%;
    height: 54px;    
    border-radius: 10px;
    border: 0;
    margin-top: 10px;
    background-color: var(--hospital_green);
    font-size: var(--lg);
    font-weight: bold;
    line-height: 2.25rem;
    color: var(--white);
    display: grid;
    place-content: center;
    cursor: pointer;

    &:hover{
        background-color: #979797;
    }
`;

const ButtonDelete = styled.button`
    width: 40px;
    height: 40px;    
    border-radius: 8px;
    border: 0;
    align-self: center;
    justify-self: center;   
    grid-column: 4 / 5;
    grid-row: 1 / 3;
    background-color: #e44a4a;
    font-size: var(--lg);
    font-weight: bold;
    line-height: 2.25rem;
    color: var(--white);
    display: grid;
    place-content: center;
    cursor: pointer;

    &:hover{
        background-color: #e47272;
        
    }

    &:active{
        background-color: #ce5353;
    }
`;


export { 
    DivLogin,
    DivCard, 
    ImageCard, 
    H3Card, 
    H4Card, 
    DivInfoProducts, 
    PDate, 
    PArticles, 
    PPrice, 
    ButtonBuy, 
    PTotal, 
    ButtonDelete, 
};