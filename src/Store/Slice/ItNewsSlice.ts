import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getStockMarketNews } from "../../Api/ServerRequests";
import { getTheArticle } from "../../Api/ServerRequests"
import { collection_of_pictures } from "../../Cover_News/PicturesforFinancialNews";

interface INews {
  id: number;
  title: string;
  news_text: string;
  cover: string;
  source: string;
  publication_date: string;
}

interface IinitialState {
  status: string;
  totalResults: number;
  articles: INews[];
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
    builder.addCase(thankgetTheArticle.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(thankgetTheArticle.fulfilled, (state, actions) => {
      state.articles = [...actions.payload];
      state.loading = false;
    });
    builder.addCase(thankgetTheArticle.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const { addItNewsState } = itNewsSlice.actions;

export const thankaddItNews = createAsyncThunk<INews[]>(
  "itnews/thankgetItNews",
  async () => {
    try {
      const respons = await getStockMarketNews();
      const objnews = respons.data.sitenews.data.map((e: INews[], i: number) => {
          return {
            id: e[0],
            title: e[2],
            cover: collection_of_pictures[Math.floor(Math.random() * 25)],
            publication_date: e[3],
          };
        }
      );
      return objnews;
    } catch (e) {
      console.log(e);
    }
  }
);

export const thankgetTheArticle = createAsyncThunk<INews[], number>(
  "itnews/thankgetTheArticle",
  async (id) => {
    try {
      const respons = await getTheArticle(id);
      console.log(respons.data.content.data);
      const objnews = respons.data.content.data.map((e: INews[], i: number) => {
          return {
            id: e[0],
            title: e[1],
            news_text: e[3],
            cover: collection_of_pictures[Math.floor(Math.random() * 6)],
            publication_date: e[2],
          };
        }
      );
      return objnews;
    } catch (e) {
      console.log(e);
    }
  }
);
