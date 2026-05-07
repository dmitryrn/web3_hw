import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../api/api'
import type { Product } from '../models/product'

type ProductState = {
  product: Product | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  isNotFound: boolean
}

const initialState: ProductState = {
  product: null,
  status: 'idle',
  error: null,
  isNotFound: false,
}

type FetchProductError = {
  message: string
  isNotFound?: boolean
}

export const fetchProductById = createAsyncThunk<Product, number, { rejectValue: FetchProductError }>(
  'product/fetchById',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await api.productById(productId)

      if (response.status === 404) {
        return rejectWithValue({ message: 'Product not found', isNotFound: true })
      }

      if (!response.ok) {
        return rejectWithValue({ message: `Failed to fetch product: ${response.status}` })
      }

      return (await response.json()) as Product
    } catch {
      return rejectWithValue({ message: 'Failed to fetch product' })
    }
  },
)

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearProduct: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.product = null
        state.status = 'loading'
        state.error = null
        state.isNotFound = false
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload
        state.status = 'succeeded'
        state.error = null
        state.isNotFound = false
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.product = null
        state.status = 'failed'
        state.error = action.payload?.message ?? 'Failed to fetch product'
        state.isNotFound = action.payload?.isNotFound ?? false
      })
  },
})

export const { clearProduct } = productSlice.actions

export default productSlice.reducer
