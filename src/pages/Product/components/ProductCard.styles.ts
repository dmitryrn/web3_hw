import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const InfoPanel = styled.div`
  min-height: 320px;
  padding: 1rem;
  border: 1px solid #d5d9d9;
  border-radius: 0.75rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const ProductTitle = styled.h1`
  margin: 0;
  color: #111827;
  font-size: 2rem;
  line-height: 1.2;
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
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
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
`

export const QuantityButton = styled.button`
  width: 2.75rem;
  min-height: 2.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  background: #ffffff;
  color: #111827;
  font-size: 1.25rem;
  cursor: pointer;
`

export const QuantityValue = styled.div`
  min-width: 2rem;
  color: #111827;
  font-size: 1.15rem;
  font-weight: 600;
  text-align: center;
`
