import { useEffect } from 'react'
import Header from '../../components/Header/Component'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchProducts } from '../../store/catalogSlice'
import Filters from './components/Filters'
import ProductGrid from './components/ProductGrid'
import {
  Body,
  CatalogMessage,
  Main,
  Page,
  PageButton,
  PageIndicator,
  Pagination,
} from './styles'

function CatalogPage() {
  const dispatch = useAppDispatch()
  const { products, status, error } = useAppSelector((state) => state.catalog)

  useEffect(() => {
    if (status === 'idle') {
      void dispatch(fetchProducts())
    }
  }, [dispatch, status])

  return (
    <Page>
      <Header />

      <Body>
        <Filters />

        <Main>
          {status === 'loading' ? <CatalogMessage>Загрузка товаров...</CatalogMessage> : null}
          {status === 'failed' ? <CatalogMessage>{error ?? 'Не удалось загрузить товары.'}</CatalogMessage> : null}
          {status !== 'loading' && products.length === 0 ? (
            <CatalogMessage>Товары не найдены.</CatalogMessage>
          ) : null}
          {products.length > 0 ? <ProductGrid products={products} /> : null}

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
