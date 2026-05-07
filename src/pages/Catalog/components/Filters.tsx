import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { setSearch } from '../../../store/catalogSlice'
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

function Filters() {
  const dispatch = useAppDispatch()
  const search = useAppSelector((state) => state.catalog.search)
  const [draftSearch, setDraftSearch] = useState(search)

  useEffect(() => {
    setDraftSearch(search)
  }, [search])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(setSearch(draftSearch))
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
          <FilterInput id="price" placeholder="до 500" />
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor="stock">Наличие</FilterLabel>
          <FilterSelect id="stock" defaultValue="all">
            <option value="all">Все товары</option>
            <option value="in-stock">В наличии</option>
            <option value="out-of-stock">Нет в наличии</option>
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor="compatibility">Совместимость</FilterLabel>
          <FilterInput id="compatibility" placeholder="Например, H7" />
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor="energy-rating">Энергетический класс</FilterLabel>
          <FilterInput id="energy-rating" placeholder="Например, A+" />
        </FilterGroup>

        <ApplyButton type="submit">Применить фильтры</ApplyButton>
      </SidebarCard>
    </Sidebar>
  )
}

export default Filters
