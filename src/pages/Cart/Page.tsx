import { useNavigate } from 'react-router-dom'
import CartProductsList from '../../components/CartProductsList/Component'
import Header from '../../components/Header/Component'
import useCartProducts from '../../hooks/useCartProducts'
import {
  BackButton,
  Content,
  OrderButton,
  Page,
  Sidebar,
} from './styles'

function CartPage() {
  const navigate = useNavigate()
  const { products, status } = useCartProducts()

  return (
    <Page>
      <Header />

      <Content>
        <CartProductsList
          products={products}
          status={status}
          showQuantityControls
          showRemoveButton
        />

        <Sidebar>
          <OrderButton type="button" onClick={() => navigate('/checkout')} disabled={products.length === 0 || status === 'loading'}>
            Создать заказ
          </OrderButton>
          <BackButton to="/">Назад</BackButton>
        </Sidebar>
      </Content>
    </Page>
  )
}

export default CartPage
