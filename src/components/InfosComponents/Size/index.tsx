import { ItemListContainer, ItemListTitleStyle, ItensInRow } from './styles'
import {Item} from '../../Item'
import Size30cm from "../../../assets/images/size30.svg"
import  Size15cm  from '../../../assets/images/size15.svg';

interface ItemListProps{
ItemListTitle?: string
ItemListConst?: string
}

export const Size: React.FC <ItemListProps> = ({ItemListTitle}) => {
    const tamanho = [
        {
            ItemName: '30 cm',
            ImgUrl: Size30cm,
            ItemKcal: '*2',
            ItemCarbohydrate: '*2',
            ItemFat: '*2',
            ItemProtein: '*2',
            ItemPortion: '*2',
        },
        {
            ItemName: '15 cm',
            ImgUrl: Size15cm,
            ItemKcal: '*1',
            ItemCarbohydrate: '*1',
            ItemFat: '*1',
            ItemProtein: '*1',
            ItemPortion: '*1',
        },
    ]

    return (
    <div>
<ItemListContainer>
    <ItemListTitleStyle>{ItemListTitle}</ItemListTitleStyle>
    <ItensInRow>
        {
            tamanho.map((tamanho, index) => {
                return (
                    <Item 
                    ItemNameProps={tamanho.ItemName} 
                    ImgUrlProps={tamanho.ImgUrl}
                    />
                )
            })
        }
    </ItensInRow>
</ItemListContainer>
</div>
    )
}