import { useEffect } from 'react'
import Header from '../../components/Header/Component'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchProducts, goToPage } from '../../store/catalogSlice'
import Filters from './components/Filters'
import ProductGrid from './components/ProductGrid'
import {
  Body,
  CatalogMessage,
  Main,
  Page,
  PageButton,
  PageIndicator,
  PaginationEllipsis,
  Pagination,
} from './styles'

function CatalogPage() {
  const dispatch = useAppDispatch()
  const { products, status, error, page, hasNextPage, search } = useAppSelector((state) => state.catalog)

  useEffect(() => {
    void dispatch(fetchProducts({ page, search }))
  }, [dispatch, page, search])

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
            <PageButton
              type="button"
              onClick={() => dispatch(goToPage(page - 1))}
              disabled={page === 1 || status === 'loading'}
            >
              Назад
            </PageButton>
            {page > 1 ? (
              <PageButton
                type="button"
                onClick={() => dispatch(goToPage(1))}
                disabled={status === 'loading'}
              >
                1
              </PageButton>
            ) : null}
            {page > 2 ? <PaginationEllipsis>...</PaginationEllipsis> : null}
            <PageIndicator $active>{page}</PageIndicator>
            <PageButton
              type="button"
              onClick={() => dispatch(goToPage(page + 1))}
              disabled={!hasNextPage || status === 'loading'}
            >
              Далее
            </PageButton>
          </Pagination>
        </Main>
      </Body>
    </Page>
  )
}

export default CatalogPage
