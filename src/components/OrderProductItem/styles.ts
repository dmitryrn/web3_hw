import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { breakpoints } from '../../breakpoints'

export const ItemCard = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.875rem;
  align-items: start;
  padding: 0.875rem;
  border: 1px solid #d5d9d9;
  border-radius: 0.75rem;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);

  ${breakpoints.sm} {
    padding: 1rem;
  }

  ${breakpoints.md} {
    grid-template-columns: 150px minmax(0, 1fr);
    gap: 1.25rem;
    align-items: center;
  }
`

export const ItemImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  border-radius: 0.5rem;
  display: block;
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);

  ${breakpoints.md} {
    width: 150px;
  }
`

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
  color: #64748b;

  ${breakpoints.md} {
    width: 150px;
  }
`

export const ItemDetails = styled.div<{ $showQuantityControls: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.875rem;
  align-items: start;

  ${breakpoints.md} {
    gap: 1rem 1.25rem;
  }

  ${breakpoints.lg} {
    grid-template-columns: ${({ $showQuantityControls }) =>
      $showQuantityControls ? 'minmax(0, 1fr) auto auto' : 'minmax(0, 1fr) auto'};
    align-items: center;
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
  font-size: 1rem;
  font-weight: 600;
  overflow-wrap: anywhere;

  ${breakpoints.md} {
    font-size: 1.15rem;
  }
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
  width: 100%;
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

  ${breakpoints.sm} {
    width: fit-content;
  }
`

export const QuantityBox = styled.div`
  min-width: 0;
  width: 100%;
  min-height: 3.25rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.75rem;
  background: #ffffff;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  overflow: hidden;
  justify-self: start;

  ${breakpoints.sm} {
    display: inline-flex;
    width: fit-content;
    min-width: 144px;
  }
`

export const QuantityAction = styled.button`
  width: 100%;
  min-height: 3.25rem;
  border: 0;
  background: #ffffff;
  color: #111827;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    color: #9ca3af;
  }

  &:first-child {
    border-right: 1px solid #cbd5e1;
  }

  &:last-child {
    border-left: 1px solid #cbd5e1;
  }

  ${breakpoints.sm} {
    width: 3.1rem;
  }
`

export const QuantityValue = styled.div`
  min-width: 0;
  padding: 0 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #111827;
  font-size: 1.15rem;
  font-weight: 600;

  ${breakpoints.sm} {
    min-width: 4rem;
  }
`

export const ItemPrice = styled.div`
  min-width: 0;
  color: #111827;
  font-size: 1.35rem;
  font-weight: 700;
  text-align: left;
  justify-self: start;

  ${breakpoints.md} {
    font-size: 1.5rem;
  }

  ${breakpoints.lg} {
    min-width: 110px;
    font-size: 1.6rem;
    text-align: right;
    justify-self: end;
  }
`
