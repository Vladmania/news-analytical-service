import { createChart } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';
import { StyledCompanyPage } from "./Styled.CompanyPage"
import { PriceChart } from '../../Components/Price Chart/PriceChart'
interface ICompanyPage {
    changeColor: boolean
}
export const CompanyPage = (props: ICompanyPage) =>{

    return(
        <StyledCompanyPage>
            <img src="https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-gazprom-znachok-na-prozrachnom-fone-33.jpg"/>
            <div className='company__div__info'>
                <h2>Газпром</h2>
                <p>Сектор: Энергетика</p>
                <p>Цена акции: 160.64</p>
        </div>
        <PriceChart width={600} height={200} changeColor={props.changeColor} changeTheSchedule={"CompanyPage"}/>
        <div className='company__div__description'>
          «Газпром» — глобальная энергетическая компания, кладовая мировых запасов природного газа. На нее приходится 12% мировой и 68% российской добычи газа. Входит в четвёрку крупнейших российских производителей нефти и является самой прибыльной российской компанией в 2022 году по версии Forbes.
           Газпром реализует более половины газа на внутреннем рынке, а также занимается его поставками в более чем 30 стран ближнего и дальнего зарубежья. В настоящее время компания активно реализует масштабные проекты по освоению газовых ресурсов арктического шельфа, Восточной Сибири и Дальнего Востока, а также ряд проектов по разведке и добыче углеводородов за рубежом.
        </div>
        <div></div>
        </StyledCompanyPage>
    )
}

