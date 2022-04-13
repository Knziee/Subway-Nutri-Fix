import { ItemListContainer, ItemListTitleStyle, ItensInRow } from './styles'
import {Item} from '../../Item'
import steakChurrasco from "../../../assets/images/steakChurrasco.svg"
import  frangoTeryaki  from '../../../assets/images/frangoTeryaki.svg';
import  vegetariano  from '../../../assets/images/vegetariano.svg';


interface ItemListProps{
ItemListTitle?: string
ItemListConst?: string
}

export const Sabor: React.FC <ItemListProps> = ({ItemListTitle}) => {

    const sabor = [
        {
            ItemName: '9 Grãos',
            ImgUrl: steakChurrasco,
            ItemKcal: '999',
            ItemCarbohydrate: '999',
            ItemFat: '999',
            ItemProtein: '999',
            ItemPortion: '999',
        },
        {
            ItemName: '9 Grãos',
            ImgUrl: frangoTeryaki,
            ItemKcal: '999',
            ItemCarbohydrate: '999',
            ItemFat: '999',
            ItemProtein: '999',
            ItemPortion: '999',
        },
        {
            ItemName: '9 Grãos',
            ImgUrl: vegetariano,
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
            sabor.map((sabor, index) => {
                return (
                    <Item 
                    ItemNameProps={sabor.ItemName} 
                    ImgUrlProps={sabor.ImgUrl}
                    />
                )
            })
        }
    </ItensInRow>
</ItemListContainer>
</div>
    )
}