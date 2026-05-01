import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { productBreakpoints } from '../../breakpoints'

export const InfoPanel = styled.div`
  min-height: 320px;
  padding: 0.875rem;
  border: 1px solid #d5d9d9;
  border-radius: 0.75rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  ${productBreakpoints.md} {
    padding: 1rem;
  }
`

export const ProductTitle = styled.h1`
  margin: 0;
  color: #111827;
  font-size: 1.35rem;
  line-height: 1.2;
  overflow-wrap: anywhere;

  ${productBreakpoints.sm} {
    font-size: 1.5rem;
  }

  ${productBreakpoints.md} {
    font-size: 1.75rem;
  }

  ${productBreakpoints.lg} {
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

  ${productBreakpoints.sm} {
    display: flex;
    flex-wrap: wrap;
  }
`

export const AddToCartButton = styled(Link)`
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
  grid-column: 1 / -1;
  width: 100%;

  ${productBreakpoints.sm} {
    width: auto;
  }
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

  ${productBreakpoints.sm} {
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
