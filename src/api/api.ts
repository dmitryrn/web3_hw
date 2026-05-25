import type { CreateOrderPayload } from './models'

export type ProductsParams = {
  limit: number
  offset: number
  search?: string
  maxPrice?: string
  inStock?: boolean
  compatibility?: string
  energyRating?: string
}

export class Api {
  private readonly baseUrl = (import.meta.env.VITE_PRODUCT_API_BASE_URL ?? 'http://localhost:8000').replace(/\/$/, '')
  private readonly orderBaseUrl = (import.meta.env.VITE_ORDER_API_BASE_URL ?? 'http://localhost:8001').replace(/\/$/, '')

  productById(productId: number, abortController?: AbortController) {
    return fetch(`${this.baseUrl}/products/${productId}`, {
      signal: abortController?.signal,
    })
  }

  products(params: ProductsParams, abortController?: AbortController) {
    const searchParams = new URLSearchParams({
      limit: String(params.limit),
      offset: String(params.offset),
    })

    if (params.search) {
      searchParams.set('search', params.search)
    }

    if (params.maxPrice) {
      searchParams.set('max_price', params.maxPrice)
    }

    if (params.compatibility) {
      searchParams.set('compatibility', params.compatibility)
    }

    if (params.energyRating) {
      searchParams.set('energy_rating', params.energyRating)
    }

    if (params.inStock) {
      searchParams.set('in_stock', 'true')
    }

    return fetch(`${this.baseUrl}/products?${searchParams.toString()}`, {
      signal: abortController?.signal,
    })
  }

  createOrder(payload: CreateOrderPayload, abortController?: AbortController) {
    return fetch(`${this.orderBaseUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: abortController?.signal,
    })
  }
}

const api = new Api()

export default api
