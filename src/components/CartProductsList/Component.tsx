import type { CartProduct } from '../../models/product'
import OrderProductItem from '../OrderProductItem/Component'
import { EmptyMessage, List } from './styles'

type CartProductsListProps = {
  products: CartProduct[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  showQuantityControls?: boolean
  showRemoveButton?: boolean
}

function CartProductsList({
  products,
  status,
  showQuantityControls = false,
  showRemoveButton = false,
}: CartProductsListProps) {
  return (
    <List>
      {status === 'loading' ? <EmptyMessage>Загрузка корзины...</EmptyMessage> : null}
      {status === 'failed' ? <EmptyMessage>Не удалось загрузить товары корзины.</EmptyMessage> : null}
      {status !== 'loading' && status !== 'failed' && products.length === 0 ? <EmptyMessage>Корзина пуста.</EmptyMessage> : null}
      {products.map((product) => (
        <OrderProductItem
          key={product.product.id}
          product={product}
          productLink={`/products/${product.product.id}`}
          showQuantityControls={showQuantityControls}
          showRemoveButton={showRemoveButton}
        />
      ))}
    </List>
  )
}

export default CartProductsList
