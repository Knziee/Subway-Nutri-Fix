import { SelectorButtton } from './styles'
interface SelectorProps {
    SelectorText: string;
}


export const Selectors: React.FC<SelectorProps> = ({SelectorText}) => {
    return (<div>
<SelectorButtton>
{SelectorText}
</SelectorButtton>
</div>
    )
}