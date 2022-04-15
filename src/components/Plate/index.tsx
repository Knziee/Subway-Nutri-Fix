import { useState } from 'react'
import { 
  PlateContainer ,
  BreadPositionTop,
   PlatePosition,
    GraphInfo, 
    BreadPositionBottom, 
    InfoContainer, 
    PlateText,
    KcalCircle,
    SizeDisplay,
    SodiumBar,
    SodiumBarText
   } from './styles'
import GraphInfoImg from '../../assets/images/GraficoLegenda.svg'
import PlateImg from '../../assets/images/Prato1pixelzada.svg'
import ArrowSodium from '../../assets/images/Seta.svg'
import PlateImg2 from '../../assets/images/prato2pixelzada.svg'
import {Buttons} from '../Buttons';
import { PieChart, Pie, Cell } from "recharts";

//paes
import noveGraos from '../../assets/images/paes/9graosCima.svg'
import tresQueijos from '../../assets/images/paes/3queijosCima.svg'
import parmesaEOregano from '../../assets/images/paes/parmesaoComOreganoCima.svg'
import aveiaEMel from '../../assets/images/paes/aveiaEmelCima.svg'
import italianoBranco from '../../assets/images/paes/brancItalianoCima.svg'
import noveGraosInferior from '../../assets/images/paes/9graosBaixo.svg'
import tresQueijosInferior from '../../assets/images/paes/3queijosBaixo.svg'
import parmesaEOreganoInferior from '../../assets/images/paes/parmesaoComOreganoBaixo.svg'
import aveiaEMelInferior from '../../assets/images/paes/aveiaEmelBaixo.svg'
import italianoBrancoInferior from '../../assets/images/paes/brancItalianoBaixo.svg'

export const Plate: React.FC = () => {
const [countSize, setCountSize] = useState(0)
const [countBread, setCountBread] = useState(0)

let size: any
size = [
  {
    name: '15cm',
    category: 'Size',
    carb: 1,
    fat:1,
    protein:1,
    kcal:1,
    sodium: 1,
    },  
    {
      name: '30cm',
      category: 'Size',
      carb:2,
      fat:2,
      protein:2,
      kcal:2,
      sodium: 2,
      },
]

let bread: any

bread = [
    {
    name: '9 Grãos',
    category: 'Pão',
    img: noveGraos,
    img2: noveGraosInferior,
    carb:40,
    fat:0.3,
    protein:8.5,
    kcal:208,
    sodium:226.
    },  
    {
    name: '3 Queijos',
    category: 'Pão',
    img: tresQueijos,
    img2: tresQueijosInferior,
    carb:36,
    fat:1.3,
    protein:12,
    kcal:219,
    sodium:271.
    },
    {
    name: 'Parmesão e Oregano',
    category: 'Pão',
    img: parmesaEOregano,
    img2: parmesaEOreganoInferior,
    carb:37,
    fat:0.4,
    protein:11,
    kcal:205,
    sodium:383.
    },  
    {
    name: 'Italiano Branco',
    category: 'Pão',
    img: italianoBranco,
    img2: italianoBrancoInferior,
    carb:36,
    fat:0.3,
    protein:11,
    kcal:198,
    sodium:214.
    },       
        // {
    // name: '9 Grãos Aveia e Mel',
    // category: 'Pão',
    // img: aveiaEMel,
    // img2: aveiaEMelInferior,
    // carb:999,
    // fat:999,
    // protein:999,
    // kcal:999,
    // },
  ]  
  const carbCalc = size[countSize].carb * bread[countBread].carb 
  const fatCalc = size[countSize].fat *  bread[countBread].fat 
  const proteinCalc = size[countSize].protein *  bread[countBread].protein 
  const kcalCalc = size[countSize].kcal *  bread[countBread].kcal 
  const sodiumCalc = size[countSize].kcal *  bread[countBread].sodium 

  const foodData = [
    { name: "Carboidrato", value: carbCalc },
    { name: "Gordura", value: fatCalc },
    { name: "Proteína", value: proteinCalc },
    
  ];
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];

  const radian = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * radian);
  const y = cy + radius * Math.sin(-midAngle * radian);

  return (
    <text 
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

    return (<div>
<InfoContainer>
<GraphInfo>
{/* <img src={GraphInfoImg} alt=''/> */}
</GraphInfo>
<PieChart width={400} height={400} style={{ marginTop: '-3vw', transform:'scale(1.0)'
}}>
        <Pie
          data={foodData}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {foodData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
      <KcalCircle>
        {/* kcal */}
<p>Calorias</p>
<span>{kcalCalc}</span>
</KcalCircle>

</InfoContainer>

{/* sodium */}
<SodiumBar>
<img src ={ArrowSodium} alt='' />
  <SodiumBarText>

  Sódio: {sodiumCalc}
  </SodiumBarText>
</SodiumBar>

<PlateContainer>
<PlatePosition>

  {/* size */}
<SizeDisplay>
  {size[countSize].name}
</SizeDisplay>
<img src={PlateImg2} alt ='' />
<PlateText>
<p>{bread[countBread].category}</p>
{bread[countBread].name}
</PlateText>
</PlatePosition>

{/* breads */}
<BreadPositionBottom>
<img src={bread[countBread].img2} alt ='' />
</BreadPositionBottom>
<BreadPositionTop>
  <img src={bread[countBread].img} alt ='' />
  </BreadPositionTop>

<p>ta na array {countBread} </p>

<button onClick={() => countBread === bread.length-1 ?  setCountBread(0) : setCountBread(countBread + 1)}>
    BREAD
</button>

<button onClick={() => countSize === size.length-1 ?  setCountSize(0) : setCountSize(countSize + 1)}>
    SIZE
</button>

</PlateContainer>
</div>
            )



}