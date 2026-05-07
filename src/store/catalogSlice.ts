import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { Product } from '../models/product'

export const CATALOG_PAGE_SIZE = 12

type CatalogState = {
  products: Product[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  page: number
  hasNextPage: boolean
  search: string
}

const initialState: CatalogState = {
  products: [],
  status: 'idle',
  error: null,
  page: 1,
  hasNextPage: false,
  search: '',
}

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000').replace(/\/$/, '')

type FetchProductsResult = {
  products: Product[]
  hasNextPage: boolean
}

type FetchProductsParams = {
  page: number
  search: string
}

export const fetchProducts = createAsyncThunk<FetchProductsResult, FetchProductsParams, { rejectValue: string }>(
  'catalog/fetchProducts',
  async ({ page, search }, { rejectWithValue }) => {
    try {
      const offset = (page - 1) * CATALOG_PAGE_SIZE
      const params = new URLSearchParams({
        limit: String(CATALOG_PAGE_SIZE),
        offset: String(offset),
      })

      if (search.trim()) {
        params.set('search', search.trim())
      }

      const response = await fetch(`${apiBaseUrl}/products?${params.toString()}`)

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
    setSearch: (state, action: { payload: string }) => {
      state.search = action.payload.trim()
      state.page = 1
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

export const { goToPage, setSearch } = catalogSlice.actions

export default catalogSlice.reducer
