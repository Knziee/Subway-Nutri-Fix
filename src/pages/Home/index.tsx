import { InfosContainer } from '../../components/InfosContainer';
import {Buttons} from '../../components/Buttons';
import  {BackgroundContainer, LeftWrapper, RightWrapper } from './styles';
import { BigCircle } from '../../components/BigCircle'

export const Home: React.FC = () => {
    return (
        <BackgroundContainer>
            <LeftWrapper>
        <InfosContainer>

        </InfosContainer>

        <Buttons />
        </LeftWrapper>
        <RightWrapper>
            <BigCircle/>
        </RightWrapper>
        </BackgroundContainer>
    )
}