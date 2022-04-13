import { ItemNameStyled, ItemBackground } from './styles'

interface ItemProps{
ImgUrlProps?: string;
ItemNameProps?: string;
ItemKcal?: string;
ItemCarbohydrate?: string;
ItemFat?: string;
ItemProtein?: string;
ItemPortion?: string;
}


export const Item: React.FC<ItemProps> = ({
    ImgUrlProps, 
    ItemNameProps, 
    ItemKcal, 
    ItemCarbohydrate, 
    ItemFat, 
    ItemProtein, 
    ItemPortion
}) => {
    return (
    <div >
<ItemBackground>
    <img src={ImgUrlProps} alt="" />
    <ItemNameStyled>{ItemNameProps}</ItemNameStyled>
    </ItemBackground>
</div>
    )
}