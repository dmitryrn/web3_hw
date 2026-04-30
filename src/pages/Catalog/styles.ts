
import styled from 'styled-components'


export const Page = styled.section`
  min-height: 100vh;
  background: #eaeded;
`

export const Body = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 1.5rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const Sidebar = styled.aside``

export const SidebarCard = styled.div`
  position: sticky;
  top: 1rem;
  padding: 1.25rem;
  border: 1px solid #d5d9d9;
  border-radius: 0.75rem;
  background: #ffffff;
`

export const SidebarTitle = styled.h2`
  margin: 0 0 1rem;
  font-size: 1.1rem;
  color: #0f172a;
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
`

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border: 1px solid #d5d9d9;
  border-radius: 0.75rem;
  background: #ffffff;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const ResultsText = styled.div`
  color: #475569;
  font-size: 0.95rem;
`

export const SortSelect = styled.select`
  width: 220px;
  min-height: 2.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  padding: 0 0.75rem;
  background: #ffffff;
  color: #111827;

  @media (max-width: 640px) {
    width: 100%;
  }
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const ProductCard = styled.article`
  border: 1px solid #d5d9d9;
  border-radius: 0.75rem;
  background: #ffffff;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
`

export const ImageArea = styled.div`
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
  color: #64748b;
  font-size: 1rem;
`

export const CardBody = styled.div`
  padding: 1rem;
`

export const ProductName = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  line-height: 1.4;
  font-weight: 600;
  color: #0f172a;
`

export const Stock = styled.div<{ $available?: boolean }>`
  margin-bottom: 0.9rem;
  font-size: 0.9rem;
  color: ${({ $available }) => ($available ? '#007600' : '#b91c1c')};
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
`

export const BuyButton = styled.button`
  min-width: 150px;
  min-height: 2.7rem;
  border: 1px solid #f3a847;
  border-radius: 999px;
  padding: 0 1rem;
  background: #ffd814;
  color: #111827;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    border-color: #d1d5db;
    background: #e5e7eb;
    color: #6b7280;
    cursor: not-allowed;
  }
`

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 0 2rem;
`

export const PageButton = styled.button`
  min-height: 2.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  padding: 0 1rem;
  background: #ffffff;
  color: #111827;
  cursor: pointer;
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
