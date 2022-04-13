import { BackgroundContainerInfo, ItemListWrapper } from './styles';
import { Container } from "react-bootstrap";
import { Size } from '../InfosComponents/Size';
import { Pao } from '../InfosComponents/Pão';
import { Sabor } from '../InfosComponents/Sabor';
import { Queijo } from '../InfosComponents/Queijo';
import { Adicional } from '../InfosComponents/Adicional';
import { Salada } from '../InfosComponents/Salada';
import { Molho } from '../InfosComponents/Molho';
import { Temperatura } from '../InfosComponents/Temperatura';

export const InfosContainer: React.FC = () => {
    return (
<Container>
<BackgroundContainerInfo>
<ItemListWrapper>
<Size ItemListTitle='TAMANHO'/>
<Pao ItemListTitle='PÃO'/>
<Sabor ItemListTitle='SABOR'/>
<Queijo ItemListTitle='QUEIJO'/>
<Adicional ItemListTitle='ADICIONAL'/>
<Salada ItemListTitle='SALADA'/>
<Molho ItemListTitle='MOLHO'/>
<Temperatura ItemListTitle='TEMPERATURA'/>
</ItemListWrapper>
</BackgroundContainerInfo>
</Container>
    )
}