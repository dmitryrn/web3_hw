import type { CartProduct } from '../../App'
import Header from '../../components/Header/Component'
import CartItem from './components/CartItem/Component'
import {
  BackButton,
  CartList,
  Content,
  Footer,
  OrderButton,
  Page,
  Sidebar,
  Title,
} from './styles'

type CartPageProps = {
  products: CartProduct[]
}

function CartPage({ products }: CartPageProps) {
  return (
    <Page>
      <Header />
      <Title>Корзина</Title>

      <Content>
        <CartList>
          {products.map((product) => (
            <CartItem key={product.product.id} product={product} />
          ))}
        </CartList>

        <Sidebar>
          <OrderButton type="button">Создать заказ</OrderButton>
        </Sidebar>
      </Content>

      <Footer>
        <BackButton to="/">Назад</BackButton>
      </Footer>
    </Page>
  )
}

export default CartPage
