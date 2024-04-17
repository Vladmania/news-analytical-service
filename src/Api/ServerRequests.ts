import axios from "axios";

const silka = "https://iss.moex.com/iss/sitenews"

export const getItNews = () => {
    return axios.get(
        silka
    );
  };
  