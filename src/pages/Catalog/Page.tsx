import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
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
  PaginationEllipsis,
  Pagination,
} from './styles'

type CatalogFilters = {
  search: string
  maxPrice: string
  inStock: 'all' | 'in-stock'
  compatibility: string
  energyRating: string
}

const parseCatalogFilters = (searchParams: URLSearchParams): CatalogFilters => ({
  search: searchParams.get('search')?.trim() ?? '',
  maxPrice: searchParams.get('maxPrice')?.trim() ?? '',
  inStock: searchParams.get('inStock') === 'in-stock' ? 'in-stock' : 'all',
  compatibility: searchParams.get('compatibility')?.trim() ?? '',
  energyRating: searchParams.get('energyRating')?.trim() ?? '',
})

const parsePage = (searchParams: URLSearchParams) => {
  const pageParam = Number(searchParams.get('page'))

  if (!Number.isInteger(pageParam) || pageParam < 1) {
    return 1
  }

  return pageParam
}

function CatalogPage() {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const { products, status, error, hasNextPage } = useAppSelector((state) => state.catalog)
  const queryString = searchParams.toString()
  const { search, maxPrice, inStock, compatibility, energyRating } = parseCatalogFilters(searchParams)
  const filterKey = JSON.stringify({ search, maxPrice, inStock, compatibility, energyRating })
  const page = parsePage(searchParams)
  const previousFilterKeyRef = useRef(filterKey)
  const previousPageRef = useRef(page)

  useEffect(() => {
    if (previousFilterKeyRef.current !== filterKey) {
      previousFilterKeyRef.current = filterKey

      if (page !== 1) {
        const nextParams = new URLSearchParams(queryString)
        nextParams.set('page', '1')
        setSearchParams(nextParams)
        return
      }
    }

    void dispatch(fetchProducts({ page, search, maxPrice, inStock, compatibility, energyRating }))
  }, [dispatch, setSearchParams, compatibility, energyRating, filterKey, inStock, maxPrice, page, queryString, search])

  useEffect(() => {
    if (previousPageRef.current !== page) {
      previousPageRef.current = page
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [page])

  const handlePageChange = (nextPage: number) => {
    const nextParams = new URLSearchParams(queryString)

    nextParams.set('page', String(Math.max(1, nextPage)))

    setSearchParams(nextParams)
  }

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
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1 || status === 'loading'}
            >
              Назад
            </PageButton>
            {page > 1 ? (
              <PageButton
                type="button"
                onClick={() => handlePageChange(1)}
                disabled={status === 'loading'}
              >
                1
              </PageButton>
            ) : null}
            {page > 2 ? <PaginationEllipsis>...</PaginationEllipsis> : null}
            <PageIndicator $active>{page}</PageIndicator>
            <PageButton
              type="button"
              onClick={() => handlePageChange(page + 1)}
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
