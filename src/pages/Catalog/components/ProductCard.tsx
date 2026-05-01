import type { Product } from '../../../mockData'
import { Link } from 'react-router-dom'
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
  index: number
}

function ProductCard({ product, index }: ProductCardProps) {
  const productLink = `/products/${index}`
  const firstImage = product.image_urls[0]

  return (
    <ProductCardRoot>
      <Link to={productLink}>
        <ImageArea>
        {firstImage ? (
          <ProductImage src={firstImage} alt={product.name} />
        ) : (
          'Нет изображения'
        )}
        </ImageArea>
      </Link>
      <CardBody>
        <ProductName>{product.name}</ProductName>
        <Stock $available={product.stock > 0}>
          {product.stock > 0 ? `В наличии: ${product.stock}` : 'Нет в наличии'}
        </Stock>
        <CardFooter>
          <Price>{`${product.price} руб.`}</Price>
          <BuyButton to={productLink} aria-disabled={product.stock === 0}>
            {product.stock > 0 ? 'Купить' : 'Нет в наличии'}
          </BuyButton>
        </CardFooter>
      </CardBody>
    </ProductCardRoot>
  )
}

export default ProductCard
