import Header from '../../components/Header/Component'
import {
  ActionButton,
  ConfirmationCard,
  Content,
  Message,
  OrderNumber,
  Page,
} from './styles'

const ORDER_NUMBER = '12671824687124687'

function OrderConfirmationPage() {
  return (
    <Page>
      <Header />

      <Content>
        <ConfirmationCard>
          <Message>
            Заказ <OrderNumber>#{ORDER_NUMBER}</OrderNumber> создан
          </Message>
          <Message>ожидайте звонка</Message>

          <ActionButton to="/">назад к каталогу</ActionButton>
        </ConfirmationCard>
      </Content>
    </Page>
  )
}

export default OrderConfirmationPage
