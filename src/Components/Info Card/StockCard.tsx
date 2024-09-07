import { Link } from "react-router-dom";
import { StockCardStyled } from "./StockMarket.Styled";

interface IStockCard {
  key: string,
  price: number,
  priceСhange: number,
  logo: string
}

export const StockCard = (props: IStockCard) => {
  return (
    <Link to="/company">
    <StockCardStyled $pictureColor={props.priceСhange > 0 ? "green": "red" }>
      <img src={props.logo}></img>
      <div>
        <p>{props.price}р</p>
        <p className="priceСhange">{props.priceСhange}%</p>
      </div>
    </StockCardStyled>
    </Link>
  );
};
