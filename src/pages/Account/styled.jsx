import styled from 'styled-components';

const DivLoginPage = styled.div`
    width: 100%;
    height: 92vh;    
    align-items: center;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
`;

const H3Subtitle = styled.h3`
    width: 339px;
    margin-bottom: 8px;
    font-size: var(--sm);
    font-weight: bold;
    line-height: 1.75rem;
    color: var(--black);
    text-align: start;
`;

const H4Data = styled.h3`
    width: 339px;
    height: 42px;    
    margin-bottom: 20px;
    padding: 8px;    
    font-size: var(--md);
    font-weight: 400;
    line-height: 2rem;
    color: #797979;
`;

const ButtonEdit = styled.button`
    width: 328px;
    height: 48px; 
    border-radius: 10px;
    border: 2px solid var(--hospital_green);
    background-color: var(--white);
    font-size: var(--lg);
    font-weight: bold;
    line-height: 2.25rem;
    color: var(--hospital_green);
    cursor: pointer;
    align-self: center;
    justify-self: center;
`;

export {DivLoginPage, H3Subtitle, H4Data, ButtonEdit}