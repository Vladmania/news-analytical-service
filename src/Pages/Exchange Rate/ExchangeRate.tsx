import { useEffect } from "react"
import { useAppDispatch ,useAppSelector } from "../../Store/Store";
import { thankGetExchangeRate } from "../../Store/Slice/CurrencySlice";
import { InfiCardStock } from "../../Components/Info Card/InfoCardStock";
import { StyleExchangeRate } from "./Style.ExchangeRate"

interface IExchangeRate {
    changeColor: boolean
}

export const ExchangeRate = (props: IExchangeRate) =>{
    const dispatch = useAppDispatch();
    const currencyPairs = useAppSelector((state) => state.exchangeRate.currencyPairs);

    useEffect(()=>{
        const loadingData = async () => {
            await dispatch(thankGetExchangeRate())
    };
    loadingData();
    },[dispatch])

    const currencies = currencyPairs.map(e => (
        <InfiCardStock  changeColor={false} 
                        secid={e.CharCode} 
                        price={e.Value/e.Nominal} 
                        priceChange={e.Value - e.Previous} 
                        percentageChangeInPrice={((e.Previous - e.Value)/e.Previous) * 100} 
                        logo={e.Logo} 
                        lotsize={e.Nominal} 
                        shortname={e.Name}/>
    ))
    

    return(
        <StyleExchangeRate $changeColor={props.changeColor}>
            <div className="name_colums">    
                <div className="name_colums_1">Название</div>
                <div className="name_colums_2">Цена</div>
                <div className="name_colums_3">За день</div>
                <div className="name_colums_4">Динамика</div>
        </div>
            {currencies}
        </StyleExchangeRate>
    )
}