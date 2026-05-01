import type { CartProduct } from '../../mockData'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Component'
import CartItem from './components/CartItem/Component'
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
            <CartItem key={product.product.id} product={product} />
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
