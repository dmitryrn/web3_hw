import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../api/api'
import type { ProductsParams } from '../api/api'
import type { Product } from '../models/product'

export const CATALOG_PAGE_SIZE = 12

type CatalogState = {
  products: Product[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  hasNextPage: boolean
}

const initialState: CatalogState = {
  products: [],
  status: 'idle',
  error: null,
  hasNextPage: false,
}

type FetchProductsResult = {
  products: Product[]
  hasNextPage: boolean
}

type FetchProductsParams = {
  page: number
  search: string
  maxPrice: string
  inStock: 'all' | 'in-stock'
  compatibility: string
  energyRating: string
}

export const fetchProducts = createAsyncThunk<FetchProductsResult, FetchProductsParams, { rejectValue: string }>(
  'catalog/fetchProducts',
  async ({ page, search, maxPrice, inStock, compatibility, energyRating }, { rejectWithValue }) => {
    try {
      const offset = (page - 1) * CATALOG_PAGE_SIZE
      const params: ProductsParams = {
        limit: CATALOG_PAGE_SIZE,
        offset,
        search: search.trim() || undefined,
        maxPrice: maxPrice.trim() || undefined,
        inStock: inStock === 'in-stock' || undefined,
        compatibility: compatibility.trim() || undefined,
        energyRating: energyRating.trim() || undefined,
      }

      const response = await api.products(params)

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
  reducers: {},
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

export default catalogSlice.reducer
