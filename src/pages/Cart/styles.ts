import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { breakpoints } from '../../breakpoints'

export const Page = styled.section`
  min-height: 100vh;
  background: #eaeded;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  flex: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0.875rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: stretch;
  gap: 1rem;
  width: 100%;
  min-height: 0;

  ${breakpoints.sm} {
    padding: 1rem;
  }

  ${breakpoints.md} {
    padding: 1.25rem;
    gap: 1.25rem;
  }

  ${breakpoints.lg} {
    grid-template-columns: minmax(0, 1fr) 220px;
    gap: 1.5rem;
  }

  ${breakpoints.xl} {
    padding: 1.5rem;
    gap: 2rem;
  }
`

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  ${breakpoints.md} {
    gap: 1rem;
  }
`

export const Sidebar = styled.aside`
  width: 100%;
  padding: 1rem;
  border: 1px solid #d5d9d9;
  border-radius: 0.75rem;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  align-self: stretch;

  ${breakpoints.md} {
    padding: 1.25rem;
  }

  ${breakpoints.lg} {
    position: sticky;
    top: 1rem;
  }
`

export const OrderButton = styled.button`
  width: 100%;
  min-height: 2.9rem;
  border: 1px solid #f3a847;
  border-radius: 999px;
  background: #ffd814;
  color: #111827;
  font-weight: 600;
  cursor: pointer;
`

export const BackButton = styled(Link)`
  min-height: 2.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  padding: 0 1rem;
  background: #ffffff;
  color: #111827;
  font-size: 1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`
