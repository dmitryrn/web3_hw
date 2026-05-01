import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ConfirmationCard = styled.div`
  width: 100%;
  max-width: 720px;
  min-height: 360px;
  padding: 2rem 1.5rem;
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

  @media (max-width: 720px) {
    min-height: 280px;
    padding: 1.5rem 1rem;
  }
`

export const Message = styled.p`
  margin: 0;
  color: #111827;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  line-height: 1.25;
`

export const OrderNumber = styled.span`
  font-weight: 700;
`

export const ActionButton = styled(Link)`
  margin-top: 1.25rem;
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
`
