export type CreateOrderItem = {
  product_id: number
  quantity: number
}

export type CreateOrderPayload = {
  customer_phone: string
  customer_city: string
  customer_street: string
  customer_house: string
  customer_building?: string
  items: CreateOrderItem[]
}

export type CreateOrderResponse = {
  id: number
}
