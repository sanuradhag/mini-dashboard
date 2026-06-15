import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { ProductsState, SortDirection, SortField } from './utils/types'
import { fetchProductsThunk } from './thunks'

const initialState: ProductsState = {
  products: [],
  apiStatus: 'idle',
  apiError: null,
  searchQuery: '',
  sortField: 'title',
  sortDirection: 'asc',
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    setSortField: (state, action: PayloadAction<SortField>) => {
      state.sortField = action.payload
    },
    setSortDirection: (state, action: PayloadAction<SortDirection>) => {
      state.sortDirection = action.payload
    },
  },
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

export const { setSearchQuery, setSortField, setSortDirection } =
  productsSlice.actions

export default productsSlice.reducer
