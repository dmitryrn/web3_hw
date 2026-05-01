import type { Product } from '../../../App'
import {
  BuyButton,
  CardBody,
  CardFooter,
  ImageArea,
  ProductImage,
  Price,
  ProductCard as ProductCardRoot,
  ProductName,
  Stock,
} from '../styles'

type ProductCardProps = {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <ProductCardRoot>
      <ImageArea>
        {product.image_url ? (
          <ProductImage src={product.image_url} alt={product.name} />
        ) : (
          'изображение'
        )}
      </ImageArea>
      <CardBody>
        <ProductName>{product.name}</ProductName>
        <Stock $available={product.stock > 0}>
          {product.stock > 0 ? `В наличии: ${product.stock}` : 'Нет в наличии'}
        </Stock>
        <CardFooter>
          <Price>{`${product.price} руб.`}</Price>
          <BuyButton type="button" disabled={product.stock === 0}>
            {product.stock > 0 ? 'Купить' : 'Нет в наличии'}
          </BuyButton>
        </CardFooter>
      </CardBody>
    </ProductCardRoot>
  )
}

export default ProductCard
