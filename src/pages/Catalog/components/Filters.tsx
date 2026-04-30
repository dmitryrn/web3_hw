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
  return (
    <Sidebar>
      <SidebarCard>
        <SidebarTitle>Фильтры</SidebarTitle>

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
          <FilterLabel htmlFor="category">Категория</FilterLabel>
          <FilterSelect id="category" defaultValue="all">
            <option value="all">Все категории</option>
            <option value="headlights">Фары</option>
            <option value="interior">Салон</option>
            <option value="fog">Противотуманные</option>
          </FilterSelect>
        </FilterGroup>

        <ApplyButton type="button">Применить фильтры</ApplyButton>
      </SidebarCard>
    </Sidebar>
  )
}

export default Filters
