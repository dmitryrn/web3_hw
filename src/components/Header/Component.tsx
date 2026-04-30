import {
  Brand,
  BrandBlock,
  CartButton,
  Header as HeaderShell,
  HeaderInner,
  HeaderSearch,
  SearchAction,
  SearchInput,
  SectionTag,
} from './styles'

type MarketplaceHeaderProps = {
  sectionLabel: string
  showSearch?: boolean
}

function Header({ sectionLabel, showSearch = false }: MarketplaceHeaderProps) {
  return (
    <HeaderShell>
      <HeaderInner>
        <BrandBlock>
          <Brand>Магазин лампочек</Brand>
          <SectionTag>{sectionLabel}</SectionTag>
        </BrandBlock>

        {showSearch ? (
          <HeaderSearch>
            <SearchInput type="search" placeholder="Поиск ламп и запчастей" />
            <SearchAction type="button">Найти</SearchAction>
          </HeaderSearch>
        ) : (
          <div />
        )}

        <CartButton type="button">Корзина</CartButton>
      </HeaderInner>
    </HeaderShell>
  )
}

export default Header
