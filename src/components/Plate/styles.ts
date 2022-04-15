import styled from "styled-components";

export const PlateContainer = styled.div `
width: 46.875vw;
height: 17.031vw;
background-color: transparent;
display:flex;
align-items: center;
justify-content:center;
flex-direction:column;
`;
export const InfoContainer = styled.div `
background-color: red;
opacity: 20%;

display:flex;
align-items: center;
justify-content:space-between;
flex-direction:row;
`;


export const BreadPositionTop = styled.div `
position: absolute;
margin-bottom: 6.3vw;
margin-left:1vw;
`;
export const BreadPositionBottom = styled.div `
position: absolute;
margin-bottom: 7vw;
margin-left:1vw;
`;

export const PlatePosition = styled.div `

`;

export const GraphInfo = styled.div `
img {
    width:8vw;
    margin-left: 3vw;
    margin-top: 4vw;
    margin-bottom: 1vw;
}
`;