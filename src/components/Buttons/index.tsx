import { Button, ButtonPosition } from './styles'

interface ButtonsProps {
    buttonText1?: string;


}

export const Buttons: React.FC<ButtonsProps> = ({buttonText1}) => {
    return (<div>
        <ButtonPosition>
<Button Reset>{buttonText1}</Button>

</ButtonPosition>
</div>
    )
}