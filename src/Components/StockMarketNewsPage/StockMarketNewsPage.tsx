import { useAppDispatch ,useAppSelector } from "../../Store/Store";
import { StockCard } from "./StockCard";
import { AllNews } from "../All News/AllNews";
import { StockMarketNewsPageStyled } from "./StockMarket.Styled";
import { thankaddShares } from "../../Store/Slice/StockMarketSlice"
import { useEffect, useState } from "react";

export const StockMarketNewsPage = () => {
  const dispatch = useAppDispatch();
  const [isRegistered, setIsAuth] = useState(false);
  const StockMarketParticipant = useAppSelector(
    (state) => state.stockMarket.articles
  );

  useEffect(() => {
    const loadingData = async () => {
      await dispatch(thankaddShares());
      setIsAuth(true);
    };
    loadingData();
  }, [dispatch]);

  if (!isRegistered) {
    return <div>Загрузка</div>;
  }

  const allParticipant = StockMarketParticipant.map((e) => (
    <StockCard
      key={e.id}
      price={e.price}
      priceСhange={e.percentageChangeInPrice}
      logo={e.logo}
    />
  ));

  return (
    <StockMarketNewsPageStyled>
      <div className="StockMarket_allParticipantX">
        <div className="StockMarket_allParticipantX__half">
          {allParticipant}
        </div>
        <div className="StockMarket_allParticipantX__half">
          {allParticipant}
        </div>
      </div>
      <h2>Новости фондового рынка</h2>
      <AllNews />
    </StockMarketNewsPageStyled>
  );
};
