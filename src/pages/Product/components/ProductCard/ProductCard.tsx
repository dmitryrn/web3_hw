import { useEffect, useState } from 'react'
import type { Product } from '../../../../models/product'
import { useAppDispatch } from '../../../../store/hooks'
import { addToCart } from '../../../../store/cartSlice'
import {
  AddToCartArea,
  AddToCartButton,
  CartFeedback,
  InfoPanel,
  Price,
  ProductTitle,
  QuantityButton,
  QuantityControl,
  QuantityValue,
  Stock,
} from './styles'

type ProductCardProps = {
  name: string
  price: number
  stock: number
  product: Product
}

function ProductCard({ product, name, price, stock }: ProductCardProps) {
  const dispatch = useAppDispatch()
  const [quantity, setQuantity] = useState(stock > 0 ? 1 : 0)
  const [isAddToCartFeedbackVisible, setIsAddToCartFeedbackVisible] = useState(false)

  useEffect(() => {
    setQuantity(stock > 0 ? 1 : 0)
    setIsAddToCartFeedbackVisible(false)
  }, [product.id, stock])

  useEffect(() => {
    if (!isAddToCartFeedbackVisible) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setIsAddToCartFeedbackVisible(false)
    }, 2000)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [isAddToCartFeedbackVisible])

  const decreaseQuantity = () => {
    setQuantity((currentValue) => Math.max(1, currentValue - 1))
  }

  const increaseQuantity = () => {
    setQuantity((currentValue) => Math.min(stock, currentValue + 1))
  }

  const handleAddToCart = () => {
    if (stock <= 0) {
      return
    }

    dispatch(addToCart({ product_id: product.id, quantity }))
    setIsAddToCartFeedbackVisible(true)
  }

  return (
    <InfoPanel>
      <ProductTitle>{name}</ProductTitle>
      <Price>{`Цена: ${price} руб.`}</Price>
      <Stock>{`В наличии: ${stock}`}</Stock>

      <QuantityControl>
        <AddToCartArea>
          <AddToCartButton type="button" onClick={handleAddToCart} disabled={stock <= 0}>
            Добавить в корзину
          </AddToCartButton>
          <CartFeedback>{isAddToCartFeedbackVisible ? 'Добавлено в корзину' : ''}</CartFeedback>
        </AddToCartArea>
        <QuantityButton type="button" onClick={decreaseQuantity} disabled={stock <= 0 || quantity <= 1}>
          -
        </QuantityButton>
        <QuantityValue>{stock > 0 ? quantity : 0}</QuantityValue>
        <QuantityButton type="button" onClick={increaseQuantity} disabled={stock <= 0 || quantity >= stock}>
          +
        </QuantityButton>
      </QuantityControl>
    </InfoPanel>
  )
}

export default ProductCard
