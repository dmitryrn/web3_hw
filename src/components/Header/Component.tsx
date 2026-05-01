import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Button,
  Brand,
  BrandBlock,
  BurgerButton,
  Header as HeaderShell,
  HeaderInner,
  MobileNavButton,
  MobileNavOverlay,
  MobileNavPanel,
  MobileNavSection,
} from './styles'

function Header() {
  const { pathname } = useLocation()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useEffect(() => {
    setIsMobileNavOpen(false)
  }, [pathname])

  return (
    <HeaderShell>
      <HeaderInner>
        <BrandBlock>
          <Brand to="/">Магазин лампочек</Brand>
          <Button to="/">Каталог</Button>
        </BrandBlock>

        {pathname !== '/cart' ? <Button to="/cart">Корзина</Button> : null}

        <BurgerButton
          type="button"
          aria-label="Открыть меню"
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileNavOpen((currentValue) => !currentValue)}
        >
          <span />
          <span />
          <span />
        </BurgerButton>
      </HeaderInner>

      <MobileNavOverlay
        $open={isMobileNavOpen}
        onClick={() => setIsMobileNavOpen(false)}
        aria-hidden={!isMobileNavOpen}
      >
        <MobileNavPanel
          id="mobile-navigation"
          $open={isMobileNavOpen}
          onClick={(event) => event.stopPropagation()}
        >
          <MobileNavSection>
            <MobileNavButton to="/">Каталог</MobileNavButton>
            {pathname !== '/cart' ? <MobileNavButton to="/cart">Корзина</MobileNavButton> : null}
          </MobileNavSection>
        </MobileNavPanel>
      </MobileNavOverlay>
    </HeaderShell>
  )
}

export default Header
