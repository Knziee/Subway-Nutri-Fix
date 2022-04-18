import { SelectorButtton, SelectorTitle } from "./styles";
interface SelectorProps {
  SelectorText?: string;
  SelectorTitleText?: string;
}

export const Selectors: React.FC<SelectorProps> = ({
  SelectorText,
  SelectorTitleText,
}) => {
  return (
    <div>
      <SelectorTitle>{SelectorTitleText}</SelectorTitle>
      <SelectorButtton>{SelectorText}</SelectorButtton>
    </div>
  );
};
