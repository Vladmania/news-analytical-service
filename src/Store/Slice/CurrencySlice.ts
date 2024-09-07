import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getExchangeRate } from "../../Api/ServerRequests";
import { collection_of_logo } from "../../Company `s logo/CurrencyLogo";

interface ICurrencies {
    CharCode: string
    ID: string
    Name: string
    Nominal: number
    NumCode:string
    Previous: number
    Value: number
    Logo: string
}

interface IinitialState {
  currencyPairs: ICurrencies[];
  loading: boolean;
  error: boolean;
}
const initialState: IinitialState = {
  currencyPairs: [],
  loading: false,
  error: false,
};

export const CurrencySlice = createSlice({
  name: "Exchange_Rate",
  initialState,
  reducers: {
    exchangeRateStatus: (state, action) => {
      state.currencyPairs = [...action.payload];
    },
  },
  extraReducers(builder) {
    builder.addCase(thankGetExchangeRate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(thankGetExchangeRate.fulfilled, (state, actions) => {
      state.currencyPairs = [...actions.payload];
      state.loading = false;
    });
    builder.addCase(thankGetExchangeRate.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const { exchangeRateStatus } = CurrencySlice.actions;

export const thankGetExchangeRate = createAsyncThunk<any>(
  "Advertising/thankGetExchangeRate",
  async () => {
    try {
      const respons = await getExchangeRate()
      let data = []
      for(let key in respons.data.Valute){
       data.push(respons.data.Valute[key])
      }
      let obj = data.map(e =>{
        let logo;
        for (let [key, value] of Object.entries(collection_of_logo)) {
          if (key === String(e.CharCode)) {
            logo = value;
          }
        } 
          return {
          CharCode: e.CharCode,
          ID: e.ID,
          Name: e.Name,
          Nominal: e.Nominal,
          NumCode:e.NumCode,
          Previous: e.Previous,
          Value: e.Value,
          Logo: logo
        };
      })
      console.log(obj);
      
       return obj
    } catch (e) {
      console.log(e);
    }
  }
);