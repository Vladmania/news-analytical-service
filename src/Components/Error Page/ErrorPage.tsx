import { Link } from "react-router-dom";
import { StyledErrorPage } from "./Styled.ErrorPage"

export const ErrorPage = () => {
    return(
        <StyledErrorPage>
        <p className="error__code">404</p>
        <div>
            <h2 className="error__title">Ошибка</h2>
            <p className="error__text">Страница которую вы ищите <br/> не существует либо устарела</p>
            <Link to={"/"}>Назад</Link>
        </div>
        </StyledErrorPage>
    )
}