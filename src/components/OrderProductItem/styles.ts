import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ItemCard = styled.article`
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr);
  gap: 1.25rem;
  align-items: center;
  padding: 1rem;
  border: 1px solid #d5d9d9;
  border-radius: 0.75rem;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

export const ItemImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 0.5rem;
  display: block;

  @media (max-width: 720px) {
    width: 100%;
    max-width: 150px;
  }
`

export const ImagePlaceholder = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
  color: #64748b;

  @media (max-width: 720px) {
    width: 100%;
    max-width: 150px;
  }
`

export const ItemDetails = styled.div<{ $showQuantityControls: boolean }>`
  display: grid;
  grid-template-columns: ${({ $showQuantityControls }) =>
    $showQuantityControls ? 'minmax(0, 1fr) auto auto' : 'minmax(0, 1fr) auto'};
  gap: 1rem 1.5rem;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    align-items: start;
  }
`

export const ItemMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 0;
`

export const ProductName = styled.div`
  color: #111827;
  font-size: 1.15rem;
  font-weight: 600;
`

export const RemoveButton = styled.button`
  width: fit-content;
  border: 0;
  padding: 0;
  background: transparent;
  color: #2563eb;
  font-size: 0.95rem;
  cursor: pointer;
`

export const QuantityRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: #111827;
`

export const QuantityLabel = styled.span`
  color: #374151;
`

export const ItemLink = styled(Link)`
  width: fit-content;
  min-height: 2.6rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  padding: 0 1rem;
  background: #ffffff;
  color: #111827;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  justify-self: start;
`

export const QuantityBox = styled.div`
  min-width: 144px;
  min-height: 3.25rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.75rem;
  background: #ffffff;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  justify-self: start;
`

export const QuantityAction = styled.button`
  width: 3.1rem;
  min-height: 3.25rem;
  border: 0;
  background: #ffffff;
  color: #111827;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;

  &:first-child {
    border-right: 1px solid #cbd5e1;
  }

  &:last-child {
    border-left: 1px solid #cbd5e1;
  }
`

export const QuantityValue = styled.div`
  min-width: 4rem;
  padding: 0 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #111827;
  font-size: 1.15rem;
  font-weight: 600;
`

export const ItemPrice = styled.div`
  min-width: 110px;
  color: #111827;
  font-size: 1.6rem;
  font-weight: 700;
  text-align: right;
  justify-self: end;

  @media (max-width: 960px) {
    text-align: left;
    justify-self: start;
  }
`
