import type { Product } from '../../../App'
import { ProductsGrid } from '../styles'
import ProductCard from './ProductCard'

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
