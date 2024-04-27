import axios from "axios";

const linkStockMarketNews = "https://iss.moex.com/iss/sitenews"
const linkShares = "https://iss.moex.com/iss/engines/stock/markets/shares/boards/TQBR/securities.json?iss.meta=off&iss.only=marketdata&marketdata.columns=SECID,LAST,LASTTOPREVPRICE,CHANGE"

export const getStockMarketNews = () => {
    return axios.get(
        linkStockMarketNews + ".json"
    );
  };
  
  export const getTheArticle = (id: number) => {
    return axios.get(
        linkStockMarketNews +`/${String(id)}` + ".json"
    );
  };

  export const getShares = () => {
    return axios.get(
      linkShares
    )
  }
