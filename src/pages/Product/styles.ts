import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Page = styled.section`
  min-height: 100vh;
  background: #eaeded;
`

export const Content = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1.5rem;

  @media (max-width: 360px) {
    padding: 0.875rem;
  }
`

export const ProductLayout = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 520px);
  gap: 1.25rem;
  align-items: start;
  margin-bottom: 1.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

export const MetaList = styled.div`
  margin-bottom: 1.25rem;
  display: grid;
  gap: 0.35rem;
  color: #374151;
`

export const DetailRow = styled.div`
  display: flex;
  gap: 0.35rem;
  flex-wrap: wrap;
`

export const DetailLabel = styled.span`
  font-weight: 600;
`

export const Description = styled.p`
  max-width: 960px;
  margin: 0 0 2rem;
  color: #111827;
  font-size: 1.1rem;
  line-height: 1.7;
`

export const Details = styled(Description)``

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

export const ProductNotFound = styled.div`
  margin-bottom: 1rem;
  color: #111827;
  font-size: 1.5rem;
  font-weight: 600;
`
