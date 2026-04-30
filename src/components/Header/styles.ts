import styled from 'styled-components'

export const Header = styled.header`
  background: #131921;
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.14);
`

export const HeaderInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0.875rem 1.5rem;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const BrandBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`

export const Brand = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.01em;
`

export const SectionTag = styled.div`
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: #232f3e;
  border: 1px solid rgba(255, 255, 255, 0.75);
  color: #f8fafc;
  font-size: 0.875rem;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
`

export const HeaderSearch = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  border-radius: 0.5rem;
  overflow: hidden;
  background: #ffffff;
`

export const SearchInput = styled.input`
  min-width: 0;
  border: 0;
  padding: 0.85rem 1rem;
  background: #ffffff;
  color: #111827;

  &:focus {
    outline: none;
  }
`

export const SearchAction = styled.button`
  border: 0;
  padding: 0 1rem;
  background: #f3a847;
  color: #111827;
  font-weight: 600;
  cursor: pointer;
`

export const CartButton = styled.button`
  border: 1px solid #374151;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  background: transparent;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`
