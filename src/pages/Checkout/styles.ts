import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
  padding: 1.5rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 370px;
  gap: 1.5rem;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`

export const OrderList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
