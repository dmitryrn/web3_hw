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
    justify-content: space-between;
  }

  @media (max-width: 360px) {
    padding: 0.75rem 0.875rem;
    gap: 0.75rem;
  }
`

export const BrandBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    min-width: 0;
  }
`

export const Brand = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: inherit;
  text-decoration: none;

  @media (max-width: 360px) {
    font-size: 0.9rem;
    line-height: 1.2;
  }
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
    display: none;
  }
`

export const BurgerButton = styled.button`
  display: none;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0.55rem;
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 0.75rem;
  background: #232f3e;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.28rem;

  span {
    width: 100%;
    height: 2px;
    border-radius: 999px;
    background: #f8fafc;
  }

  @media (max-width: 900px) {
    display: inline-flex;
    flex-shrink: 0;
  }

  @media (max-width: 360px) {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
  }
`

export const MobileNavOverlay = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 900px) {
    display: ${({ $open }) => ($open ? 'block' : 'none')};
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.36);
    z-index: 20;
  }
`

export const MobileNavPanel = styled.aside<{ $open: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: min(20rem, 85vw);
  min-height: 100vh;
  padding: 5.25rem 1rem 1rem;
  background: #131921;
  box-shadow: -8px 0 24px rgba(15, 23, 42, 0.28);
  transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  transition: transform 180ms ease;
`

export const MobileNavSection = styled.nav`
  display: grid;
  gap: 0.875rem;
`

export const MobileNavButton = styled(Link)`
  min-height: 3.5rem;
  padding: 0 1.25rem;
  border-radius: 999px;
  background: #232f3e;
  border: 1px solid rgba(255, 255, 255, 0.75);
  color: #f8fafc;
  font-size: 1.15rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    background: #2d3d52;
  }
`
