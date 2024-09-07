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
          <Link to="/" >новости</Link>
          <Link to="/fin-news/1/0/9">фондовый рынок</Link>
          <Link to="/stock/1/0/9" >Акции</Link>
          <Link to='/currencies'>Курс валют</Link>
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
          <p>Рассказываем о важных событиях в мире финансов</p>
        </div>
        <div className="footer__link">
          <h2>Новости</h2>
          <Link to="/">новости</Link>
          <Link to="/fin-news/1/0/9">фондовый рынок</Link>
          <Link to="/stock/1/0/9" >Акции</Link>
          <Link to='/currencies'>Курс валют</Link>
        </div>
      </StyledFooter>
    </>
  );
};
