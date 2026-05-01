import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { breakpoints } from '../../breakpoints'

export const Page = styled.section`
  min-height: 100vh;
  background: #eaeded;
  display: flex;
  flex-direction: column;
`

export const Content = styled.section`
  flex: 1;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpoints.sm} {
    padding: 1rem;
  }

  ${breakpoints.md} {
    padding: 1.25rem;
  }

  ${breakpoints.xl} {
    padding: 1.5rem;
  }
`

export const ConfirmationCard = styled.div`
  width: 100%;
  max-width: 720px;
  min-height: 280px;
  padding: 1.5rem 1rem;
  border: 1px solid #d5d9d9;
  border-radius: 0.75rem;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  text-align: center;

  ${breakpoints.sm} {
    padding: 1.75rem 1.25rem;
  }

  ${breakpoints.md} {
    min-height: 320px;
    padding: 2rem 1.5rem;
  }

  ${breakpoints.lg} {
    min-height: 360px;
  }
`

export const Message = styled.p`
  margin: 0;
  color: #111827;
  font-size: 1.75rem;
  line-height: 1.25;

  ${breakpoints.sm} {
    font-size: 2rem;
  }

  ${breakpoints.md} {
    font-size: 2.25rem;
  }

  ${breakpoints.lg} {
    font-size: 2.5rem;
  }
`

export const OrderNumber = styled.span`
  font-weight: 700;
`

export const ActionButton = styled(Link)`
  margin-top: 1.25rem;
  width: 100%;
  min-height: 2.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  padding: 0 1.25rem;
  background: #ffffff;
  color: #111827;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${breakpoints.sm} {
    width: auto;
  }
`
