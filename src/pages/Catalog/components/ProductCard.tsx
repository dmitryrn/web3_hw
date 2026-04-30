import {
  BuyButton,
  CardBody,
  CardFooter,
  ImageArea,
  Price,
  ProductCard as ProductCardRoot,
  ProductName,
  Stock,
} from '../styles'

export type Product = {
  id: string
  name: string
  price: string
  stock: number
}

type ProductCardProps = {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <ProductCardRoot>
      <ImageArea>изображение</ImageArea>
      <CardBody>
        <ProductName>{product.name}</ProductName>
        <Stock $available={product.stock > 0}>
          {product.stock > 0 ? `В наличии: ${product.stock}` : 'Нет в наличии'}
        </Stock>
        <CardFooter>
          <Price>{product.price}</Price>
          <BuyButton type="button" disabled={product.stock === 0}>
            {product.stock > 0 ? 'Купить' : 'Нет в наличии'}
          </BuyButton>
        </CardFooter>
      </CardBody>
    </ProductCardRoot>
  )
}

export default ProductCard
