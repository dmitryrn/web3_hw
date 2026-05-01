import type { Product } from '../../../App'
import { ProductsGrid } from '../styles'
import ProductCard from './ProductCard'

type ProductGridProps = {
  products: Product[]
}

function ProductGrid({ products }: ProductGridProps) {
  return (
    <ProductsGrid>
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </ProductsGrid>
  )
}

export default ProductGrid
