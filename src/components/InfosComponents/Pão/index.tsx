import { ItemListContainer, ItemListTitleStyle, ItensInRow } from './styles'
import {Item} from '../../Item'
import noveGraos from "../../../assets/images/9graos.svg"
import italianoBranco  from '../../../assets/images/italianoBranco.svg';
import noveGraosAveiaEMel from "../../../assets/images/9graosAveiaEMel.svg"
import parmesaoEOregano  from '../../../assets/images/parmesaoEOregano.svg';
import tresQueijo  from '../../../assets/images/tresQueijo.svg';

interface ItemListProps{
ItemListTitle?: string
ItemListConst?: string
}

export const Pao: React.FC <ItemListProps> = ({ItemListTitle}) => {

    const pao = [
        {
            ItemName: '9 Grãos',
            ImgUrl: noveGraos,
            ItemKcal: '999',
            ItemCarbohydrate: '999',
            ItemFat: '999',
            ItemProtein: '999',
            ItemPortion: '999',
        },
        {
            ItemName: '9 Grãos',
            ImgUrl: italianoBranco,
            ItemKcal: '999',
            ItemCarbohydrate: '999',
            ItemFat: '999',
            ItemProtein: '999',
            ItemPortion: '999',
        },
        {
            ItemName: '9 Grãos',
            ImgUrl: noveGraosAveiaEMel,
            ItemKcal: '999',
            ItemCarbohydrate: '999',
            ItemFat: '999',
            ItemProtein: '999',
            ItemPortion: '999',
        },
        {
            ItemName: '9 Grãos',
            ImgUrl: parmesaoEOregano,
            ItemKcal: '999',
            ItemCarbohydrate: '999',
            ItemFat: '999',
            ItemProtein: '999',
            ItemPortion: '999',
        },
        {
            ItemName: '9 Grãos',
            ImgUrl: tresQueijo,
            ItemKcal: '999',
            ItemCarbohydrate: '999',
            ItemFat: '999',
            ItemProtein: '999',
            ItemPortion: '999',
        },
    ]

    return (
    <div>
<ItemListContainer>
    <ItemListTitleStyle>{ItemListTitle}</ItemListTitleStyle>
    <ItensInRow>
        {
            pao.map((pao, index) => {
                return (
                    <Item 
                    ItemNameProps={pao.ItemName} 
                    ImgUrlProps={pao.ImgUrl}
                    />
                )
            })
        }
    </ItensInRow>
</ItemListContainer>
</div>
    )
}