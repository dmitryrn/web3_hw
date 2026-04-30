import ProductCard, { type Product } from './ProductCard'
import { ProductsGrid } from '../styles'

type ProductGridProps = {
  products: Product[]
}

function ProductGrid({ products }: ProductGridProps) {
  return (
    <ProductsGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductsGrid>
  )
}

export default ProductGrid
