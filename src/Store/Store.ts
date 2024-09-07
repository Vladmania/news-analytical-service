import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { itNewsSlice } from "./Slice/ItNewsSlice"
import { stockMarketSlice } from './Slice/StockMarketSlice'
import { AdvertisingSlice } from './Slice/AdvertisingSlice'
import { CurrencySlice } from './Slice/CurrencySlice'

export const store = configureStore({
  reducer: { 
    itnews: itNewsSlice.reducer,
    stockMarket: stockMarketSlice.reducer,
    advertising: AdvertisingSlice.reducer,
    exchangeRate: CurrencySlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector