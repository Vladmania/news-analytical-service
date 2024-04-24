import axios from "axios";

const silka = "https://iss.moex.com/iss/sitenews"


export const getStockMarketNews = () => {
    return axios.get(
        silka + ".json"
    );
  };
  
  export const getTheArticle = (id: number) => {
    return axios.get(
        silka +`/${String(id)}` + ".json"
    );
  };

