import styled from 'styled-components'
import { breakpoints } from '../../../../breakpoints'

export const InfoPanel = styled.div`
  min-height: 320px;
  padding: 0.875rem;
  border: 1px solid #d5d9d9;
  border-radius: 0.75rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  ${breakpoints.md} {
    padding: 1rem;
  }
`

export const ProductTitle = styled.h1`
  margin: 0;
  color: #111827;
  font-size: 1.35rem;
  line-height: 1.2;
  overflow-wrap: anywhere;

  ${breakpoints.sm} {
    font-size: 1.5rem;
  }

  ${breakpoints.md} {
    font-size: 1.75rem;
  }

  ${breakpoints.lg} {
    font-size: 2rem;
  }
`

export const Price = styled.div`
  color: #111827;
  font-size: 1.5rem;
`

export const Stock = styled.div`
  color: #007600;
  font-size: 1.15rem;
`

export const QuantityControl = styled.div`
  margin-top: auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  align-items: center;

  ${breakpoints.sm} {
    display: flex;
    flex-wrap: wrap;
  }
`

export const AddToCartArea = styled.div`
  grid-column: 1 / -1;
  display: grid;
  gap: 0.35rem;
`

export const AddToCartButton = styled.button`
  min-height: 2.9rem;
  border: 1px solid #f3a847;
  border-radius: 999px;
  padding: 0 1.25rem;
  background: #ffd814;
  color: #111827;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    border-color: #d1d5db;
    background: #e5e7eb;
    color: #6b7280;
  }

  ${breakpoints.sm} {
    width: auto;
  }
`

export const CartFeedback = styled.div`
  min-height: 1.25rem;
  color: #007600;
  font-size: 0.9rem;
  line-height: 1.4;
`

export const QuantityButton = styled.button`
  width: 100%;
  min-height: 2.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  background: #ffffff;
  color: #111827;
  font-size: 1.25rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    color: #9ca3af;
    background: #f8fafc;
  }

  ${breakpoints.sm} {
    width: 2.75rem;
  }
`

export const QuantityValue = styled.div`
  min-width: 0;
  color: #111827;
  font-size: 1.15rem;
  font-weight: 600;
  text-align: center;
`
