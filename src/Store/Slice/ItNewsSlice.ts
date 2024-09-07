import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getStockMarketNews } from "../../Api/ServerRequests";
import { getTheArticle } from "../../Api/ServerRequests"
import { getAllNews } from "../../Api/ServerRequests"
import { getOneNews } from "../../Api/ServerRequests"
import { collection_of_pictures } from "../../Cover_News/PicturesforFinancialNews";

interface INews {
  id: number;
  titleNews: string;
  newsText: string;
  coverNews: string;
  soureNews: string;
  dateNews: string;
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
    builder.addCase(thankgetfinNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(thankgetfinNews.fulfilled, (state, actions) => {
      state.articles = [...actions.payload];
      state.loading = false;
    });
    builder.addCase(thankgetfinNews.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(thankgetAllNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(thankgetAllNews.fulfilled, (state, actions) => {
      state.articles = [...actions.payload];
      state.loading = false;
    });
    builder.addCase(thankgetAllNews.rejected, (state) => {
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
     builder.addCase(thankgetOneNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(thankgetOneNews.fulfilled, (state, actions) => {
      state.articles = [...actions.payload];
      state.loading = false;
    });
    builder.addCase(thankgetOneNews.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const { addItNewsState } = itNewsSlice.actions;

export const thankgetfinNews = createAsyncThunk<INews[]>(
  "itnews/thankgetfinNews",
  async () => {
    try {
      const respons = await getStockMarketNews();
      const objnews = respons.data.sitenews.data.map((e: INews[]) => {
          return {
            id: e[0],
            titleNews: e[2],
            coverNews: collection_of_pictures[Math.floor(Math.random() * 25)],
            dateNews: e[3],
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
      const objnews = respons.data.content.data.map((e: INews[]) => {
          return {
            id: e[0],
            titleNews: e[1],
            newsText: e[3],
            coverNews: collection_of_pictures[Math.floor(Math.random() * 25)],
            dateNews: e[2],
            soureNews: "Московская биржа"
          };
        }
      ); 
      return objnews;
    } catch (e) {
      console.log(e);
    }
  }
);

export const thankgetAllNews = createAsyncThunk<INews[]>(
  "itnews/thankgetAllNews",
   async () => {
    try {
        const respons = await getAllNews();
        return respons.data
    } catch (e) {
      console.log(e);
    }
  }
);

export const thankgetOneNews = createAsyncThunk<INews[], number>(
  "itnews/thankgetOneNews",
  async (id) => {
    try {
      const respons = await getOneNews(id);
      return respons.data;
    } catch (e) {
      console.log(e);
    }
  }
);