import { useAppDispatch, useAppSelector } from "../../Store/Store";
import { StockCard } from "./StockCard";
import { AllNews } from "../All News/AllNews";
import { StockMarketNewsPageStyled } from "./StockMarket.Styled";

export const StockMarketNewsPage = () => {
  const StockMarketParticipant = useAppSelector(
    (state) => state.stockMarket.articles
  );

  const allParticipant = StockMarketParticipant.map((e) => (
    <StockCard
      key={e.id}
      price={e.price}
      priceСhange={e.priceСhange}
      icon={e.icon}
    />
  ));

  return (
    <StockMarketNewsPageStyled>
      <div className="StockMarket_allParticipantX">
        <div className="StockMarket_allParticipantX__half">{allParticipant}</div>
        <div className="StockMarket_allParticipantX__half">{allParticipant}</div>
        </div>
      <div className="StockMarket_allParticipantY">{allParticipant}</div>
      <h2>Новости участников рынка</h2>
      <AllNews />
    </StockMarketNewsPageStyled>
  );
};
