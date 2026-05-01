import type { CartProduct } from '../../App'
import Header from '../../components/Header/Component'
import CheckoutForm from './components/CheckoutForm/CheckoutForm'
import Item from './components/Item/Item'
import {
  BackButton,
  Content,
  OrderList,
  Page,
  Sidebar,
} from './styles'

type CheckoutPageProps = {
  products: CartProduct[]
}

function CheckoutPage({ products }: CheckoutPageProps) {
  const total = products.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <Page>
      <Header />

      <Content>
        <OrderList>
          {products.map((product) => (
            <Item key={product.product.id} product={product} />
          ))}
        </OrderList>

        <Sidebar>
          <CheckoutForm total={total} />

          <BackButton to="/cart">Назад</BackButton>
        </Sidebar>
      </Content>
    </Page>
  )
}

export default CheckoutPage
