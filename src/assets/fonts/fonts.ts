import { createGlobalStyle } from 'styled-components';
import ArimoFont from '../../assets/fonts/Arimo/Arimo-VariableFont_wght.ttf'
import BiryaniBoldFont from '../../assets/fonts/Biryani/Biryani-Bold.ttf'
import BiryaniRegularFont from '../../assets/fonts/Biryani/Biryani-Regular.ttf'

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Arimo';
        src: local('Arimo'),
        url(${ArimoFont}) format('truetype');
        font-weight: normal;
    }
    @font-face {
        font-family: 'BiryaniBold';
        src: local('BiryaniBold'),
        url(${BiryaniBoldFont}) format('truetype');
        font-weight: 700;
    }
    @font-face {
        font-family: 'BiryaniRegular';
        src: local('BiryaniRegular'),
        url(${BiryaniRegularFont}) format('truetype');
        font-weight: 400;
    }
`;
