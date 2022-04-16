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
    SodiumBarText,
    FlavorPosition,
    CheesePosition,
    ExtraPosition,
    SaladPosition,
    SaucePosition,
    TempPosition,
    ButtonsContainer
   } from './styles'
import GraphInfoImg from '../../assets/images/GraficoLegenda.svg'
import PlateImg from '../../assets/images/Prato1pixelzada.svg'
import ArrowSodium from '../../assets/images/Seta.svg'
import PlateImg2 from '../../assets/images/prato2pixelzada.svg'
import {Selectors} from '../Selectors';
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
//sabores
import steak from '../../assets/images/sabores/CARNE.svg'
import frango from '../../assets/images/sabores/FRANGO.svg'
//queijo
import swiss from '../../assets/images/queijos/queijosuiço.svg'
import cheddar from '../../assets/images/queijos/queijocheddar.svg'
import mozzarella from '../../assets/images/queijos/queijomussarela.svg'
//adicional
import bacon from '../../assets/images/adicionais/bacon.svg'
import pepperoni from '../../assets/images/adicionais/pepperoni.svg'
import salami from '../../assets/images/adicionais/salame.svg'
import creamyCheddar from '../../assets/images/adicionais/cheddarCremoso.svg'
import creamCheese from '../../assets/images/adicionais/creamCheese.svg'
//salad
import alfacePicada from '../../assets/images/salada/alfacePicada.svg'
import tomate from '../../assets/images/salada/tomate.svg'
import pimentaoverde from '../../assets/images/salada/pimentaoverde.svg'
import cebolafatiada from '../../assets/images/salada/cebolafatiada.svg'
import picles from '../../assets/images/salada/picles.svg'
import azeitonas from '../../assets/images/salada/azeitonas.svg'
import pepino from '../../assets/images/salada/pepino.svg'
//sauce
import barbecue from '../../assets/images/molhos/barbecue.svg'
import cebolaAgridoce from '../../assets/images/molhos/cebolaAgridoce.svg'
import chipotle from '../../assets/images/molhos/chipottle.svg'
import maionese from '../../assets/images/molhos/maionese.svg'
import maioneseTemperada from '../../assets/images/molhos/maioneseTemperada.svg'
import MostardaEMel from '../../assets/images/molhos/MostardaEMel.svg'
import parmesao from '../../assets/images/molhos/parmesao.svg'
import supreme from '../../assets/images/molhos/supreme.svg'

export const Plate: React.FC = () => {
const [countSize, setCountSize] = useState(0)
const [countBread, setCountBread] = useState(0)
const [countFlavor, setCountFlavor] = useState(0)
const [countCheese, setCountCheese] = useState(0)
const [countExtra, setCountExtra] = useState(0)
const [countSalad, setCountSalad] = useState(0)
const [countSauce, setCountSauce] = useState(0)

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
    sodium:226,
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
    sodium:271,
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
    sodium:383,
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
    sodium:214,
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

let flavor: any
flavor = [

      {
      name: 'Steak Churrasco',
      category: 'Sabor',
      img: steak,
      carb:6.1 ,
      fat:9.6 ,
      protein:9,
      kcal:147,
      sodium:480,
      },  
      {
        name: 'Frango Teriyaki',
        category: 'Sabor',
        img: frango,
        carb:3 ,
        fat:1.5 ,
        protein:13.2,
        kcal:78,
        sodium:258,
        },  
        {
          name: 'Vegetariano',
          category: 'Sabor',
          img: '',
          carb:0 ,
          fat:0 ,
          protein:0,
          kcal:0,
          sodium:0,
          },  
  ]

  let cheese: any
  cheese = [
    {
      name: 'Nenhum',
      category: 'Queijo',
      img: '',
      carb:0 ,
      fat:0 ,
      protein:0,
      kcal:0,
      sodium:0,
      },  

      {
      name: 'Suiço',
      category: 'Queijo',
      img: swiss,
      carb:0.8 ,
      fat:3.8 ,
      protein:1.4,
      kcal:44,
      sodium:140,
      },  
      {
        name: 'Cheddar',
        category: 'Queijo',
        img: cheddar,
        carb:0.8 ,
        fat:3.8 ,
        protein:1.4,
        kcal:43,
        sodium:171,
        },  
        {
          name: 'Mussarela',
          category: 'Queijo',
          img: mozzarella,
          carb:30 ,
          fat:3 ,
          protein:2.5,
          kcal:38,
          sodium:49,
          },  
  ]

  let extra: any
  extra = [
    {
      name: 'Nenhum',
      category: 'Adicional',
      img: '',
      carb:0 ,
      fat:0 ,
      protein:0,
      kcal:0,
      sodium:0,
      },  
      {
        name: 'Bacon',
        category: 'Adicional',
        img: bacon,
        carb:0.6 ,
        fat:5.6 ,
        protein:4.8,
        kcal:72,
        sodium:282,
        },  
        {
          name: 'Peperoni',
          category: 'Adicional',
          img: pepperoni,
          carb:0 ,
          fat:7.6 ,
          protein:3.5,
          kcal:83,
          sodium:258,
          },  
          {
            name: 'Salame',
            category: 'Adicional',
            img: salami,
            carb:0 ,
            fat:6.5 ,
            protein:5,
            kcal:78,
            sodium:323,
            },  
            {
              name: 'Cheddar Cremoso',
              category: 'Adicional',
              img: creamyCheddar,
              carb:2.4 ,
              fat:6.3 ,
              protein:2.3,
              kcal:75,
              sodium:376,
              },  
              {
                name: 'Cream Cheese',
                category: 'Adicional',
                img: creamCheese,
                carb:1.7 ,
                fat:8.8 ,
                protein:1.7,
                kcal:92,
                sodium:121,
                },  

      {
      name: 'Dobro de Queijo: Suiço',
      category: 'Adicional',
      img: swiss,
      carb:0.8 ,
      fat:3.8 ,
      protein:1.4,
      kcal:44,
      sodium:140,
      },  
      {
        name: 'Dobro de Queijo: Cheddar',
        category: 'Adicional',
        img: cheddar,
        carb:0.8 ,
        fat:3.8 ,
        protein:1.4,
        kcal:43,
        sodium:171,
        },  
        {
          name: 'Dobro de Queijo: Mussarela',
          category: 'Adicional',
          img: mozzarella,
          carb:30 ,
          fat:3 ,
          protein:2.5,
          kcal:38,
          sodium:49,
          },  
  ]

  let salad: any
  salad = [
    {
      name: 'Nenhum',
      category: 'Salada',
      img: '',
      carb:0 ,
      fat:0 ,
      protein:0,
      kcal:0,
      sodium:0,
      },  

      {
      name: 'Alface',
      category: 'Salada',
      img: alfacePicada,
      carb:0.2,
      fat:0 ,
      protein:0.2,
      kcal:2.5,
      sodium:1.9,
      },  
      {
        name: 'Tomate',
        category: 'Salada',
        img: tomate,
        carb:1.4,
        fat:0.1 ,
        protein:0.3,
        kcal:6.3,
        sodium:1.7,
        },  
        {
          name: 'Pimentão Verde',
          category: 'Salada',
          img: pimentaoverde,
          carb:0.3 ,
          fat:0,
          protein:0.1,
          kcal:1.4,
          sodium:0.2,
          },  
          {
            name: 'Cebola',
            category: 'Salada',
            img: cebolafatiada,
            carb:0.7 ,
            fat:0,
            protein:0.1,
            kcal:2.8,
            sodium:0.3,
            },  
            {
              name: 'Picles',
              category: 'Salada',
              img: picles,
              carb:0.1 ,
              fat:0,
              protein:0,
              kcal:0.4,
              sodium:49,
              },  
              {
                name: 'Azeitona',
                category: 'Salada',
                img: azeitonas,
                carb:0.1 ,
                fat:0,
                protein:0,
                kcal:0.4,
                sodium:49,
                },  
                {
                  name: 'Pepino',
                  category: 'Salada',
                  img: pepino,
                  carb:0.5 ,
                  fat:0,
                  protein:0.1,
                  kcal:2.1,
                  sodium:0.3,
                  },   
  ]

  let sauce: any
  sauce = [
    {
      name: 'Nenhum',
      category: 'Molho',
      img: '',
      carb:0 ,
      fat:0 ,
      protein:0,
      kcal:0,
      sodium:0,
      },  

      {
      name: 'Barbecue',
      category: 'Molho',
      img: barbecue,
      carb:4.5,
      fat:0.2 ,
      protein:0.1,
      kcal:20,
      sodium:162,
      },  
      {
        name: 'Cebola Agridoce',
        category: 'Molho',
        img: cebolaAgridoce,
        carb:6.4,
        fat:0 ,
        protein:0,
        kcal:26,
        sodium:64,
        },  
        {
          name: 'Chipotle',
          category: 'Molho',
          img: chipotle,
          carb:1.6 ,
          fat:6.5,
          protein:0.2,
          kcal:69,
          sodium:135,
          },  
          {
            name: 'Maionese',
            category: 'Molho',
            img: maionese,
            carb:0.1,
            fat:11,
            protein:0.1,
            kcal:102,
            sodium:71,
            },  
            {
              name: 'Maionese Temperada',
              category: 'Molho',
              img: maioneseTemperada,
              carb:1.1 ,
              fat:4.3,
              protein:0,
              kcal:43,
              sodium:125,
              },  
              {
                name: 'Mostarde e Mel',
                category: 'Molho',
                img: MostardaEMel,
                carb:5 ,
                fat:0.2,
                protein:0.2,
                kcal:20,
                sodium:68,
                },  
                {
                  name: 'Parmesão',
                  category: 'Molho',
                  img: parmesao,
                  carb:1.3 ,
                  fat:5,
                  protein:0.2,
                  kcal:50,
                  sodium:153,
                  },   
                  {
                    name: 'Supreme',
                    category: 'Molho',
                    img: supreme,
                    carb:2.2 ,
                    fat:10,
                    protein:0.2,
                    kcal:237,
                    sodium:237,
                    },  
  ]


  const carbCalc = size[countSize].carb * (bread[countBread].carb + flavor[countFlavor].carb + cheese[countCheese].carb + extra[countExtra].carb + salad[countSalad].carb + sauce[countSauce].carb)
  const fatCalc = size[countSize].fat *  (bread[countBread].fat + flavor[countFlavor].fat + cheese[countCheese].fat + extra[countExtra].fat + salad[countSalad].fat + sauce[countSauce].fat)
  const proteinCalc = size[countSize].protein *  (bread[countBread].protein + flavor[countFlavor].protein + cheese[countCheese].protein + extra[countExtra].protein + salad[countSalad].protein + sauce[countSauce].protein)
  const kcalCalc = size[countSize].kcal *  (bread[countBread].kcal + flavor[countFlavor].kcal + cheese[countCheese].kcal + extra[countExtra].kcal + salad[countSalad].kcal + sauce[countSauce].kcal)
  const sodiumCalc = size[countSize].sodium *  (bread[countBread].sodium + flavor[countFlavor].sodium + cheese[countCheese].sodium + extra[countExtra].sodium + salad[countSalad].sodium + sauce[countSauce].sodium)

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


// estados do texto
const [isBreadOn, setIsBreadOn] = useState(true)
const [isFlavorOn, setIsFlavorOn] = useState(false)
const [isCheeseOn, setIsCheeseOn] = useState(false)
const [isSaladOn, setIsSaladOn] = useState(false)
const [isExtraOn, setIsExtraOn] = useState(false)
const [isSauceOn, setIsSauceOn] = useState(false)

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
<PlatePosition >

  {/* size */}
<SizeDisplay>
  {size[countSize].name}
</SizeDisplay>
<img src={PlateImg2} alt ='' />
<PlateText>
  <div  style={{display: isBreadOn === false ?  'none' :  'block'}}>
<p>{bread[countBread].category}</p>
{bread[countBread].name}
</div>
<div  style={{display: isFlavorOn === false ?  'none' :  'block'}}>
<p>{flavor[countFlavor].category}</p>
{flavor[countFlavor].name}
</div>
<div  style={{display: isCheeseOn === false ?  'none' :  'block'}}>
<p>{cheese[countCheese].category}</p>
{cheese[countCheese].name}
</div>
<div  style={{display: isSaladOn === false ?  'none' :  'block'}}>
<p>{salad[countSalad].category}</p>
{salad[countSalad].name}
</div>
<div  style={{display: isExtraOn === false ?  'none' :  'block'}}>
<p>{extra[countExtra].category}</p>
{extra[countExtra].name}
</div>
<div  style={{display: isSauceOn === false ?  'none' :  'block'}}>
<p>{sauce[countSauce].category}</p>
{sauce[countSauce].name}
</div>
</PlateText>
</PlatePosition>

{/* breads */}
<BreadPositionBottom>
<img src={bread[countBread].img2} alt ='' />
</BreadPositionBottom>
<SaladPosition><img src = {salad[countSalad].img} alt=''/></SaladPosition>
<FlavorPosition><img src = {flavor[countFlavor].img} alt=''/></FlavorPosition>
<CheesePosition><img src = {cheese[countCheese].img} alt=''/></CheesePosition>
<ExtraPosition><img src = {extra[countExtra].img} alt=''/></ExtraPosition>
<SaucePosition><img src = {sauce[countSauce].img} alt=''/></SaucePosition>



<BreadPositionTop>
  <img src={bread[countBread].img} alt ='' />
  </BreadPositionTop>

</PlateContainer>
<ButtonsContainer>
<div onClick={() => 
  {countSize === size.length-1 ?  setCountSize(0) : setCountSize(countSize + 1);
   }}>
<Selectors  SelectorText='Tamanho'/>



</div>
<div onClick={() => 
{countBread === bread.length-1 ?  setCountBread(0) : setCountBread(countBread + 1); 
  setIsBreadOn(true); 
  console.log('liguei o pão');
  setIsFlavorOn(false);
  setIsCheeseOn(false);
  setIsSaladOn(false);
  setIsExtraOn(false);
  setIsSauceOn(false);
  }}>

<Selectors  SelectorText='Pão'/>
</div>
<div onClick={() => 
{countFlavor === flavor.length-1 ?  setCountFlavor(0) : setCountFlavor(countFlavor + 1);
   setIsFlavorOn(true);
    console.log('liguei o sabor');
    setIsBreadOn(false);
    setIsCheeseOn(false);
    setIsSaladOn(false);
    setIsExtraOn(false);
    setIsSauceOn(false);
     }}>

<Selectors  SelectorText='Sabor'/>
</div>
<div onClick={() => 
{countCheese === cheese.length-1 ?  setCountCheese(0) : setCountCheese(countCheese + 1);
   setIsCheeseOn(true);
    console.log('liguei o queijo');
    setIsFlavorOn(false);
    setIsBreadOn(false);
    setIsSaladOn(false);
    setIsExtraOn(false);
    setIsSauceOn(false);
     }}>

<Selectors  SelectorText='queijo'/>
</div>
<div onClick={() => 
{countSalad === salad.length-1 ?  setCountSalad(0) : setCountSalad(countSalad + 1);
   setIsSaladOn(true);
    console.log('liguei o salada');
    setIsFlavorOn(false);
    setIsCheeseOn(false);
    setIsBreadOn(false);
    setIsExtraOn(false);
    setIsSauceOn(false);
     }}>

<Selectors  SelectorText='Salada'/>
</div>
<div onClick={() => 
{countExtra === extra.length-1 ?  setCountExtra(0) : setCountExtra(countExtra + 1);
   setIsExtraOn(true);
    console.log('liguei o extra');
    setIsFlavorOn(false);
    setIsCheeseOn(false);
    setIsSaladOn(false);
    setIsBreadOn(false);
    setIsSauceOn(false);
     }}>

<Selectors  SelectorText='Adicional'/>
</div>
<div onClick={() => 
{countSauce === sauce.length-1 ?  setCountSauce(0) : setCountSauce(countSauce + 1);
   setIsSauceOn(true);
    console.log('liguei o sauce');
    setIsFlavorOn(false);
    setIsCheeseOn(false);
    setIsSaladOn(false);
    setIsExtraOn(false);
    setIsBreadOn(false);
     }}>

<Selectors  SelectorText='Molho'/>
</div>
</ButtonsContainer>
</div>
            )



}