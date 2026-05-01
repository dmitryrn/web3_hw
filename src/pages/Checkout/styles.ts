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
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0.875rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;

  ${breakpoints.sm} {
    padding: 1rem;
  }

  ${breakpoints.md} {
    padding: 1.25rem;
    gap: 1.25rem;
  }

  ${breakpoints.lg} {
    grid-template-columns: minmax(0, 1fr) 370px;
    gap: 1.5rem;
  }

  ${breakpoints.xl} {
    padding: 1.5rem;
  }
`

export const OrderList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  ${breakpoints.md} {
    gap: 1rem;
  }
`

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${breakpoints.lg} {
    align-self: start;
  }
`

export const BackButton = styled(Link)`
  min-height: 2.5rem;
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
