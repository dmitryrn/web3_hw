import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CartProductsList from '../../components/CartProductsList/Component'
import Header from '../../components/Header/Component'
import useCartProducts from '../../hooks/useCartProducts'
import type { CheckoutCustomerFields } from '../../store/checkoutSlice'
import { submitOrder } from '../../store/checkoutSlice'
import { clearCart } from '../../store/cartSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import CheckoutForm from './components/CheckoutForm/CheckoutForm'
import {
  BackButton,
  Content,
  Page,
  Sidebar,
} from './styles'

function CheckoutPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { products, status } = useCartProducts()
  const checkout = useAppSelector((state) => state.checkout)
  const [fields, setFields] = useState<CheckoutCustomerFields>({
    customer_phone: '',
    customer_city: '',
    customer_street: '',
    customer_house: '',
    customer_building: '',
  })
  const total = products.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const isCheckoutDisabled = products.length === 0 || status === 'loading'

  const handleFieldChange = (field: keyof CheckoutCustomerFields, value: string) => {
    setFields((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const handleSubmit = async () => {
    await dispatch(submitOrder(fields)).unwrap()
    dispatch(clearCart())
    setFields({
      customer_phone: '',
      customer_city: '',
      customer_street: '',
      customer_house: '',
      customer_building: '',
    })
    navigate('/order-confirmation')
  }

  return (
    <Page>
      <Header />

      <Content>
        <CartProductsList products={products} status={status} />

        <Sidebar>
          {products.length > 0 && status !== 'loading' ? (
            <CheckoutForm
              total={total}
              disabled={isCheckoutDisabled}
              error={checkout.error}
              isSubmitting={checkout.status === 'loading'}
              values={fields}
              onFieldChange={handleFieldChange}
              onSubmit={handleSubmit}
            />
          ) : null}

          <BackButton to="/cart">Назад</BackButton>
        </Sidebar>
      </Content>
    </Page>
  )
}

export default CheckoutPage
