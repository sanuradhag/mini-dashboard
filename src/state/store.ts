import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import productsReducer from './reducers'
import type { RootState } from './utils/types'

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
})

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
