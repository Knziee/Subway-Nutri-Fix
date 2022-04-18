import { useState } from "react";
import {
  PlateContainer,
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
  SelectorsContainer,
  ButtonCentralizer,
  SandwichPosition,
  MultipleSelectorContainer,
} from "./styles";

import { Selectors } from "../Selectors";
import { MultipleSelectors } from "../MultipleSelectors";
import { PieChart, Pie, Cell } from "recharts";
import { Buttons } from "../Buttons";
import { ChartInfo } from "../ChartInfo";
import { Disclaimer } from "../Disclaimer";
import * as images from "../../assets/images";
import * as constants from "../../constants";

export const Plate: React.FC = () => {
  const [countSize, setCountSize] = useState(0);
  const [countBread, setCountBread] = useState(0);
  const [countFlavor, setCountFlavor] = useState(0);
  const [countCheese, setCountCheese] = useState(0);
  const [countExtra, setCountExtra] = useState(0);
  const [countSaladAlface, setCountSaladAlface] = useState(0);
  const [countSaladTomate, setCountSaladTomate] = useState(0);
  const [countSaladPimentao, setCountSaladPimentao] = useState(0);
  const [countSaladCebola, setCountSaladCebola] = useState(0);
  const [countSaladPicles, setCountSaladPicles] = useState(0);
  const [countSaladAzeitona, setCountSaladAzeitona] = useState(0);
  const [countSaladPepino, setCountSaladPepino] = useState(0);
  const [countSauce, setCountSauce] = useState(0);

  const carbCalc =
    constants.size[countSize].carb *
    (constants.bread[countBread].carb +
      constants.flavor[countFlavor].carb +
      constants.cheese[countCheese].carb +
      constants.extra[countExtra].carb +
      constants.saladAlface[countSaladAlface].carb +
      constants.saladTomate[countSaladTomate].carb +
      constants.saladPimentao[countSaladPimentao].carb +
      constants.saladCebola[countSaladCebola].carb +
      constants.saladPicles[countSaladPicles].carb +
      constants.saladAzeitona[countSaladAzeitona].carb +
      constants.saladPepino[countSaladPepino].carb +
      constants.sauce[countSauce].carb);
  const fatCalc =
    constants.size[countSize].fat *
    (constants.bread[countBread].fat +
      constants.flavor[countFlavor].fat +
      constants.cheese[countCheese].fat +
      constants.extra[countExtra].fat +
      constants.saladAlface[countSaladAlface].fat +
      constants.saladTomate[countSaladTomate].fat +
      constants.saladPimentao[countSaladPimentao].fat +
      constants.saladCebola[countSaladCebola].fat +
      constants.saladPicles[countSaladPicles].fat +
      constants.saladAzeitona[countSaladAzeitona].fat +
      constants.saladPepino[countSaladPepino].fat +
      constants.sauce[countSauce].fat);
  const proteinCalc =
    constants.size[countSize].protein *
    (constants.bread[countBread].protein +
      constants.flavor[countFlavor].protein +
      constants.cheese[countCheese].protein +
      constants.extra[countExtra].protein +
      constants.saladAlface[countSaladAlface].protein +
      constants.saladTomate[countSaladTomate].protein +
      constants.saladPimentao[countSaladPimentao].protein +
      constants.saladCebola[countSaladCebola].protein +
      constants.saladPicles[countSaladPicles].protein +
      constants.saladAzeitona[countSaladAzeitona].protein +
      constants.saladPepino[countSaladPepino].protein +
      constants.sauce[countSauce].protein);
  const kcalCalc =
    constants.size[countSize].kcal *
    (constants.bread[countBread].kcal +
      constants.flavor[countFlavor].kcal +
      constants.cheese[countCheese].kcal +
      constants.extra[countExtra].kcal +
      constants.saladAlface[countSaladAlface].kcal +
      constants.saladTomate[countSaladTomate].kcal +
      constants.saladPimentao[countSaladPimentao].kcal +
      constants.saladCebola[countSaladCebola].kcal +
      constants.saladPicles[countSaladPicles].kcal +
      constants.saladAzeitona[countSaladAzeitona].kcal +
      constants.saladPepino[countSaladPepino].kcal +
      constants.sauce[countSauce].kcal);
  const sodiumCalc =
    constants.size[countSize].sodium *
    (constants.bread[countBread].sodium +
      constants.flavor[countFlavor].sodium +
      constants.cheese[countCheese].sodium +
      constants.extra[countExtra].sodium +
      constants.saladAlface[countSaladAlface].sodium +
      constants.saladTomate[countSaladTomate].sodium +
      constants.saladPimentao[countSaladPimentao].sodium +
      constants.saladCebola[countSaladCebola].sodium +
      constants.saladPicles[countSaladPicles].sodium +
      constants.saladAzeitona[countSaladAzeitona].sodium +
      constants.saladPepino[countSaladPepino].sodium +
      constants.sauce[countSauce].sodium);

  const foodData = [
    { name: "Carboidrato", value: carbCalc },
    { name: "Gordura", value: fatCalc },
    { name: "Proteína", value: proteinCalc },
  ];
  const colors = ["#3F7EB8", "#DC6060", "#DCD760"];

  const radian = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
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
  const [isBreadOn, setIsBreadOn] = useState(true);
  const [isFlavorOn, setIsFlavorOn] = useState(false);
  const [isCheeseOn, setIsCheeseOn] = useState(false);
  const [isSaladAlfaceOn, setIsSaladAlfaceOn] = useState(false);
  const [isSaladTomateOn, setIsSaladTomateOn] = useState(false);
  const [isSaladPimentaoOn, setIsSaladPimentaoOn] = useState(false);
  const [isSaladCebolaOn, setIsCebolaOn] = useState(false);
  const [isSaladPiclesOn, setIsPiclesOn] = useState(false);
  const [isSaladAzeitonaOn, setIsAzeitonaOn] = useState(false);
  const [isSaladPepinoaOn, setIsPepinoaOn] = useState(false);
  const [isExtraOn, setIsExtraOn] = useState(false);
  const [isSauceOn, setIsSauceOn] = useState(false);

  return (
    <div>
      <ButtonCentralizer>
        <div
          onClick={() => {
            setCountSize(0);
            setCountBread(0);
            setCountFlavor(0);
            setCountCheese(0);
            setCountSaladAlface(0);
            setCountSaladTomate(0);
            setCountSaladPimentao(0);
            setCountSaladCebola(0);
            setCountSaladPicles(0);
            setCountSaladAzeitona(0);
            setCountSaladPepino(0);
            setCountExtra(0);
            setCountSauce(0);
          }}
        >
          <Buttons buttonText1="Reiniciar" />
        </div>
      </ButtonCentralizer>
      <InfoContainer>
        <GraphInfo>
          <ChartInfo
            ChartText1={carbCalc.toFixed(0) + "g"}
            ChartText2={fatCalc.toFixed(0) + "g"}
            ChartText3={proteinCalc.toFixed(0) + "g"}
          />
        </GraphInfo>
        <PieChart
          width={400}
          height={400}
          style={{ marginTop: "-3vw", transform: "scale(1.0)" }}
        >
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
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <KcalCircle>
          {/* kcal */}
          <p>Calorias</p>
          <span>{kcalCalc.toFixed(0)}</span>
        </KcalCircle>
      </InfoContainer>

      {/* sodium */}
      <SodiumBar>
        <img src={images.SodiumIcon} alt="" width={"60px"} />
        <SodiumBarText>Sódio: {sodiumCalc.toFixed(0) + "mg"}</SodiumBarText>
      </SodiumBar>

      <PlateContainer>
        <PlatePosition>
          {/* size */}
          <SizeDisplay>{constants.size[countSize].name}</SizeDisplay>
          <img src={images.pratoRedondoComSombra} alt="" />

          <PlateText>
            <div style={{ display: isBreadOn === false ? "none" : "block" }}>
              <p>{constants.bread[countBread].category}</p>
              {constants.bread[countBread].name}
            </div>
            <div style={{ display: isFlavorOn === false ? "none" : "block" }}>
              <p>{constants.flavor[countFlavor].category}</p>
              {constants.flavor[countFlavor].name}
            </div>
            <div style={{ display: isCheeseOn === false ? "none" : "block" }}>
              <p>{constants.cheese[countCheese].category}</p>
              {constants.cheese[countCheese].name}
            </div>

            <div
              style={{ display: isSaladAlfaceOn === false ? "none" : "block" }}
            >
              <p>{constants.saladAlface[countSaladAlface].category}</p>
              {constants.saladAlface[countSaladAlface].name}
            </div>
            <div
              style={{ display: isSaladTomateOn === false ? "none" : "block" }}
            >
              <p>{constants.saladTomate[countSaladTomate].category}</p>
              {constants.saladTomate[countSaladTomate].name}
            </div>
            <div
              style={{
                display: isSaladPimentaoOn === false ? "none" : "block",
              }}
            >
              <p>{constants.saladPimentao[countSaladPimentao].category}</p>
              {constants.saladPimentao[countSaladPimentao].name}
            </div>
            <div
              style={{ display: isSaladCebolaOn === false ? "none" : "block" }}
            >
              <p>{constants.saladCebola[countSaladCebola].category}</p>
              {constants.saladCebola[countSaladCebola].name}
            </div>
            <div
              style={{ display: isSaladPiclesOn === false ? "none" : "block" }}
            >
              <p>{constants.saladPicles[countSaladPicles].category}</p>
              {constants.saladPicles[countSaladPicles].name}
            </div>
            <div
              style={{
                display: isSaladAzeitonaOn === false ? "none" : "block",
              }}
            >
              <p>{constants.saladAzeitona[countSaladAzeitona].category}</p>
              {constants.saladAzeitona[countSaladAzeitona].name}
            </div>
            <div
              style={{ display: isSaladPepinoaOn === false ? "none" : "block" }}
            >
              <p>{constants.saladPepino[countSaladPepino].category}</p>
              {constants.saladPepino[countSaladPepino].name}
            </div>

            <div style={{ display: isExtraOn === false ? "none" : "block" }}>
              <p>{constants.extra[countExtra].category}</p>
              {constants.extra[countExtra].name}
            </div>
            <div style={{ display: isSauceOn === false ? "none" : "block" }}>
              <p>{constants.sauce[countSauce].category}</p>
              {constants.sauce[countSauce].name}
            </div>
          </PlateText>
        </PlatePosition>

        {/* constants.breads */}
        <SandwichPosition>
          <BreadPositionBottom>
            <img src={constants.bread[countBread].img2} alt="" />
          </BreadPositionBottom>
          <SaladPosition>
            <img src={constants.saladAlface[countSaladAlface].img} alt="" />
          </SaladPosition>
          <SaladPosition>
            <img src={constants.saladTomate[countSaladTomate].img} alt="" />
          </SaladPosition>
          <SaladPosition>
            <img src={constants.saladPimentao[countSaladPimentao].img} alt="" />
          </SaladPosition>
          <SaladPosition>
            <img src={constants.saladCebola[countSaladCebola].img} alt="" />
          </SaladPosition>
          <SaladPosition>
            <img src={constants.saladPicles[countSaladPicles].img} alt="" />
          </SaladPosition>
          <SaladPosition>
            <img src={constants.saladAzeitona[countSaladAzeitona].img} alt="" />
          </SaladPosition>
          <SaladPosition>
            <img src={constants.saladPepino[countSaladPepino].img} alt="" />
          </SaladPosition>
          <FlavorPosition>
            <img src={constants.flavor[countFlavor].img} alt="" />
          </FlavorPosition>
          <CheesePosition>
            <img
              src={constants.cheese[countCheese].img}
              alt=""
              width={"200px"}
            />
          </CheesePosition>
          <ExtraPosition>
            <img src={constants.extra[countExtra].img} alt="" />
          </ExtraPosition>
          <SaucePosition>
            <img src={constants.sauce[countSauce].img} alt="" />
          </SaucePosition>

          <BreadPositionTop>
            <img src={constants.bread[countBread].img} alt="" />
          </BreadPositionTop>
        </SandwichPosition>
      </PlateContainer>
      <SelectorsContainer>
        <div
          onClick={() => {
            countSize === constants.size.length - 1
              ? setCountSize(0)
              : setCountSize(countSize + 1);
          }}
        >
          <Selectors
            SelectorText={constants.size[countSize].name}
            SelectorTitleText="Tamanho"
          />
        </div>
        <div
          onClick={() => {
            countBread === constants.bread.length - 1
              ? setCountBread(0)
              : setCountBread(countBread + 1);
            setIsBreadOn(true);
            console.log("liguei o pão");
            setIsFlavorOn(false);
            setIsCheeseOn(false);

            setIsSaladAlfaceOn(false);
            setIsSaladTomateOn(false);
            setIsSaladPimentaoOn(false);
            setIsCebolaOn(false);
            setIsPiclesOn(false);
            setIsAzeitonaOn(false);
            setIsPepinoaOn(false);

            setIsExtraOn(false);
            setIsSauceOn(false);
          }}
        >
          <Selectors
            SelectorText={constants.bread[countBread].name}
            SelectorTitleText="Pão"
          />
        </div>
        <div
          onClick={() => {
            countFlavor === constants.flavor.length - 1
              ? setCountFlavor(0)
              : setCountFlavor(countFlavor + 1);
            setIsFlavorOn(true);
            console.log("liguei o sabor");
            setIsBreadOn(false);
            setIsCheeseOn(false);
            setIsSaladAlfaceOn(false);
            setIsSaladTomateOn(false);
            setIsSaladPimentaoOn(false);
            setIsCebolaOn(false);
            setIsPiclesOn(false);
            setIsAzeitonaOn(false);
            setIsPepinoaOn(false);
            setIsExtraOn(false);
            setIsSauceOn(false);
          }}
        >
          <Selectors
            SelectorText={constants.flavor[countFlavor].name}
            SelectorTitleText="Sabor"
          />
        </div>
        <div
          onClick={() => {
            countCheese === constants.cheese.length - 1
              ? setCountCheese(0)
              : setCountCheese(countCheese + 1);
            setIsCheeseOn(true);
            console.log("liguei o queijo");
            setIsFlavorOn(false);
            setIsBreadOn(false);

            setIsSaladAlfaceOn(false);
            setIsSaladTomateOn(false);
            setIsSaladPimentaoOn(false);
            setIsCebolaOn(false);
            setIsPiclesOn(false);
            setIsAzeitonaOn(false);
            setIsPepinoaOn(false);

            setIsExtraOn(false);
            setIsSauceOn(false);
          }}
        >
          <Selectors
            SelectorText={constants.cheese[countCheese].name}
            SelectorTitleText="queijo"
          />
        </div>

        <MultipleSelectorContainer>
          <div
            onClick={() => {
              countSaladAlface === 0
                ? setCountSaladAlface(1)
                : setCountSaladAlface(0);
              setIsSaladAlfaceOn(true);
              setIsSaladTomateOn(false);
              setIsSaladPimentaoOn(false);
              setIsCebolaOn(false);
              setIsPiclesOn(false);
              setIsAzeitonaOn(false);
              setIsPepinoaOn(false);

              setIsFlavorOn(false);
              setIsCheeseOn(false);
              setIsBreadOn(false);
              setIsExtraOn(false);
              setIsSauceOn(false);
            }}
          >
            <MultipleSelectors
              MultipleSelectorTitleText={constants.saladAlface[1].name}
              MultipleSelectorText={countSaladAlface === 1 ? "Com" : "Sem"}
            />
          </div>
          <div
            onClick={() => {
              countSaladTomate === 0
                ? setCountSaladTomate(1)
                : setCountSaladTomate(0);
              setIsSaladAlfaceOn(false);
              setIsSaladTomateOn(true);
              setIsSaladPimentaoOn(false);
              setIsCebolaOn(false);
              setIsPiclesOn(false);
              setIsAzeitonaOn(false);
              setIsPepinoaOn(false);

              setIsFlavorOn(false);
              setIsCheeseOn(false);
              setIsBreadOn(false);
              setIsExtraOn(false);
              setIsSauceOn(false);
            }}
          >
            <MultipleSelectors
              MultipleSelectorTitleText={constants.saladTomate[1].name}
              MultipleSelectorText={countSaladTomate === 1 ? "Com" : "Sem"}
            />
          </div>
          <div
            onClick={() => {
              countSaladPimentao === 0
                ? setCountSaladPimentao(1)
                : setCountSaladPimentao(0);
              setIsSaladAlfaceOn(false);
              setIsSaladTomateOn(false);
              setIsSaladPimentaoOn(true);
              setIsCebolaOn(false);
              setIsPiclesOn(false);
              setIsAzeitonaOn(false);
              setIsPepinoaOn(false);

              setIsFlavorOn(false);
              setIsCheeseOn(false);
              setIsBreadOn(false);
              setIsExtraOn(false);
              setIsSauceOn(false);
            }}
          >
            <MultipleSelectors
              MultipleSelectorTitleText={constants.saladPimentao[1].name}
              MultipleSelectorText={countSaladPimentao === 1 ? "Com" : "Sem"}
            />
          </div>
          <div
            onClick={() => {
              countSaladCebola === 0
                ? setCountSaladCebola(1)
                : setCountSaladCebola(0);
              setIsSaladAlfaceOn(false);
              setIsSaladTomateOn(false);
              setIsSaladPimentaoOn(false);
              setIsCebolaOn(true);
              setIsPiclesOn(false);
              setIsAzeitonaOn(false);
              setIsPepinoaOn(false);

              setIsFlavorOn(false);
              setIsCheeseOn(false);
              setIsBreadOn(false);
              setIsExtraOn(false);
              setIsSauceOn(false);
            }}
          >
            <MultipleSelectors
              MultipleSelectorTitleText={constants.saladCebola[1].name}
              MultipleSelectorText={countSaladCebola === 1 ? "Com" : "Sem"}
            />
          </div>
          <div
            onClick={() => {
              countSaladPicles === 0
                ? setCountSaladPicles(1)
                : setCountSaladPicles(0);
              setIsSaladAlfaceOn(false);
              setIsSaladTomateOn(false);
              setIsSaladPimentaoOn(false);
              setIsCebolaOn(false);
              setIsPiclesOn(true);
              setIsAzeitonaOn(false);
              setIsPepinoaOn(false);

              setIsFlavorOn(false);
              setIsCheeseOn(false);
              setIsBreadOn(false);
              setIsExtraOn(false);
              setIsSauceOn(false);
            }}
          >
            <MultipleSelectors
              MultipleSelectorTitleText={constants.saladPicles[1].name}
              MultipleSelectorText={countSaladPicles === 1 ? "Com" : "Sem"}
            />
          </div>
          <div
            onClick={() => {
              countSaladAzeitona === 0
                ? setCountSaladAzeitona(1)
                : setCountSaladAzeitona(0);
              setIsSaladAlfaceOn(false);
              setIsSaladTomateOn(false);
              setIsSaladPimentaoOn(false);
              setIsCebolaOn(false);
              setIsPiclesOn(false);
              setIsAzeitonaOn(true);
              setIsPepinoaOn(false);

              setIsFlavorOn(false);
              setIsCheeseOn(false);
              setIsBreadOn(false);
              setIsExtraOn(false);
              setIsSauceOn(false);
            }}
          >
            <MultipleSelectors
              MultipleSelectorTitleText={constants.saladAzeitona[1].name}
              MultipleSelectorText={countSaladAzeitona === 1 ? "Com" : "Sem"}
            />
          </div>
          <div
            onClick={() => {
              countSaladPepino === 0
                ? setCountSaladPepino(1)
                : setCountSaladPepino(0);
              setIsSaladAlfaceOn(false);
              setIsSaladTomateOn(false);
              setIsSaladPimentaoOn(false);
              setIsCebolaOn(false);
              setIsPiclesOn(false);
              setIsAzeitonaOn(false);
              setIsPepinoaOn(true);

              setIsFlavorOn(false);
              setIsCheeseOn(false);
              setIsBreadOn(false);
              setIsExtraOn(false);
              setIsSauceOn(false);
            }}
          >
            <MultipleSelectors
              MultipleSelectorTitleText={constants.saladPepino[1].name}
              MultipleSelectorText={countSaladPepino === 1 ? "Com" : "Sem"}
            />
          </div>
        </MultipleSelectorContainer>
        <div
          onClick={() => {
            countExtra === constants.extra.length - 1
              ? setCountExtra(0)
              : setCountExtra(countExtra + 1);
            setIsExtraOn(true);
            console.log("liguei o constants.extra");
            setIsFlavorOn(false);
            setIsCheeseOn(false);
            setIsSaladAlfaceOn(false);
            setIsSaladTomateOn(false);
            setIsSaladPimentaoOn(false);
            setIsCebolaOn(false);
            setIsPiclesOn(false);
            setIsAzeitonaOn(false);
            setIsPepinoaOn(false);
            setIsBreadOn(false);
            setIsSauceOn(false);
          }}
        >
          <Selectors
            SelectorText={constants.extra[countExtra].name}
            SelectorTitleText="Adicional"
          />
        </div>
        <div
          onClick={() => {
            countSauce === constants.sauce.length - 1
              ? setCountSauce(0)
              : setCountSauce(countSauce + 1);
            setIsSauceOn(true);
            console.log("liguei o constants.sauce");
            setIsFlavorOn(false);
            setIsCheeseOn(false);
            setIsSaladAlfaceOn(false);
            setIsSaladTomateOn(false);
            setIsSaladPimentaoOn(false);
            setIsCebolaOn(false);
            setIsPiclesOn(false);
            setIsAzeitonaOn(false);
            setIsPepinoaOn(false);
            setIsExtraOn(false);
            setIsBreadOn(false);
          }}
        >
          <Selectors
            SelectorText={constants.sauce[countSauce].name}
            SelectorTitleText="Molho"
          />
        </div>
      </SelectorsContainer>
      <Disclaimer />
    </div>
  );
};
