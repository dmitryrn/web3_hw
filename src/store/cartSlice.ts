import { createSlice } from '@reduxjs/toolkit'
import type { CartItem } from '../models/product'

type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: { payload: { product_id: number; quantity: number } }) => {
      const { product_id, quantity } = action.payload
      const existingProduct = state.items.find((item) => item.product_id === product_id)
      const nextQuantity = Math.max(1, quantity)

      if (existingProduct) {
        existingProduct.quantity += nextQuantity
        return
      }

      state.items.push({
        product_id,
        quantity: nextQuantity,
      })
    },
    incrementCartItem: (state, action: { payload: number }) => {
      const productId = action.payload
      const product = state.items.find((item) => item.product_id === productId)

      if (!product) {
        return
      }

      product.quantity += 1
    },
    decrementCartItem: (state, action: { payload: number }) => {
      const product = state.items.find((item) => item.product_id === action.payload)

      if (!product || product.quantity <= 1) {
        return
      }

      product.quantity -= 1
    },
    removeFromCart: (state, action: { payload: number }) => {
      state.items = state.items.filter((item) => item.product_id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const { addToCart, clearCart, decrementCartItem, incrementCartItem, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
