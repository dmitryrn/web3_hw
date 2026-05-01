import { useLocation } from 'react-router-dom'
import {
  Button,
  Brand,
  BrandBlock,
  Header as HeaderShell,
  HeaderInner,
} from './styles'

function Header() {
  const { pathname } = useLocation()

  return (
    <HeaderShell>
      <HeaderInner>
        <BrandBlock>
          <Brand>Магазин лампочек</Brand>
          <Button to="/">Каталог</Button>
        </BrandBlock>

        {pathname !== '/cart' ? <Button to="/cart">Корзина</Button> : null}
      </HeaderInner>
    </HeaderShell>
  )
}

export default Header
