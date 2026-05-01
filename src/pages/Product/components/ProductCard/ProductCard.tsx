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
}

function ProductCard({ name, price, stock }: ProductCardProps) {
  return (
    <InfoPanel>
      <ProductTitle>{name}</ProductTitle>
      <Price>{`Цена: ${price} руб.`}</Price>
      <Stock>{`В наличии: ${stock}`}</Stock>

      <QuantityControl>
        <AddToCartButton to="/cart">Добавить в корзину</AddToCartButton>
        <QuantityButton type="button">+</QuantityButton>
        <QuantityValue>1</QuantityValue>
        <QuantityButton type="button">-</QuantityButton>
      </QuantityControl>
    </InfoPanel>
  )
}

export default ProductCard
