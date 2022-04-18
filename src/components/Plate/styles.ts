import styled from "styled-components";



export const PlateContainer = styled.div `
width: 46.875vw;
height: 17.031vw;
background-color: transparent;
display:flex;
align-items: center;
justify-content:center;
flex-direction:column;
margin-top: 3vw;
@media only screen and (min-width: 2498px) {
  margin-top: 3vw;

 }
 @media only screen and (max-width: 1366px) {
transform: scale(0.9)

}
@media only screen and (max-width: 1024px) {
  margin-top: 39px;
}
@media only screen and (max-width: 414px) {
  margin-top: 70px;
}
`;
export const InfoContainer = styled.div `
position: absolute;
float: right;

display:flex;
align-items: center;
justify-content:center;
flex-direction:column;
margin-left: 30vw;
margin-top: -4vw;
@media only screen and (min-width: 2498px) {
  margin-top: 1vw;   
 }
  @media only screen and (max-width: 1366px) {
    margin-top: -8vw;
    transform: scale(0.9)
}
@media only screen and (max-width: 1024px) {
  margin-top: -10vw;
    transform: scale(0.7)
}
@media only screen and (max-width: 414px) {
        transform: scale(0.6);
        margin-top: -32vw;
        margin-left: -15vw;
        flex-direction:row;
}
`;


export const BreadPositionTop = styled.div `
position: absolute;
margin-bottom: 10.3vw;
margin-left:1vw;
@media only screen and (max-width: 1600px) {
margin-bottom: 12.7vw;
}

`;
export const TempPosition = styled.div `
position: absolute;
margin-bottom: 9vw;
margin-left:4vw;
@media only screen and (min-width: 2498px) {
  margin-bottom: 235px;
}
@media only screen and (max-width: 1600px) {
margin-bottom: 10vw;
}

`;
export const SaucePosition = styled.div `
position: absolute;
margin-bottom: 9vw;
margin-left:4vw;
@media only screen and (min-width: 2498px) {
  margin-bottom: 245px;
}
@media only screen and (max-width: 1600px) {
margin-bottom: 11vw;
}
@media only screen and (max-width: 1366px) {
margin-top: -9px;
}
@media only screen and (max-width: 1024px) {
  margin-top: 1vw;

}
@media only screen and (max-width: 414px) {
  margin-top: 26px;

}
`;
export const SaladPosition = styled.div `
position: absolute;
margin-bottom: 145px;
margin-left:20px;
@media only screen and (min-width: 2498px) {
  margin-bottom: 235px;
}
@media only screen and (max-width: 1600px) {
margin-bottom: 11vw;
}
@media only screen and (max-width: 1366px) {
margin-top: 9px;
}
@media only screen and (max-width: 1024px) {
  margin-top: 2vw;

}
@media only screen and (max-width: 414px) {
  margin-top: 46px;

}
`;
export const ExtraPosition = styled.div `
position: absolute;
margin-bottom: 185px;
margin-left:20px;
@media only screen and (min-width: 2498px) {
  margin-bottom: 235px;
}
@media only screen and (max-width: 1600px) {
margin-bottom: 11vw;
}
@media only screen and (max-width: 1366px) {
margin-top: -9px;
}
@media only screen and (max-width: 1024px) {
  margin-top: 2vw;

}
`;
export const FlavorPosition = styled.div `
position: absolute;
margin-bottom: 165px;
margin-left:20px;
filter: hue-rotate(10deg);
@media only screen and (min-width: 2498px) {
  margin-bottom: 235px;
}
@media only screen and (max-width: 1366px) {
margin-top: 19px;
}
@media only screen and (max-width: 1024px) {
  margin-top: 60px;

}
@media only screen and (max-width: 414px) {
  margin-top: 146px;

}
`;
export const CheesePosition = styled.div `
position: absolute;
margin-bottom: 185px;
margin-left:20px;
@media only screen and (min-width: 2498px) {
  margin-bottom: 235px;
}
@media only screen and (max-width: 1600px) {
margin-bottom: 11vw;
}
@media only screen and (max-width: 1024px) {
  margin-top: 10px;

}

`;
export const BreadPositionBottom = styled.div `
position: absolute;
margin-bottom: 11vw;
margin-left:1vw;
@media only screen and (max-width: 1600px) {

  margin-bottom: 13.8vw;
}

`;

export const PlatePosition = styled.div `

img {
    width: 600px; 
    height: 150px; 
    object-fit: cover;

}
@media only screen and (min-width: 2498px) {
  margin-bottom: 2.5vw;    
}
@media only screen and (max-width: 1366px) {
transform: scale(0.9)

}
@media only screen and (max-width: 1024px) {
  margin-top: 70px;
  transform: scale(0.9)
}
@media only screen and (max-width: 414px) {
  margin-top: 136px;
  img {
    width: 500px; 
    height: 150px; 


}
}
`;


export const SizeDisplay = styled.div `
margin-left: 90px;
font-size: 30px;
margin-top: -20px;
color: #FFCD3F;
@media only screen and (max-width: 414px) {
  margin-left: 30px;

}
`;
export const PlateText = styled.div `
font-size: 50px;
text-align: center;
color: #ffff;

p {
    font-size: 30px;
    text-align: center;


}
@media only screen and (max-width: 1366px) {
transform: scale(0.8)

}
@media only screen and (max-width: 414px) {
margin-top: -20px;
  transform: scale(0.7);
}

`;

export const GraphInfo = styled.div `
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
position: absolute;
margin-right: 106px;
margin-bottom:90px ;

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
@media only screen and (max-width: 414px) {
  margin-top: 10px;
  margin-left : 83vw;
  position: absolute;
}
`;
export const SodiumBar = styled.div `
display:flex;
align-items: left;
flex-direction: column;
margin-left:90px;
margin-top: 28px;
@media only screen and (min-width: 2498px) {
  margin-left: 10vw;   
 }
 @media only screen and (max-width: 1366px) {
  margin-left: 2vw;

}
@media only screen and (max-width: 1366px) {
transform: scale(0.9)

}
@media only screen and (max-width: 414px) {
        transform: scale(0.6);
        margin-top: 4vw;
        margin-left: -35.5vw;
}

`;
export const SodiumBarText = styled.div `

font-size: 18px;
color:#ffff;
margin-left:-20px;

`;

export const SelectorsContainer = styled.div `
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
@media only screen and (min-width: 2498px) {
 margin-top: -89px;
}
@media only screen and (max-width: 1366px) {
transform: scale(0.8);
margin-top: -39px;
}
@media only screen and (max-width: 1280px) {
  transform: scale(0.7);
}
@media only screen and (max-width: 1024px) {
margin-top: 5px;
transform: scale(0.7);
}
@media only screen and (max-width: 414px) {
  margin-top: 106px;
  transform: scale(0.9);
}
`;

export const ButtonCentralizer = styled.div `
display: flex;
align-items: center;
justify-content: center;

`;

export const SandwichPosition = styled.div `
position: absolute;
display: flex;
align-items: center;
justify-content: center;
margin-top: 40px;
@media only screen and (min-width: 2498px) {
}
`;


export const MultipleSelectorContainer = styled.div `
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
margin-left: -10px;
`;

