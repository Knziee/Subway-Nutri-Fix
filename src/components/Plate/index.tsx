import { useState } from 'react'
import { PlateContainer,BreadPositionTop,PlatePosition, GraphInfo, BreadPositionBottom, InfoContainer } from './styles'
import GraphInfoImg from '../../assets/images/GraficoLegenda.svg'
import PlateImg from '../../assets/images/Prato1pixelzada.svg'
import PlateImg2 from '../../assets/images/prato2pixelzada.svg'
import {Buttons} from '../Buttons';

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

interface SandwichProps {

}

export const Plate: React.FC = () => {
const [count, setCount] = useState(0)

  const paes = [
    {
    name: '',
    img: noveGraos,
    img2: noveGraosInferior,
    kcal:'',
    fat:'',
    protein:'',
    },  
    {
    name: '',
    img: tresQueijos,
    img2: tresQueijosInferior,
    },
    {
    name: '',
    img: parmesaEOregano,
    img2: parmesaEOreganoInferior,
    },  
    {
    name: '',
    img: aveiaEMel,
    img2: aveiaEMelInferior,
    },
    {
    name: '',
    img: italianoBranco,
    img2: italianoBrancoInferior,
    },       
  ]



    return (<div>
<InfoContainer>
<GraphInfo>
<img src={GraphInfoImg} alt=''/>
</GraphInfo>
</InfoContainer>

<PlateContainer>
<PlatePosition>
<img src={PlateImg2} alt ='' />
</PlatePosition>

{/* paes */}
<BreadPositionBottom>
<img src={paes[count].img2} alt ='' />
</BreadPositionBottom>
<BreadPositionTop>
  <img src={paes[count].img} alt ='' />
  </BreadPositionTop>

<p>ta na array {count} </p>

<button onClick={() => count === paes.length-1 ?  setCount(0) : setCount(count + 1)}>
    clica em eu funciona pfvr
</button>

</PlateContainer>
</div>
            )



}