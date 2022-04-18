import { BackgroundChart, ChartInfoColor, ChartAndBackgroundInfoContainer, ChartInfoContainer } from './styles'

interface ChartProps {
    ChartText1?: string;
    ChartText2?: string;
    ChartText3?: string;
}

export const ChartInfo: React.FC<ChartProps> = ({ChartText1, ChartText2, ChartText3}) => {
    return (<div>
        <ChartAndBackgroundInfoContainer>
<ChartInfoContainer>
    <p><ChartInfoColor style={{backgroundColor:'#3F7EB8'}}/>Carboídratos: {ChartText1}</p>
    <p><ChartInfoColor style={{backgroundColor:'#DC6060'}}/>Gordura: {ChartText2}</p>
    <p><ChartInfoColor style={{backgroundColor:'#DCD760'}}/>Proteínas: {ChartText3}</p>
    </ChartInfoContainer>
    <BackgroundChart/>
    </ChartAndBackgroundInfoContainer>
</div>
    )
}

