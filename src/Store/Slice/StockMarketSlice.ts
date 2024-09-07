import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getShares } from "../../Api/ServerRequests";
import { collection_of_logo } from "../../Company `s logo/LogoCompany`s";

interface IParticipant {
  id: string;
  priceChange: number;
  percentageChangeInPrice: number;
  price: number;
  logo: string;
  ticet: string;
  shortname: string;
  lotsize: number
}

interface IinitialState {
  status: string;
  totalResults: number;
  articles: IParticipant[];
  loading: boolean;
  error: boolean;
}
const initialState: IinitialState = {
  status: "",
  totalResults: 0,
  articles: [],
  loading: false,
  error: false,
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
    builder.addCase(thankaddShares.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(thankaddShares.fulfilled, (state, actions) => {
      state.articles = [...actions.payload];
      state.loading = false;
    });
    builder.addCase(thankaddShares.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const { addStockMarketParticipantsState } = stockMarketSlice.actions;

export const thankaddShares = createAsyncThunk(
  "stockMarket/thankgetShares",
  async () => {
    try {
      const respons = await getShares();
      const objnews = respons.data.marketdata.data.map((e: IParticipant[]) => {
        let logo;
        for (let [key, value] of Object.entries(collection_of_logo)) {
          if (key === String(e[0])) {
            logo = value;
          }
        } 
          return {
          id: e[0],
          price: e[12], 
          priceChange: e[40],
          percentageChangeInPrice: e[25],
          logo,
        };
      });
      const objnews2 = respons.data.securities.data.map((e: IParticipant[]) => {
        for(let i = 0; i <= objnews.length; i++){
          if(objnews[i].id === e[0]){
             return Object.assign(objnews[i], {
          id: e[0],
          shortname: e[2],
          lotsize: e[4],
        });
        }
      } 
      });  
      return objnews2
    } catch (e) {
      console.log(e);
    }
  }
);