import styled from 'styled-components'
import { breakpoints } from '../../breakpoints'

export const List = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  ${breakpoints.md} {
    gap: 1rem;
  }
`

export const EmptyMessage = styled.div`
  padding: 1rem;
  border: 1px solid #d5d9d9;
  border-radius: 0.75rem;
  background: #ffffff;
  color: #374151;
`
