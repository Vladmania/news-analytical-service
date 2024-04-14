import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface IParticipant {
    id: number,
    priceСhange: number,
    price: number,
    icon: string
}

interface IinitialState {
    status: string,
    totalResults: number,
    articles: IParticipant[],
    loading: boolean,
    error: boolean
}
const initialState: IinitialState = {
    status: "",
    totalResults: 0,
    articles: [{id: 1, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 2, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 3, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 4, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 5, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 6, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 7, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 8, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 9, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 10, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 11, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 12, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 13, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 14, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"},
        {id: 2, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 3, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 4, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 5, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 6, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 7, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 8, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 9, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 10, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 11, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 12, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 13, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 14, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"},
        {id: 10, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 11, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 12, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 13, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 14, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"},
        {id: 2, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 3, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 4, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 5, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 6, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 7, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 8, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 9, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 10, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 11, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 12, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 13, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"}, 
        {id: 14, priceСhange: 2, price: 256, icon: "https://invest-brands.cdn-tinkoff.ru/US0378331005x160.png"},
    ],
    loading: false,
    error: false
};

export const stockMarketSlice = createSlice({
  name: "stockMarket",
  initialState,
  reducers: {
    addStockMarketParticipantsState: (state, action) => {
      state.articles = [action.payload];
    },
  },
  extraReducers(builder) {
   
  },
});

export const { addStockMarketParticipantsState } = stockMarketSlice.actions;
