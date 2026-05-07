import { useEffect, useState } from 'react'
import type { Product } from '../../../../models/product'
import { useAppDispatch } from '../../../../store/hooks'
import { addToCart } from '../../../../store/cartSlice'
import {
  AddToCartButton,
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

  useEffect(() => {
    setQuantity(stock > 0 ? 1 : 0)
  }, [product.id, stock])

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
  }

  return (
    <InfoPanel>
      <ProductTitle>{name}</ProductTitle>
      <Price>{`Цена: ${price} руб.`}</Price>
      <Stock>{`В наличии: ${stock}`}</Stock>

      <QuantityControl>
        <AddToCartButton type="button" onClick={handleAddToCart} disabled={stock <= 0}>
          Добавить в корзину
        </AddToCartButton>
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
