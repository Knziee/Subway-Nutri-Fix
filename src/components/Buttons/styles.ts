import styled from "styled-components";

interface PropsBackgroundButton {
    SucessButton?: boolean;

}

export const Button = styled.button<PropsBackgroundButton> `
    width: 150px;
    height: 60px;
    margin-left: 40px;
    color:white;
    border:none;
    border-radius: 10px;
    background-color: ${(props: any)  => (props.SucessButton ? '#0F9246' : '#C84B43')} ;
    &:hover {
        cursor:pointer;
        background-color: ${(props: any)  => (props.SucessButton ? '#13bf5b' : '#d4564e')};
}
    `;

export const ButtonPosition = styled.button<PropsBackgroundButton> `
margin-left: 32px;
margin-top: -5px;
background-color: transparent;
`;

