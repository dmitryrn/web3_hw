import type { CartProduct } from '../../mockData'
import Header from '../../components/Header/Component'
import OrderProductItem from '../../components/OrderProductItem/Component'
import CheckoutForm from './components/CheckoutForm/CheckoutForm'
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
            <OrderProductItem
              key={product.product.id}
              product={product}
              productLink={`/products/${product.product.id - 1}`}
            />
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
