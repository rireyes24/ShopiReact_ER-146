import { useContext} from "react";
import { ShopiContext } from "../../context/AppContext";
import styled from "styled-components";
import { ImageCard } from "../../components/Card";
import { ButtonBuy } from "../../components/ButtonBuy";
import { Grid } from "antd";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
  position: relative;
  width: 70%;    
  max-width: 500px;
  height: 800px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 14% 60% 10% 16%;
  align-items: center; 
  flex-direction: column;
  justify-content: center;   
  
  border-radius: 10px;    
    border: 2px solid black; 
`;

const ContainerOrder = styled.div`  
    
    width: 90%;    
    height: 100%;
    justify-self: center;
    display: flex;
    align-items: center; 
    flex-direction: column;
    justify-content: flex-start;   

    overscroll-behavior-y: contain;
    scroll-snap-type: y proximity;
    overflow: hidden;
    overflow-y: scroll;
  
`;

const Title = styled.h2`
    position: relative;
    width: 100%;
    height: 100%;
    grid-row: 1 / 2;
    display: grid;
    place-content: center;
    font-size: 28px;
    font-family: 'nunito', sans-serif;    
    color: #404040;
    letter-spacing: 1px;
    z-index: 1;    
`;



const DivCard = styled.div`

    width: 80%;    
    height: 90px; 
    border: none;    
    display: grid;
    grid-template-columns: 30% 5% 45% 20%;  
    grid-template-rows: 50% 50%;  
    margin: 5px;
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

const MyOrder = () => {

    const { product, setProduct, setProductLength } = useContext(ShopiContext);

    const price = product.map(price => price.price);
    const priceTotal = price.reduce((a, b) =>  a + b, 0);


    function deleteToCart(id){       
        const filterProducts = product.filter(producto => producto.id != id)
        console.log('Productos', filterProducts);
        setProduct(filterProducts);

        const boton = document.getElementById(id);
        boton.style.background = 'var( --hospital_green)';
        boton.disabled = false;
    }

    const navigate = useNavigate();

    function goToOrders(){
        navigate('/orders');
    }

    console.log(product);
    
    return(
        <Container>
            <ButtonBuy 
                onClick={() => goToOrders()}
                
                style={{
                    position: 'absolute',
                    width: '20%',
                    height: '36px',
                    top: 0,
                    left: 0,
                    justifySelf: 'center',
                    gridColumn: "1 / 2",
                    gridRow: '1 / 2',
                    zIndex: 2,
                    marginLeft: '20px',
                    marginTop: '34px',
                    borderRadius: '8px',
            }}>ATRAS</ButtonBuy>

            <Title>MY ORDER</Title>

            <ContainerOrder>
                {product.map(product => (
                    <DivCard key={product.id}>
                        <ImageCard src={product.images[0]} alt={product.title} />                
                        <H3Card>$ {product.price}</H3Card>
                        <H4Card>{product.tlite}</H4Card>  
                        <ButtonDelete type={'button'} onClick={() => deleteToCart(product.id)}><span className="button-delete"></span></ButtonDelete>                      
                    </DivCard>
                ))}   
            </ContainerOrder>

            <H4Card style={{
                gridColumn: '1 / 2',
                gridRow: '3 / 4',
                display: 'grid',
                placeContent: 'center',
            }}
            >TOTAL: ${priceTotal}</H4Card>

            <ButtonBuy style={{
                width: '80%',
                justifySelf: 'center',
                gridRow: '4 / 5'
            }}>COMPRAR</ButtonBuy>
        </Container>
    );
}

export { MyOrder }