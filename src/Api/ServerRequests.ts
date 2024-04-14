import axios from "axios";

const silka = "https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=2401dae98dca4e00b8796e1715bfa735"

export const getItNews = () => {
    return axios.get(
        "https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=2401dae98dca4e00b8796e1715bfa735"
    );
  };