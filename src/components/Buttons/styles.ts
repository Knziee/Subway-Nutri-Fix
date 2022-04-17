import styled from "styled-components";

interface PropsBackgroundButton {
    ResetButton?: boolean;

}

export const Button = styled.button<PropsBackgroundButton> `
    width: 150px;
    height: 60px;
font-family: 'BiryaniBold';
padding-top: 9px;
font-size:15px;
    color:white;
    border:none;
    border-radius: 10px;
    text-transform: uppercase;
    background-color: ${(props: any)  => (props.ResetButton ? '#0F9246' : '#C84B43')} ;
    &:hover {
        cursor:pointer;
        background-color: ${(props: any)  => (props.ResetButton ? '#13bf5b' : '#d4564e')};
}
    `;

export const ButtonPosition = styled.button<PropsBackgroundButton> `

margin-top: -7px;
background-color: transparent;
`;

