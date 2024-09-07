import { useAppDispatch ,useAppSelector } from "../../Store/Store";
import { StyleCompanyStock } from './StyleCompanyStock'
import {  InfiCardStock } from '../../Components/Info Card/InfoCardStock'
import { useEffect, useState } from "react";
import { thankaddShares } from "../../Store/Slice/StockMarketSlice";
import { useParams } from "react-router-dom";
import { SwitchingPages } from "../../Components/switching pages/SwitchingPages";
import { Loading } from "../../Components/Loading/Loading"


interface ICompanyStock {
    changeColor: boolean
}

export const CompanyStock = (props: ICompanyStock) =>{
    const dispatch = useAppDispatch();
    const StockMarketParticipant = useAppSelector((state) => state.stockMarket.articles);
    const [isRegistered, setIsAuth] = useState(false);
    const param = useParams()
    let start = param.start
    let end= param.end
  
   
    useEffect(() => {
    const loadingData = async () => {
      await dispatch(thankaddShares());
      setIsAuth(true);
    };
    loadingData();
  }, [dispatch]);

  const filteringOutUnnecessary = StockMarketParticipant.filter((e) => e.price !== null)

    const allParticipant = filteringOutUnnecessary.slice(Number(start), Number(end)).map((e) => (
      <InfiCardStock 
          key={e.id} 
          changeColor={props.changeColor}
          price={e.price}
          priceChange={e.priceChange}
          percentageChangeInPrice={e.percentageChangeInPrice}
          logo={e.logo}
          secid={e.id}
          lotsize={e.lotsize}
          shortname={e.shortname}/> 
    ));

      if (!isRegistered) {
    return <Loading />;
  }

    return(
        <StyleCompanyStock $changeColor={props.changeColor}>
        <div className="name_colums">    
                <div className="name_colums_1">Название</div>
                <div className="name_colums_2">Цена</div>
                <div className="name_colums_3">За день</div>
                <div className="name_colums_4">Динамика</div>
        </div>
         {allParticipant}
         <SwitchingPages arrayOfPages={filteringOutUnnecessary} linkFlipPages={"/stock/"} />
        </StyleCompanyStock>
    )
}
