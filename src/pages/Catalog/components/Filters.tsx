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
          <FilterLabel htmlFor="compatibility">Совместимость</FilterLabel>
          <FilterInput id="compatibility" placeholder="Например, H7" />
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor="energy-rating">Энергетический класс</FilterLabel>
          <FilterInput id="energy-rating" placeholder="Например, A+" />
        </FilterGroup>

        <ApplyButton type="button">Применить фильтры</ApplyButton>
      </SidebarCard>
    </Sidebar>
  )
}

export default Filters
