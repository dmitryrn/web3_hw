export type ProductImage = {
  id: number
  product_id: number
  image_url: string
  sort_order: number
  created_at: string
}

export type Product = {
  id: number
  name: string
  price: number
  stock: number
  description: string
  compatibility: string | null
  energy_rating: string | null
  created_at: string
  updated_at: string
  images: ProductImage[]
}

export type CartProduct = {
  product: Product
  quantity: number
}

export type CartItem = {
  productId: number
  quantity: number
}
