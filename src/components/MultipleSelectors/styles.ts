import styled from "styled-components";



export const MultipleSelectorButtton = styled.button`
        font-family: 'BiryaniBold';
    width: 3vw;
    height: 30px;
    cursor: pointer;
    color:white;
    border:none;
    border-radius: 10px;
    background-color: #00cc66;
    text-transform: uppercase;
    margin-bottom: 8px;
    font-size: 12px;
    padding: 6.5px;
    margin-left:10px;
    
    &:hover {
        background-color: #006633;
    }

    :active {
        background-color:#003300;
    }
    @media only screen and (max-width: 1024px) {
        width: 4.2vw;
}
@media only screen and (max-width: 414px) {
        width: 10vw;

}
    `;
export const MultipleSelectorTitle = styled.div`
color:white;
text-transform: uppercase;
font-size: 9px;
font-family: 'BiryaniBold';
margin-bottom:-3px;
text-align: center;
margin-left:10px;
`;



