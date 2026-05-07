import type { CheckoutCustomerFields } from '../../../../store/checkoutSlice'
import {
  CheckoutButton,
  CheckoutCard,
  ErrorMessage,
  Field,
  FieldGroup,
  FieldLabel,
  Form,
  FormGrid,
  SectionTitle,
  SummaryCard,
  SummaryLabel,
  SummaryRow,
  SummaryValue,
} from './styles'

type CheckoutFormProps = {
  total: number
  disabled?: boolean
  error: string | null
  isSubmitting: boolean
  values: CheckoutCustomerFields
  onFieldChange: (field: keyof CheckoutCustomerFields, value: string) => void
  onSubmit: () => Promise<void>
}

function CheckoutForm({ total, disabled = false, error, isSubmitting, values, onFieldChange, onSubmit }: CheckoutFormProps) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      await onSubmit()
    } catch {
      return
    }
  }

  return (
    <CheckoutCard>
      <SectionTitle>Оформление</SectionTitle>

      <SummaryCard>
        <SummaryRow>
          <SummaryLabel>Общая сумма</SummaryLabel>
          <SummaryValue>{`${total} руб.`}</SummaryValue>
        </SummaryRow>
      </SummaryCard>

      <Form onSubmit={handleSubmit}>
        <FormGrid>
          <FieldGroup>
            <FieldLabel htmlFor="phone">Номер телефона</FieldLabel>
            <Field
              id="phone"
              type="tel"
              placeholder="+7 (999) 123-45-67"
              value={values.customer_phone}
              onChange={(event) => onFieldChange('customer_phone', event.target.value)}
              disabled={isSubmitting || disabled}
            />
          </FieldGroup>

          <FieldGroup>
            <FieldLabel htmlFor="city">Город</FieldLabel>
            <Field
              id="city"
              type="text"
              placeholder="Москва"
              value={values.customer_city}
              onChange={(event) => onFieldChange('customer_city', event.target.value)}
              disabled={isSubmitting || disabled}
            />
          </FieldGroup>

          <FieldGroup>
            <FieldLabel htmlFor="street">Улица</FieldLabel>
            <Field
              id="street"
              type="text"
              placeholder="Ленинградский проспект"
              value={values.customer_street}
              onChange={(event) => onFieldChange('customer_street', event.target.value)}
              disabled={isSubmitting || disabled}
            />
          </FieldGroup>

          <FieldGroup>
            <FieldLabel htmlFor="house">Дом</FieldLabel>
            <Field
              id="house"
              type="text"
              placeholder="15"
              value={values.customer_house}
              onChange={(event) => onFieldChange('customer_house', event.target.value)}
              disabled={isSubmitting || disabled}
            />
          </FieldGroup>

          <FieldGroup>
            <FieldLabel htmlFor="building">Строение</FieldLabel>
            <Field
              id="building"
              type="text"
              placeholder="2"
              value={values.customer_building ?? ''}
              onChange={(event) => onFieldChange('customer_building', event.target.value)}
              disabled={isSubmitting || disabled}
            />
          </FieldGroup>
        </FormGrid>

        {error ? <ErrorMessage>{error}</ErrorMessage> : null}

        <CheckoutButton type="submit" disabled={isSubmitting || disabled}>
          {isSubmitting ? 'Создание заказа...' : 'Создать заказ'}
        </CheckoutButton>
      </Form>
    </CheckoutCard>
  )
}

export default CheckoutForm
