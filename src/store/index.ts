import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import catalogReducer from './catalogSlice'
import checkoutReducer from './checkoutSlice'
import productReducer from './productSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    catalog: catalogReducer,
    checkout: checkoutReducer,
    product: productReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
