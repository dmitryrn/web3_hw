import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { breakpoints } from '../../breakpoints'

export const Page = styled.section`
  min-height: 100vh;
  background: #eaeded;
`

export const Body = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0.875rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.875rem;

  ${breakpoints.sm} {
    padding: 1rem;
    gap: 1rem;
  }

  ${breakpoints.md} {
    padding: 1.25rem;
    gap: 1.25rem;
  }

  ${breakpoints.lg} {
    grid-template-columns: 260px minmax(0, 1fr);
    gap: 1.5rem;
  }

  ${breakpoints.xl} {
    padding: 1.5rem;
  }
`

export const Sidebar = styled.aside``

export const SidebarCard = styled.div`
  padding: 0.875rem;
  border: 1px solid #d5d9d9;
  border-radius: 0.75rem;
  background: #ffffff;

  ${breakpoints.sm} {
    padding: 1rem;
  }

  ${breakpoints.md} {
    padding: 1.25rem;
  }

  ${breakpoints.lg} {
    position: sticky;
    top: 1rem;
  }
`

export const SidebarTitle = styled.h2`
  margin: 0 0 1rem;
  font-size: 1rem;
  color: #0f172a;

  ${breakpoints.md} {
    font-size: 1.1rem;
  }
`

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-bottom: 1rem;
`

export const FilterLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
`

const controlStyles = `
  width: 100%;
  min-height: 2.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  padding: 0 0.875rem;
  background: #ffffff;
  color: #111827;
`

export const FilterInput = styled.input`
  ${controlStyles}
`

export const FilterSelect = styled.select`
  ${controlStyles}
`

export const ApplyButton = styled.button`
  width: 100%;
  min-height: 2.9rem;
  border: 1px solid #f3a847;
  border-radius: 999px;
  background: #ffd814;
  color: #111827;
  font-weight: 600;
  cursor: pointer;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${breakpoints.md} {
    gap: 1.25rem;
  }
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.875rem;

  ${breakpoints.sm} {
    gap: 1rem;
  }

  ${breakpoints.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${breakpoints.xl} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export const ProductCard = styled.article`
  border: 1px solid #d5d9d9;
  border-radius: 0.75rem;
  background: #ffffff;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);

  &:hover {
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
  }
`

export const ImageArea = styled.div`
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
  color: #64748b;
  font-size: 1rem;

  ${breakpoints.sm} {
    min-height: 220px;
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  display: block;

  ${breakpoints.sm} {
    height: 220px;
  }
`

export const CardBody = styled.div`
  padding: 0.875rem;

  ${breakpoints.md} {
    padding: 1rem;
  }
`

export const ProductName = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1rem;
  line-height: 1.4;
  font-weight: 600;
  color: #0f172a;
  overflow-wrap: anywhere;

  ${breakpoints.md} {
    font-size: 1.05rem;
  }
`

export const Stock = styled.div<{ $available?: boolean }>`
  margin-bottom: 0.65rem;
  font-size: 0.9rem;
  color: ${({ $available }) => ($available ? '#007600' : '#b91c1c')};
`

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.75rem;

  ${breakpoints.sm} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`

export const Price = styled.div`
  font-size: 1.35rem;
  font-weight: 700;
  color: #111827;

  ${breakpoints.md} {
    font-size: 1.5rem;
  }
`

export const BuyButton = styled(Link)`
  min-width: 0;
  width: 100%;
  min-height: 2.7rem;
  border: 1px solid #f3a847;
  border-radius: 999px;
  padding: 0 1rem;
  background: #ffd814;
  color: #111827;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &[aria-disabled='true'] {
    pointer-events: none;
    border-color: #d1d5db;
    background: #e5e7eb;
    color: #6b7280;
    cursor: not-allowed;
  }

  ${breakpoints.sm} {
    width: auto;
    min-width: 150px;
  }
`

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 0 2rem;
  flex-wrap: wrap;

  ${breakpoints.md} {
    gap: 0.75rem;
  }
`

export const PageButton = styled.button`
  min-height: 2.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  padding: 0 0.875rem;
  background: #ffffff;
  color: #111827;
  cursor: pointer;

  ${breakpoints.sm} {
    padding: 0 1rem;
  }
`

export const PageIndicator = styled.span<{ $active?: boolean }>`
  min-width: 2.5rem;
  min-height: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ $active }) => ($active ? '#f3a847' : '#cbd5e1')};
  border-radius: 0.5rem;
  background: ${({ $active }) => ($active ? '#fff7d6' : '#ffffff')};
  color: #111827;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
`
