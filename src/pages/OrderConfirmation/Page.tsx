import Header from '../../components/Header/Component'
import { useAppSelector } from '../../store/hooks'
import {
  ActionButton,
  ConfirmationCard,
  Content,
  Message,
  OrderNumber,
  Page,
} from './styles'

function OrderConfirmationPage() {
  const orderId = useAppSelector((state) => state.checkout.orderId)

  return (
    <Page>
      <Header />

      <Content>
        <ConfirmationCard>
          <Message>
            Заказ {orderId ? <OrderNumber>#{orderId}</OrderNumber> : null} создан
          </Message>
          <Message>ожидайте звонка</Message>

          <ActionButton to="/">назад к каталогу</ActionButton>
        </ConfirmationCard>
      </Content>
    </Page>
  )
}

export default OrderConfirmationPage
