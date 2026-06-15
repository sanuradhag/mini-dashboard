import { createSlice } from '@reduxjs/toolkit'

import type { ProductsState } from './utils/types'
import { fetchProductsThunk } from './thunks'

const initialState: ProductsState = {
  products: [],
  apiStatus: 'idle',
  apiError: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.apiStatus = 'loading'
        state.apiError = null
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.apiStatus = 'succeeded'
        state.products = action.payload
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.apiStatus = 'failed'
        state.apiError = action.payload as string
      })
  },
})

export default productsSlice.reducer
