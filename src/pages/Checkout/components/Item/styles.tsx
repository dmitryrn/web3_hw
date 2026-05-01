import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ItemCard = styled.article`
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr);
  gap: 1.25rem;
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

export const ItemDetails = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1rem 1.5rem;
  align-items: start;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

export const ItemMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`

export const ItemRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const Label = styled.div`
  color: #374151;
  font-size: 0.95rem;
`

export const ItemTitle = styled.div`
  color: #111827;
  font-size: 1.1rem;
  font-weight: 600;
`

export const ItemValue = styled.div`
  color: #111827;
`

export const ItemPrice = styled.div`
  color: #111827;
  font-size: 1.6rem;
  font-weight: 700;
  text-align: right;

  @media (max-width: 720px) {
    text-align: left;
  }
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
`
