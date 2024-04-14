import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { itNewsSlice } from "./Slice/ItNewsSlice"
import { stockMarketSlice } from './Slice/StockMarketSlice'


export const store = configureStore({
  reducer: { 
    itnews: itNewsSlice.reducer,
    stockMarket: stockMarketSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector