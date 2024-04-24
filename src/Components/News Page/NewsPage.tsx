import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { useAppDispatch, useAppSelector } from "../../Store/Store";
import {StyledNewsPage} from "./NewsPage.Style"
import { thankgetTheArticle } from "../../Store/Slice/ItNewsSlice"


export const NewsPage = () =>{
    const news = useAppSelector((state) => state.itnews.articles);
    const dispatch = useAppDispatch()
    const param = useParams()
    const [isRegistered, setIsAuth] = useState(false);

  useEffect(() => {
    const loadingData = async () => {
      await dispatch(thankgetTheArticle(Number(param.newsid)));
      setIsAuth(true);
    };
    loadingData();
  }, [dispatch, param.newsid]);

  if (!isRegistered) {
    return <div>Загрузка</div>;
  }
    
    return(
        <StyledNewsPage>
        <h1 dangerouslySetInnerHTML={{__html: news[0].title}}></h1>
        <p>новость: {news[0].publication_date}</p>
        <img src={news[0].cover}></img>
        <p dangerouslySetInnerHTML={{__html: news[0].news_text}}></p>
        <p>Источник: </p>
        <p>Другие новости</p>
        </StyledNewsPage>
    )
}