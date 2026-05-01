import Header from '../../components/Header/Component'
import Filters from './components/Filters'
import ProductGrid from './components/ProductGrid'
import type { Product } from './components/ProductCard'
import {
  Body,
  Main,
  Page,
  PageButton,
  PageIndicator,
  Pagination,
} from './styles'

type CatalogPageProps = {
  products: Product[]
}

function CatalogPage({ products }: CatalogPageProps) {
  return (
    <Page>
      <Header />

      <Body>
        <Filters />

        <Main>
          <ProductGrid products={products} />

          <Pagination>
            <PageButton type="button">Назад</PageButton>
            <PageIndicator>1</PageIndicator>
            <PageIndicator $active>2</PageIndicator>
            <PageIndicator>3</PageIndicator>
            <PageButton type="button">Далее</PageButton>
          </Pagination>
        </Main>
      </Body>
    </Page>
  )
}

export default CatalogPage
