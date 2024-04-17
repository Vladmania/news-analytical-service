import { useEffect, useState } from "react";
import { StyledAllNews } from "./AllNews.Style";
import { useAppDispatch, useAppSelector } from "../../Store/Store";
import { NewsWindow } from "./NewsWindow";
import { thankaddItNews } from "../../Store/Slice/ItNewsSlice"

export const AllNews = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.itnews.articles);
  const [isRegistered, setIsAuth] = useState(false);

  // useEffect(() => {
  //     const loadingData = async() =>{
  //       await dispatch(thankaddItNews());
  //       setIsAuth(true)
  //     }
  //     loadingData()
  //    }, [dispatch]);

  //    if(!isRegistered){
  //     return <div>Загрузка</div>
  //   }

  const windownews = news.map((e, index) => (
    <NewsWindow
      key={e.id}
      picture={e.picture}
      date={e.date}
      title={e.title}
      serialNumber={index}
    />
  ));

  return <StyledAllNews>{windownews}</StyledAllNews>;
};
