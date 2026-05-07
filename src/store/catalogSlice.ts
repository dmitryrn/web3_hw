import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { Product } from '../models/product'

export const CATALOG_PAGE_SIZE = 2

type CatalogState = {
  products: Product[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  page: number
  hasNextPage: boolean
}

const initialState: CatalogState = {
  products: [],
  status: 'idle',
  error: null,
  page: 1,
  hasNextPage: false,
}

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000').replace(/\/$/, '')

type FetchProductsResult = {
  products: Product[]
  hasNextPage: boolean
}

export const fetchProducts = createAsyncThunk<FetchProductsResult, number, { rejectValue: string }>(
  'catalog/fetchProducts',
  async (page, { rejectWithValue }) => {
    try {
      const offset = (page - 1) * CATALOG_PAGE_SIZE
      const response = await fetch(
        `${apiBaseUrl}/products?limit=${CATALOG_PAGE_SIZE}&offset=${offset}`,
      )

      if (!response.ok) {
        return rejectWithValue(`Failed to fetch products: ${response.status}`)
      }

      const products = (await response.json()) as Product[]

      return {
        products,
        hasNextPage: products.length === CATALOG_PAGE_SIZE,
      }
    } catch {
      return rejectWithValue('Failed to fetch products')
    }
  },
)

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    goToPage: (state, action: { payload: number }) => {
      state.page = Math.max(1, action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = action.payload.products
        state.hasNextPage = action.payload.hasNextPage
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload ?? 'Failed to fetch products'
        state.hasNextPage = false
      })
  },
})

export const { goToPage } = catalogSlice.actions

export default catalogSlice.reducer
