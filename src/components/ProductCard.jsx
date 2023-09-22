import styled from "styled-components";
import { H4Card } from "./H4Card";


const DivCard = styled.div`
    position: relative;
    background-color: transparent;
    width: 180px;
    height: 240px; 
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 76% 4% 10% 10%;
    margin: 5px;
`;

const ImageCard = styled.img`
    width: 100%;
    height: 100%;
    grid-column: 1 / 3;
    object-fit: cover;
    border-radius: 20px;
    overflow: hidden;    
    cursor: pointer;
`;

const H3Card = styled.h3`
    width: 100%;
    height: 100%;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    display: grid;
    align-items: center;
    font-size: var(--md);
    font-family: 'Roboto', sans-serif;        
    letter-spacing: 1px;
`;

const ButtonAddCart = styled.button`
    border: none;
    background-color: transparent;
    grid-column: 2 / 3;
    grid-row: 3 / 5;
    justify-self: center;
    align-self: center;
    width: 44px;
    height: 44px;       
    display: grid;
    place-content: center;
    cursor: pointer;
    background-color: var( --hospital_green);
    border-radius: 50px;

    &:hover{
        background-color: #979797;
    }
`;


const ProductCard = ({id, image, title, price, darkMode, productDetail, handleClick, darkModeTitle, setShowDetails, category}) => {

    
    return(
        <DivCard>
            <ImageCard 
                src={image} 
                alt={title} 
                onClick={() => {
                    productDetail(id)
                    setShowDetails(true);
                }} 
                style={{
                    zIndex: 1,
                    
                }}
            /> 
            <H3Card className={darkMode}>$ {price}</H3Card>
            <H3Card style={{
                width: '120px',
                height: '30px',
                display: 'grid',
                placeContent: 'center',
                borderRadius: '6px',
                backgroundColor: '#e4e4e4a4',
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                gridRow: '1 / 2',
                zIndex: 3,     
                fontSize: '14px',
                letterSpacing: '1px'
            }}>{category}</H3Card>
            <H4Card className={darkModeTitle}>{title}</H4Card>
            <ButtonAddCart id={id} onClick={() => handleClick(id)}><span className="button-add-card"></span></ButtonAddCart>                     
        </DivCard>
    );
}

export { ProductCard }