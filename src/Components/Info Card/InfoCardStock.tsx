import { InfoCardStyle } from './StockMarket.Styled'
import { PriceChart } from '../Price Chart/PriceChart'

interface IInfiCardStock{
    changeColor: boolean,
    secid: string,
    price: number,
    priceChange: number,
    percentageChangeInPrice: number,
    logo: string,
    lotsize: number,
    shortname: string
}

export const InfiCardStock = (props: IInfiCardStock) =>{

    return(
        <InfoCardStyle>
        <div className='infocard_name'>
            <img src={props.logo}></img>
            <div>
                <p>{props.shortname}</p>
                <p>{props.secid}</p>
            </div>  
        </div>
        <div className='infocard_price'>
            <p className='infocard_price__p'>{props.price.toFixed(4)} ₽</p>
            <p>1 лот = {props.lotsize} акции</p>
        </div>
        <div className='infocard_changes_per_day'>
            <p className={props.priceChange > 0 ?'infocard_changes_per_day_up' : 'infocard_changes_per_day_down'}>{props.priceChange} ₽</p>
            <p className={props.percentageChangeInPrice > 0 ?'infocard_changes_per_day_up' : 'infocard_changes_per_day_down'}>{props.percentageChangeInPrice} %</p>
        </div>
        <PriceChart width={150} height={70} changeColor={props.changeColor} changeTheSchedule={"InfiCardStock"}/>
        </InfoCardStyle>
    )
}