import CartProductsList from '../../components/CartProductsList/Component'
import Header from '../../components/Header/Component'
import useCartProducts from '../../hooks/useCartProducts'
import CheckoutForm from './components/CheckoutForm/CheckoutForm'
import {
  BackButton,
  Content,
  Page,
  Sidebar,
} from './styles'

function CheckoutPage() {
  const { products, status } = useCartProducts()
  const total = products.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <Page>
      <Header />

      <Content>
        <CartProductsList products={products} status={status} />

        <Sidebar>
          {products.length > 0 && status !== 'loading' ? <CheckoutForm total={total} /> : null}

          <BackButton to="/cart">Назад</BackButton>
        </Sidebar>
      </Content>
    </Page>
  )
}

export default CheckoutPage
