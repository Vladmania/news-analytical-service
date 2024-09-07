import axios from "axios";
const linkStockMarketNews = "https://iss.moex.com/iss/sitenews"
const linkShares = "https://iss.moex.com/iss/engines/stock/markets/shares/boards/tqbr/securities.json"
const server = "http://localhost:5000/api/"
const requestExchangeRate = "https://www.cbr-xml-daily.ru/daily_json.js"
const currencyQuotes = "https://cbr.ru/scripts/XML_dynamic.asp?date_req1=01/01/2023&date_req2=01/01/2024&VAL_NM_RQ=R01239" // Изменяется дата и ID валюты

export const getStockMarketNews = () => {
    return axios.get(
        linkStockMarketNews + `.json?start=0`
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
  export const addNews = (titleNews: string, newsText: string, coverNews: string, soureNews: string, dateNews: string) => {
  return axios.post(server + "addnews", {
        titleNews,
        newsText, 
        soureNews, 
        coverNews, 
        dateNews, });
};
export const getAllNews = () => {
    return axios.get(
      server + "getnews"
    )
  }

  export const getOneNews = (id: number) => {
    return axios.get(
      server + "getnew/" + id
    )
  }

  export const addAdvertising = (offer: string, link: string, cover: string,) => {
  return axios.post(server + "addadvertising", {
        offer,
        link,
        cover,
     });
};

export const getAdvertising = () => {
    return axios.get(
      server + "getadvertising"
    )
  }

  export const getExchangeRate  = () => {
    return axios.get(
      requestExchangeRate
    )
  }