import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getItNews } from "../../Api/ServerRequests";

interface INews {
    id: number,
    picture: string,
    date: string,
    title: string
}

interface IinitialState {
    status: string,
    totalResults: number,
    articles: INews[],
    loading: boolean,
    error: boolean
}
const initialState: IinitialState = {
    status: "",
    totalResults: 0,
    articles: [{id: 1, picture: "https://astera.ru/wp-content/uploads/2022/01/apple-store-city.jpg", 
    date: "01.04.2024",
    title: "Apple начала собирать в Бразилии базовую модель линейки iPhone 15"},{id: 2, picture: "https://all-aforizmy.ru/wp-content/uploads/2023/02/apple.jpg", 
    date: "01.04.2024",
    title: "Здесь реклама"},{id: 3, picture: "https://u2.9111s.ru/uploads/202303/29/c00d4fe323d16602737ce8219b49985f.jpg", 
    date: "01.04.2024",
    title: "Apple начала собирать в Бразилии базовую модель линейки iPhone 15"},{id: 4, picture: "https://u2.9111s.ru/uploads/202303/29/c00d4fe323d16602737ce8219b49985f.jpg", 
    date: "01.04.2024",
    title: "Apple начала собирать в Бразилии базовую модель линейки iPhone 15"},{id: 5, picture: "https://u2.9111s.ru/uploads/202303/29/c00d4fe323d16602737ce8219b49985f.jpg", 
    date: "01.04.2024",
    title: "Apple начала собирать в Бразилии базовую модель линейки iPhone 15"},{id: 6, picture: "https://u2.9111s.ru/uploads/202303/29/c00d4fe323d16602737ce8219b49985f.jpg", 
    date: "01.04.2024",
    title: "Apple начала собирать в Бразилии базовую модель линейки iPhone 15"},{id: 7, picture: "https://u2.9111s.ru/uploads/202303/29/c00d4fe323d16602737ce8219b49985f.jpg", 
    date: "01.04.2024",
    title: "Apple начала собирать в Бразилии базовую модель линейки iPhone 15"},{id: 8, picture: "https://u2.9111s.ru/uploads/202303/29/c00d4fe323d16602737ce8219b49985f.jpg", 
    date: "01.04.2024",
    title: "Apple начала собирать в Бразилии базовую модель линейки iPhone 15"},
  {id: 8, picture: "https://u2.9111s.ru/uploads/202303/29/c00d4fe323d16602737ce8219b49985f.jpg", 
    date: "01.04.2024",
    title: "Место для вашей рекламы"},],
    loading: false,
    error: false
};

export const itNewsSlice = createSlice({
  name: "itnews",
  initialState,
  reducers: {
    addItNewsState: (state, action) => {
      state.articles = [action.payload];
    },
  },
  extraReducers(builder) {
    builder.addCase(thankaddItNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(thankaddItNews.fulfilled, (state, actions) => {
      state.articles = [...actions.payload];
      state.loading = false;
    });
    builder.addCase(thankaddItNews.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const { addItNewsState } = itNewsSlice.actions;

export const thankaddItNews = createAsyncThunk<any>(
  "itnews/thankgetItNews",
  async () => {
    try {
      const respons = await getItNews();
       return console.log(respons.data);
    } catch (e) {
      console.log();
    }
  }
);
