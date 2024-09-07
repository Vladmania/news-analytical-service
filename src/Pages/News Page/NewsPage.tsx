import { useAppSelector } from "../../Store/Store";
import { StyledNewsPage} from "./NewsPage.Style"
import { NewsWindow } from "../../Components/News Window/NewsWindow"


export const NewsPage = () =>{
    const news = useAppSelector((state) => state.itnews.articles);
    
    return(
        <StyledNewsPage>
        <h1 dangerouslySetInnerHTML={{__html: news[0].titleNews}}></h1>
        <p>новость: {new Date(news[0].dateNews).toLocaleString("ru").slice(0, 10)}</p>
        <img src={news[0].coverNews}></img>
        <p dangerouslySetInnerHTML={{__html: news[0].newsText}}></p>
        <p>Источник: {news[0].soureNews}</p>
        <p>Другие новости</p>
        </StyledNewsPage>
    )
}