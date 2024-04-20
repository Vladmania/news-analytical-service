import { Link, Outlet } from "react-router-dom";
import { StyledHeader, StyledFooter } from "./Styled.Header";

interface IHeader {
  environment: boolean;
  setEnvironment: (type: boolean) => void;
}

export const Header = (props: IHeader) => {
  return (
    <>
      <StyledHeader>
        <h1>itrend.pro</h1>
        <div>
          <Link to="/">ит-новости</Link>
          <Link to="/fin-news">фондовый рынок</Link>
          <input
            type="checkbox"
            onClick={() =>
              props.environment
                ? props.setEnvironment(false)
                : props.setEnvironment(true)
            }
          />
        </div>
      </StyledHeader>
      <div>
        <Outlet />
      </div>
      <StyledFooter>
        <div className="footer__info">
          <h1>itrend.pro</h1>
          <p>Рассказываем о важных событиях в мире технологий и финансов</p>
        </div>
        <div className="footer__link">
          <h2>Новости</h2>
          <Link to="/">ит-новости</Link>
          <Link to="/fin-news">фондовый рынок</Link>
        </div>
      </StyledFooter>
    </>
  );
};
