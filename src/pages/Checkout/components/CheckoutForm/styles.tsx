import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CheckoutCard = styled.section`
  padding: 1.25rem;
  border: 1px solid #d5d9d9;
  border-radius: 0.75rem;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1081px) {
    position: sticky;
    top: 1rem;
  }
`

export const SectionTitle = styled.h1`
  margin: 0;
  color: #111827;
  font-size: 1.5rem;
`

export const SummaryCard = styled.div`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
`

export const SummaryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const SummaryLabel = styled.div`
  color: #374151;
  font-size: 0.95rem;
`

export const SummaryValue = styled.div`
  color: #111827;
  font-size: 1.5rem;
  font-weight: 700;
`

export const FormGrid = styled.div`
  display: grid;
  gap: 0.85rem;
`

export const FieldGroup = styled.div`
  display: grid;
  gap: 0.45rem;
`

export const FieldLabel = styled.label`
  color: #374151;
  font-size: 0.95rem;
  font-weight: 600;
`

export const Field = styled.input`
  width: 100%;
  min-height: 2.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  padding: 0 0.875rem;
  background: #ffffff;
  color: #111827;

  &::placeholder {
    color: #9ca3af;
  }
`

export const CheckoutButton = styled(Link)`
  width: 100%;
  min-height: 2.9rem;
  border: 1px solid #f3a847;
  border-radius: 999px;
  background: #ffd814;
  color: #111827;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`
