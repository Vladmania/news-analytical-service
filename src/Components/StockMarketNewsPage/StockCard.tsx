import { StockCardStyled } from "./StockMarket.Styled";

interface IStockCard {
  key: number,
  price: number,
  priceСhange: number,
  logo: string
}

export const StockCard = (props: IStockCard) => {
  return (
    <StockCardStyled>
      <img src={props.logo}></img>
      <div>
        <p>{props.price}p</p>
        <p>{props.priceСhange}%</p>
      </div>
    </StockCardStyled>
  );
};
