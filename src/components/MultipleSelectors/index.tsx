import { MultipleSelectorButtton, MultipleSelectorTitle } from "./styles";
interface MultipleSelectorProps {
    MultipleSelectorText?: string;
    MultipleSelectorTitleText?: string;
}

export const MultipleSelectors: React.FC<MultipleSelectorProps> = ({
    MultipleSelectorText,
    MultipleSelectorTitleText,
}) => {
    return (
        <div>
            <MultipleSelectorTitle>{MultipleSelectorTitleText}</MultipleSelectorTitle>
            <MultipleSelectorButtton>{MultipleSelectorText}</MultipleSelectorButtton>
        </div>
    );
};
