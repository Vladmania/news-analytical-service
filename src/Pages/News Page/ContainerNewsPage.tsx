import { NewsPage } from "../News Page/NewsPage"
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { useAppDispatch} from "../../Store/Store";
import { thankgetOneNews } from "../../Store/Slice/ItNewsSlice"
import { Loading } from "../../Components/Loading/Loading"

export const ContainerNewsPage = () => {
    const dispatch = useAppDispatch()
    const param = useParams()
    const [isRegistered, setIsAuth] = useState(false);
    
  useEffect(() => {
    const loadingData = async () => {
         await dispatch(thankgetOneNews(Number(param.newsid)));
        setIsAuth(true);
    };
    loadingData();
  }, [dispatch, param.newsid]);

  

  if (!isRegistered) {
    return <Loading />;
  }
    return(
        <NewsPage/>
    )
}