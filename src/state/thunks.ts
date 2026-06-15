import { createAsyncThunk } from '@reduxjs/toolkit'

import { getProducts } from '../api/getProducts'
import { ERROR_LOAD_FAILED } from '../utils/constants'
import { transformProducts } from './utils/helpers'

export const fetchProductsThunk = createAsyncThunk(
  'products/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const products = await getProducts()
      return transformProducts(products)
    } catch {
      return rejectWithValue(ERROR_LOAD_FAILED)
    }
  },
)
