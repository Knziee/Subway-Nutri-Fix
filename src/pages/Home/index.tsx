import { InfosContainer } from '../../components/InfosContainer';
import {Buttons} from '../../components/Buttons';
import  {BackgroundContainer, LeftWrapper } from './styles';

export const Home: React.FC = () => {
    return (
        <BackgroundContainer>
            <LeftWrapper>
        <InfosContainer>

        </InfosContainer>

        <Buttons />
        </LeftWrapper>
        </BackgroundContainer>
    )
}