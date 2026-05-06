import type { CartProduct } from '../../models/product'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Component'
import OrderProductItem from '../../components/OrderProductItem/Component'
import {
  BackButton,
  CartList,
  Content,
  OrderButton,
  Page,
  Sidebar,
} from './styles'

type CartPageProps = {
  products: CartProduct[]
}

function CartPage({ products }: CartPageProps) {
  const navigate = useNavigate()

  return (
    <Page>
      <Header />

      <Content>
        <CartList>
          {products.map((product) => (
            <OrderProductItem
              key={product.product.id}
              product={product}
              productLink={`/products/${product.product.id}`}
              showQuantityControls
              showRemoveButton
            />
          ))}
        </CartList>

        <Sidebar>
          <OrderButton type="button" onClick={() => navigate('/checkout')}>
            Создать заказ
          </OrderButton>
          <BackButton to="/">Назад</BackButton>
        </Sidebar>
      </Content>
    </Page>
  )
}

export default CartPage
