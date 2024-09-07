import { useEffect, useState } from "react";
import { StyledNews } from "../../Pages/News/StyledNews";
import { useAppDispatch, useAppSelector } from "../../Store/Store";
import { NewsWindow } from "../../Components/News Window/NewsWindow";
import { thankgetAllNews } from "../../Store/Slice/ItNewsSlice";
import { thankGetAdvertising } from "../../Store/Slice/AdvertisingSlice";
import { Loading } from "../../Components/Loading/Loading"

export const News = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.itnews.articles);
  const advertising = useAppSelector((state) => state.advertising.advertisingMaterial);
  const [isRegistered, setIsAuth] = useState(false);

  useEffect(() => {
    const loadingData = async () => {
      await dispatch( thankgetAllNews())
      await dispatch( thankGetAdvertising())
      setIsAuth(true);
    };
    loadingData();
  }, [dispatch]);

  if (!isRegistered) {
    return <Loading />;
  }

  const windownews = news
    .slice(0, 9)
    .map((e, index) => (
      <NewsWindow
        key={e.id}
        titleNews={ e.titleNews}
        coverNews={ e.coverNews}
        link={`/news/${e.id}`}
        dateNews={e.dateNews}
        serialNumber={index}
      />
    ));

  const windowadvertising = advertising.map((e, index) =>(
    <NewsWindow
        key={Number(e.id)}
        titleNews={ e.offer}
        coverNews={ e.cover}
        link={e.link}
        dateNews={String(new Date().toLocaleString())}
        serialNumber={index === 0 ? 1 : index === 1 ? 8 : index}
      />
  ))
  
  windownews[1] = windowadvertising[0]
  windownews[8] = windowadvertising[1]

   
  return <StyledNews>{windownews}</StyledNews>;
};
