import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAdvertising } from "../../Api/ServerRequests";

interface IParticipant {
  id: string;
  offer: string;
  link: string;
  cover: string
}

interface IinitialState {
  advertisingMaterial: IParticipant[];
  loading: boolean;
  error: boolean;
}
const initialState: IinitialState = {
  advertisingMaterial: [],
  loading: false,
  error: false,
};

export const AdvertisingSlice = createSlice({
  name: "Advertising",
  initialState,
  reducers: {
    addStockMarketParticipantsState: (state, action) => {
      state.advertisingMaterial = [action.payload];
    },
  },
  extraReducers(builder) {
    builder.addCase(thankGetAdvertising.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(thankGetAdvertising.fulfilled, (state, actions) => {
      state.advertisingMaterial = [...actions.payload];
      state.loading = false;
    });
    builder.addCase(thankGetAdvertising.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const { addStockMarketParticipantsState } = AdvertisingSlice.actions;

export const thankGetAdvertising = createAsyncThunk(
  "Advertising/thankGetAdvertising",
  async () => {
    try {
      const respons = await getAdvertising()
      return respons.data
    } catch (e) {
      console.log(e);
    }
  }
);
