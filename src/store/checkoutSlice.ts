import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../api/api'
import type { CreateOrderPayload, CreateOrderResponse } from '../api/models'
import type { RootState } from './index'

type CheckoutStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

export type CheckoutCustomerFields = {
  customer_phone: string
  customer_city: string
  customer_street: string
  customer_house: string
  customer_building?: string
}

type CheckoutState = {
  status: CheckoutStatus
  error: string | null
  orderId: number | null
}

const initialState: CheckoutState = {
  status: 'idle',
  error: null,
  orderId: null,
}

export const submitOrder = createAsyncThunk<CreateOrderResponse, CheckoutCustomerFields, { state: RootState; rejectValue: string }>(
  'checkout/submitOrder',
  async (customerFields, { getState, rejectWithValue }) => {
    const state = getState()

    if (state.cart.items.length === 0) {
      return rejectWithValue('Корзина пуста')
    }

    const payload: CreateOrderPayload = {
      customer_phone: customerFields.customer_phone.trim(),
      customer_city: customerFields.customer_city.trim(),
      customer_street: customerFields.customer_street.trim(),
      customer_house: customerFields.customer_house.trim(),
      customer_building: customerFields.customer_building?.trim() || undefined,
      items: state.cart.items,
    }

    try {
      const response = await api.createOrder(payload)

      if (!response.ok) {
        return rejectWithValue(`Не удалось создать заказ: ${response.status}`)
      }

      return (await response.json()) as CreateOrderResponse
    } catch {
      return rejectWithValue('Не удалось создать заказ')
    }
  },
)

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    resetCheckout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitOrder.pending, (state) => {
        state.status = 'loading'
        state.error = null
        state.orderId = null
      })
      .addCase(submitOrder.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.error = null
        state.orderId = action.payload.id
      })
      .addCase(submitOrder.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload ?? 'Не удалось создать заказ'
      })
  },
})

export const { resetCheckout } = checkoutSlice.actions

export default checkoutSlice.reducer
