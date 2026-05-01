import {
  CheckoutButton,
  CheckoutCard,
  Field,
  FieldGroup,
  FieldLabel,
  FormGrid,
  SectionTitle,
  SummaryCard,
  SummaryLabel,
  SummaryRow,
  SummaryValue,
} from './styles'

type CheckoutFormProps = {
  total: number
}

function CheckoutForm({ total }: CheckoutFormProps) {
  return (
    <CheckoutCard>
      <SectionTitle>Оформление</SectionTitle>

      <SummaryCard>
        <SummaryRow>
          <SummaryLabel>Общая сумма</SummaryLabel>
          <SummaryValue>{`${total} руб.`}</SummaryValue>
        </SummaryRow>
      </SummaryCard>

      <FormGrid>
        <FieldGroup>
          <FieldLabel htmlFor="phone">Номер телефона</FieldLabel>
          <Field id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel htmlFor="city">Город</FieldLabel>
          <Field id="city" type="text" placeholder="Москва" />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel htmlFor="street">Улица</FieldLabel>
          <Field id="street" type="text" placeholder="Ленинградский проспект" />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel htmlFor="house">Дом</FieldLabel>
          <Field id="house" type="text" placeholder="15" />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel htmlFor="building">Строение</FieldLabel>
          <Field id="building" type="text" placeholder="2" />
        </FieldGroup>
      </FormGrid>

      <CheckoutButton to="/order-confirmation">Создать заказ</CheckoutButton>
    </CheckoutCard>
  )
}

export default CheckoutForm
