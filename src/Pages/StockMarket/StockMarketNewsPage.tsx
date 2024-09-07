import { useAppDispatch ,useAppSelector } from "../../Store/Store";
import { StockCard } from "../../Components/Info Card/StockCard";
import { StyledNewsPageStockMarket } from "../../Pages/StockMarket/StyledPagesStockMarket";
import { thankaddShares } from "../../Store/Slice/StockMarketSlice"
import { thankgetfinNews } from "../../Store/Slice/ItNewsSlice";
import { useEffect, useState } from "react";
import { NewsWindow } from "../../Components/News Window/NewsWindow";
import { StyledNews } from "../News/StyledNews";
import { useParams } from "react-router-dom";
import { SwitchingPages } from "../../Components/switching pages/SwitchingPages";
import { Loading } from "../../Components/Loading/Loading"

export const StockMarketNewsPage = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.itnews.articles);
  const [isRegistered, setIsAuth] = useState(false);
  const StockMarketParticipant = useAppSelector((state) => state.stockMarket.articles);
  const advertising = useAppSelector((state) => state.advertising.advertisingMaterial);
   const param = useParams()
    let start = param.start
    let end= param.end
  
  useEffect(() => {
    const loadingData = async () => {
      await dispatch(thankaddShares());
      await dispatch(thankgetfinNews());
      setIsAuth(true);
    };
    loadingData();
  }, [dispatch]);

  if (!isRegistered) {
    return <Loading />;
  }

  const allParticipant = StockMarketParticipant.map((e) => (
    e.price !== null && <StockCard
      key={e.id}
      price={e.price}
      priceСhange={e.percentageChangeInPrice}
      logo={e.logo}
    />
  ));

  const windownews = news
    .slice(Number(start), Number(end))
    .map((e, index) => (
      <NewsWindow
        key={e.id}
        titleNews={ e.titleNews}
        coverNews={ e.coverNews}
        dateNews={e.dateNews}
        link={`/stock-news/${e.id}`}
        serialNumber={index}
      />
    ));
    const windowadvertising = advertising.map((e, index) =>(
    <NewsWindow
        key={Number(e.id)}
        titleNews={ e.offer}
        coverNews={ e.cover}
        link={e.link}
        dateNews={String(new Date().toLocaleString())}
        serialNumber={index === 0 ? 8 : index}
      />
  ))
  windownews[8] = windowadvertising[0]

  return (
    <StyledNewsPageStockMarket>
      <div className="StockMarket_allParticipantX">
        <div className="StockMarket_allParticipantX__half">
          {allParticipant}
        </div>
        <div className="StockMarket_allParticipantX__half">
          {allParticipant}
        </div>
      </div>
      <h2>Новости Московской биржи</h2>
      <StyledNews>{windownews}</StyledNews>
      <SwitchingPages arrayOfPages={news} linkFlipPages={"/fin-news/"} />
    </StyledNewsPageStockMarket>
  );
};
