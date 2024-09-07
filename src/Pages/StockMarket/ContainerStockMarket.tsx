import { NewsPage } from "../News Page/NewsPage"
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { useAppDispatch} from "../../Store/Store";
import { thankgetTheArticle } from "../../Store/Slice/ItNewsSlice"

export const ContainerStockMarket = () => {
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
        <NewsPage/>
    )
}