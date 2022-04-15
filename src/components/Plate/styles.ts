import styled from "styled-components";

export const PlateContainer = styled.div `
width: 46.875vw;
height: 17.031vw;
background-color: transparent;
display:flex;
align-items: center;
justify-content:center;
flex-direction:column;
margin-top: -4vw;

`;
export const InfoContainer = styled.div `
float: right;

display:flex;
align-items: center;
justify-content:center;
flex-direction:column;
margin-right: -3vw;
margin-top: -4vw;
`;


export const BreadPositionTop = styled.div `
position: absolute;
margin-bottom: 10.3vw;
margin-left:1vw;
`;
export const BreadPositionBottom = styled.div `
position: absolute;
margin-bottom: 11vw;
margin-left:1vw;
`;

export const PlatePosition = styled.div `
img {
    width: 600px; 
    height: 150px; 
    object-fit: cover
}
`;
export const SizeDisplay = styled.div `
margin-left: 90px;
font-size: 30px;
margin-top: -20px;
color: #FFCD3F;
`;
export const PlateText = styled.div `
font-size: 50px;
text-align: center;
color: #ffff;

p {
    font-size: 30px;
    text-align: center;


}
`;

export const GraphInfo = styled.div `
img {
    width:8vw;
    margin-left: 3vw;
    margin-top: 4vw;
    margin-bottom: 1vw;
}
`;

export const KcalCircle = styled.div `
display: flex;
align-items: right ;
flex-direction: row;
flex-wrap:wrap;

margin-top: -4vw;
  height: 100px;
  width: 100px;
  background-color: #0F9246;
  border: solid 10px #FFCD3F;
  border-radius: 50%;

  p {
    font-size: 15px;
      display: flex;
      align-items: center;
    margin-left: 14px;
    margin-top: 15px;
    color:#ffff;
    text-transform: uppercase;
  }
span {
  font-size: 30px;
  margin-top:-15px;
  margin-left: 28px;
  color:#FFCD3F
}

`;
export const SodiumBar = styled.div `
margin-top: 130px;


`;
export const SodiumBarText = styled.div `

font-size: 25px;
color:#ffff;
margin-left: 30px;
margin-top: -60px

`;