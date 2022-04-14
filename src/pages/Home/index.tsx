import { InfosContainer } from '../../components/InfosContainer';
import {Buttons} from '../../components/Buttons';
import  {BackgroundContainer, LeftWrapper, RightWrapper } from './styles';
import { BigCircle } from '../../components/BigCircle'
import {MediumCircle} from '../../components/MediumCircle'
import {SmallCircle} from '../../components/SmallCircle'

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
            <MediumCircle/>
            <SmallCircle/>
        </RightWrapper>
        </BackgroundContainer>
    )
}