import { BackgroundContainerInfo, ItemListWrapper } from './styles';
import { Container } from "react-bootstrap";
import { ItemListRow } from '../ItemListWrapper';

export const InfosContainer: React.FC = () => {
    return (
<Container>
<BackgroundContainerInfo>
<ItemListWrapper>
<ItemListRow ItemListTitle='TAMANHO'/>
<ItemListRow ItemListTitle='PÃO'/>
<ItemListRow ItemListTitle='SABOR'/>
<ItemListRow ItemListTitle='QUEIJO'/>
<ItemListRow ItemListTitle='ADICIONAL'/>
<ItemListRow ItemListTitle='SALADA'/>
<ItemListRow ItemListTitle='MOLHO'/>
<ItemListRow ItemListTitle='TEMPERATURA'/>
</ItemListWrapper>
</BackgroundContainerInfo>
</Container>
    )
}