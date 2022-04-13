import { ItemListContainer, ItemListTitleStyle, ItensInRow } from './styles'
import {Item} from '../../Item'
import Size30cm from "../../../assets/images/size30.svg"
import  Size15cm  from '../../../assets/images/size15.svg';

interface ItemListProps{
ItemListTitle?: string
ItemListConst?: string
}

export const Molho: React.FC <ItemListProps> = ({ItemListTitle}) => {

    const molho = [
        {
            ItemName: '9 Grãos',
            ImgUrl: '9graos',
            ItemKcal: '999',
            ItemCarbohydrate: '999',
            ItemFat: '999',
            ItemProtein: '999',
            ItemPortion: '999',
        },
        {
            ItemName: '9 Grãos',
            ImgUrl: '9graos',
            ItemKcal: '999',
            ItemCarbohydrate: '999',
            ItemFat: '999',
            ItemProtein: '999',
            ItemPortion: '999',
        },
        {
            ItemName: '9 Grãos',
            ImgUrl: '9graos',
            ItemKcal: '999',
            ItemCarbohydrate: '999',
            ItemFat: '999',
            ItemProtein: '999',
            ItemPortion: '999',
        },
        {
            ItemName: '9 Grãos',
            ImgUrl: '9graos',
            ItemKcal: '999',
            ItemCarbohydrate: '999',
            ItemFat: '999',
            ItemProtein: '999',
            ItemPortion: '999',
        },
        {
            ItemName: '9 Grãos',
            ImgUrl: '9graos',
            ItemKcal: '999',
            ItemCarbohydrate: '999',
            ItemFat: '999',
            ItemProtein: '999',
            ItemPortion: '999',
        },
        {
            ItemName: '9 Grãos',
            ImgUrl: '9graos',
            ItemKcal: '999',
            ItemCarbohydrate: '999',
            ItemFat: '999',
            ItemProtein: '999',
            ItemPortion: '999',
        },
        {
            ItemName: '9 Grãos',
            ImgUrl: '9graos',
            ItemKcal: '999',
            ItemCarbohydrate: '999',
            ItemFat: '999',
            ItemProtein: '999',
            ItemPortion: '999',
        },
        {
            ItemName: '9 Grãos',
            ImgUrl: '9graos',
            ItemKcal: '999',
            ItemCarbohydrate: '999',
            ItemFat: '999',
            ItemProtein: '999',
            ItemPortion: '999',
        },
        {
            ItemName: '9 Grãos',
            ImgUrl: '9graos',
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
            molho.map((molho, index) => {
                return (
                    <Item 
                    ItemNameProps={molho.ItemName} 
                    ImgUrlProps={molho.ImgUrl}
                    />
                )
            })
        }
    </ItensInRow>
</ItemListContainer>
</div>
    )
}