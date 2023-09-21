import { useContext} from "react";
import { ShopiContext } from "../../context/AppContext";
import styled from "styled-components";
import { ImageCard } from "../../components/Card";
import { useNavigate } from "react-router-dom";
import { ButtonDelete } from "../../components/ButtonDelete";


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
    width: 100%;
    height: 90px; 
    border: none;    
    display: grid;
    grid-template-columns: 30% 5% 45% 20%;  
    grid-template-rows: 50% 50%;  
    margin: 5px;
    border-radius: 10px;    
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

const MyOrders = () => {

    const { myOrders, setMyOrders, setProduct } = useContext(ShopiContext); 

    function deleteToCart(id){       
        const filterProducts = myOrders.filter(producto => producto.id != id)
        //console.log('Productos', filterProducts);
        setMyOrders(filterProducts);
    }

    const navigate = useNavigate();

    function goToNumerOrder(id){   
        setProduct(myOrders[id - 1].order)
        //console.log(myOrders[id - 1].order);
        navigate(`/orders/order/${id}`)
    }
    
    return(
        <Container>
            
            <Title>MIS ORDENES</Title>

            <ContainerOrder>
                {myOrders.map(product => (
                    <DivCard key={product.id} onClick={() => goToNumerOrder(product.id)}>
                        <ImageCard 
                            src={product.order[0].images[0]} 
                            alt={product.name} 
                            style={{
                                gridRow: '1 / 3',
                            }}
                        />                
                        <H3Card>{product.name}</H3Card>
                        <H4Card>{product.order.length} Articulos</H4Card>
                        <ButtonDelete type={'button'} onClick={() => deleteToCart(product.id)}><span className="button-delete"></span></ButtonDelete>                      
                    </DivCard>
                ))}   
            </ContainerOrder>
        </Container>
    );
}

export { MyOrders }