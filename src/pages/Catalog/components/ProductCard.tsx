import type { Product } from '../../../App'
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
}

function ProductCard({ product }: ProductCardProps) {
  const productLink = `/products/${product.id}`

  return (
    <ProductCardRoot>
      <Link to={productLink}>
        <ImageArea>
        {product.image_url ? (
          <ProductImage src={product.image_url} alt={product.name} />
        ) : (
          'изображение'
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
