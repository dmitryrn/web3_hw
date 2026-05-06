import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { Product } from '../models/product'

type CatalogState = {
  products: Product[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: CatalogState = {
  products: [],
  status: 'idle',
  error: null,
}

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000').replace(/\/$/, '')

export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
  'catalog/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${apiBaseUrl}/products`)

      if (!response.ok) {
        return rejectWithValue(`Failed to fetch products: ${response.status}`)
      }

      return (await response.json()) as Product[]
    } catch {
      return rejectWithValue('Failed to fetch products')
    }
  },
)

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload ?? 'Failed to fetch products'
      })
  },
})

export default catalogSlice.reducer
