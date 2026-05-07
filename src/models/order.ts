export type OrderItem = {
  id: number
  price: number | string
  quantity: number
  created_at: string
  name: string
  stock: number
}

export type Order = {
  id: number
  customer_phone: string
  customer_city: string
  customer_street: string
  customer_house: string
  customer_building?: string
  status: string
  cancellation_note?: string
  created_at: string
  updated_at: string
  total_amount: number | string
  items: OrderItem[]
}
