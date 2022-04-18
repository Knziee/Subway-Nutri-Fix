import styled from "styled-components";

export const BackgroundChart = styled.div`
  margin-right: -2px;

  height: 155px;
  width: 155px;
  background-color: #0f9246;
  border: solid 10px #ffcd3f;
  border-radius: 50%;

  p {
    display: flex;
  }
  @media only screen and (max-width: 2498px) {
    margin-bottom: -3px;
    margin-left: -3px;
  }
  @media only screen and (max-width: 1600px) {
    margin-bottom: 3px;
  }
  @media only screen and (max-width: 414px) {
    margin-bottom: -22vw;
    margin-left: 2vw;
  }
  @media only screen and (max-width: 360px) {
    margin-bottom: -25vw;
  }
`;

export const ChartInfoColor = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  margin-top: 3px;
  margin-left: -17px;
`;

export const ChartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 15px;

  margin-right: 8px;
  @media only screen and (max-width: 414px) {
    margin-bottom: -22vw;
    margin-left: -2vw;
  }
`;
export const ChartAndBackgroundInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
