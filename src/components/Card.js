import styled from "styled-components";

const ImageCard = styled.img`
    width: 100%;
    height: 100%;
    grid-column: 1 / 3;
    object-fit: cover;
    border-radius: 20px;
    overflow: hidden;    
    cursor: pointer;
`;

export { ImageCard }