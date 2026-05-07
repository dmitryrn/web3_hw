import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  ApplyButton,
  FilterGroup,
  FilterInput,
  FilterLabel,
  FilterSelect,
  Sidebar,
  SidebarCard,
  SidebarTitle,
} from '../styles'

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

function Filters() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { search, maxPrice, inStock, compatibility, energyRating } = parseCatalogFilters(searchParams)
  const [draftSearch, setDraftSearch] = useState(search)
  const [draftMaxPrice, setDraftMaxPrice] = useState(maxPrice)
  const [draftInStock, setDraftInStock] = useState(inStock)
  const [draftCompatibility, setDraftCompatibility] = useState(compatibility)
  const [draftEnergyRating, setDraftEnergyRating] = useState(energyRating)

  useEffect(() => {
    setDraftSearch(search)
    setDraftMaxPrice(maxPrice)
    setDraftInStock(inStock)
    setDraftCompatibility(compatibility)
    setDraftEnergyRating(energyRating)
  }, [compatibility, energyRating, inStock, maxPrice, search])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextParams = new URLSearchParams(searchParams)
    const nextFilters = {
      search: draftSearch.trim(),
      maxPrice: draftMaxPrice.trim(),
      inStock: draftInStock,
      compatibility: draftCompatibility.trim(),
      energyRating: draftEnergyRating.trim(),
    }

    if (nextFilters.search) {
      nextParams.set('search', nextFilters.search)
    } else {
      nextParams.delete('search')
    }

    if (nextFilters.maxPrice) {
      nextParams.set('maxPrice', nextFilters.maxPrice)
    } else {
      nextParams.delete('maxPrice')
    }

    if (nextFilters.inStock === 'in-stock') {
      nextParams.set('inStock', nextFilters.inStock)
    } else {
      nextParams.delete('inStock')
    }

    if (nextFilters.compatibility) {
      nextParams.set('compatibility', nextFilters.compatibility)
    } else {
      nextParams.delete('compatibility')
    }

    if (nextFilters.energyRating) {
      nextParams.set('energyRating', nextFilters.energyRating)
    } else {
      nextParams.delete('energyRating')
    }

    nextParams.set('page', '1')

    setSearchParams(nextParams)
  }

  return (
    <Sidebar>
      <SidebarCard as="form" onSubmit={handleSubmit}>
        <SidebarTitle>Фильтры</SidebarTitle>

        <FilterGroup>
          <FilterLabel htmlFor="name">Название товара</FilterLabel>
          <FilterInput
            id="name"
            placeholder="Введите название товара"
            value={draftSearch}
            onChange={(event) => setDraftSearch(event.target.value)}
          />
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor="price">Цена</FilterLabel>
          <FilterInput
            id="price"
            placeholder="до 500"
            inputMode="decimal"
            value={draftMaxPrice}
            onChange={(event) => setDraftMaxPrice(event.target.value)}
          />
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor="stock">Наличие</FilterLabel>
          <FilterSelect id="stock" value={draftInStock} onChange={(event) => setDraftInStock(event.target.value as typeof inStock)}>
            <option value="all">Все товары</option>
            <option value="in-stock">В наличии</option>
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor="compatibility">Совместимость</FilterLabel>
          <FilterInput
            id="compatibility"
            placeholder="Например, H7"
            value={draftCompatibility}
            onChange={(event) => setDraftCompatibility(event.target.value)}
          />
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor="energy-rating">Энергетический класс</FilterLabel>
          <FilterInput
            id="energy-rating"
            placeholder="Например, A+"
            value={draftEnergyRating}
            onChange={(event) => setDraftEnergyRating(event.target.value)}
          />
        </FilterGroup>

        <ApplyButton type="submit">Применить фильтры</ApplyButton>
      </SidebarCard>
    </Sidebar>
  )
}

export default Filters
