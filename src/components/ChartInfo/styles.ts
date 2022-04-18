import styled from "styled-components";

export const BackgroundChart = styled.div `


margin-right: -2px;

height: 155px;
  width: 155px;
  background-color: #0F9246;
  border: solid 10px #FFCD3F;
  border-radius: 50%;

  p{
      display: flex;
  }
`;


export const ChartInfoColor = styled.div `
position: absolute;
width: 10px;
height: 10px;
margin-top: 3px;
margin-left: -17px;

`;

export const ChartInfoContainer = styled.div `
display:flex;
flex-direction: column;
color: white;
font-size: 15px;

margin-right: 8px;
`;
export const ChartAndBackgroundInfoContainer = styled.div `
display:flex;
justify-content:center;
align-items:center;
flex-direction: row;

`;