import { useEffect, useState } from 'react'
import type { CartProduct, Product } from '../models/product'
import { apiBaseUrl } from '../store/api'
import { useAppSelector } from '../store/hooks'

type UseCartProductsResult = {
  products: CartProduct[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

function useCartProducts(): UseCartProductsResult {
  const items = useAppSelector((state) => state.cart.items)
  const [fetchedProducts, setFetchedProducts] = useState<Product[]>([])
  const [status, setStatus] = useState<'idle' | 'loading' | 'succeeded' | 'failed'>('idle')
  const productIds = items.map((item) => item.productId)
  const productIdsKey = productIds.join(',')
  const quantitiesByProductId = new Map(items.map((item) => [item.productId, item.quantity]))
  const products = fetchedProducts.map((product) => ({
    product,
    quantity: quantitiesByProductId.get(product.id) ?? 1,
  }))

  useEffect(() => {
    if (productIds.length === 0) {
      setFetchedProducts([])
      setStatus('idle')
      return
    }

    const abortController = new AbortController()

    const loadProducts = async () => {
      setStatus('loading')

      try {
        const responses = await Promise.all(
          productIds.map((productId) =>
            fetch(`${apiBaseUrl}/products/${productId}`, {
              signal: abortController.signal,
            }),
          ),
        )

        if (responses.some((response) => !response.ok)) {
          throw new Error('Failed to fetch cart products')
        }

        const nextFetchedProducts = (await Promise.all(responses.map((response) => response.json()))) as Product[]
        setFetchedProducts(nextFetchedProducts)
        setStatus('succeeded')
      } catch {
        if (abortController.signal.aborted) {
          return
        }

        setFetchedProducts([])
        setStatus('failed')
      }
    }

    void loadProducts()

    return () => {
      abortController.abort()
    }
  }, [productIdsKey])

  return { products, status }
}

export default useCartProducts
