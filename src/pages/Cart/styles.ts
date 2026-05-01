import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Page = styled.section`
  min-height: 100vh;
  background: #eaeded;
`

export const Title = styled.h1`
  max-width: 1440px;
  margin: 0 auto 0.75rem;
  padding: 2rem 1.5rem 0;
  font-size: 2.1rem;
  color: #0f172a;
`

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 220px;
  gap: 2rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Sidebar = styled.aside`
  width: 100%;
  padding: 1.25rem;
  border: 1px solid #d5d9d9;
  border-radius: 0.75rem;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
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

export const Footer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem 1.5rem 3rem;
  display: flex;
  justify-content: flex-end;
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
