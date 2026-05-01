import { Link } from 'react-router-dom'
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
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

export const Button = styled(Link)`
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: #232f3e;
  border: 1px solid rgba(255, 255, 255, 0.75);
  color: #f8fafc;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  text-align: center;

  &:hover {
    background: #2d3d52;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`
