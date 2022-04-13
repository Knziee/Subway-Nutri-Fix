import styled from "styled-components";

export const ItemListContainer = styled.div `
    display:flex;
    flex-direction: column;
    width: 350px;
    height: 85px;
    background-color: red;
    margin-left: 30px;
    margin-top: 20px;
    `;

export const ItemListTitleStyle = styled.div `
font-size: 15px;
color: #ffff;
text-transform: uppercase;
background-color: transparent;
 `;

export const ItensInRow = styled.div `
display:flex;
justify-content: flex-start;
align-items: center;
flex-direction: row;
width: 350px;
height: 85px;
background-color: blue;
`;