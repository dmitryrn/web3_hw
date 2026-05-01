import styled from 'styled-components'

export const CartItem = styled.article`
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 1.25rem;
  padding: 1rem;
  border: 1px solid #d5d9d9;
  border-radius: 0.75rem;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);

  @media (max-width: 960px) {
    grid-template-columns: 120px minmax(0, 1fr);
  }
`

export const ProductImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 0.5rem;
  display: block;
`

export const ImagePlaceholder = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
  color: #64748b;
`

export const ItemMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
`

export const ProductName = styled.div`
  font-size: 1.15rem;
  font-weight: 600;
  color: #0f172a;
`

export const QuantityBox = styled.div`
  min-width: 72px;
  min-height: 2.5rem;
  padding: 0 0.85rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  background: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #111827;
  font-weight: 600;
`

export const CartItemPrice = styled.div`
  min-width: 110px;
  color: #111827;
  font-size: 1.4rem;
  font-weight: 700;
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
