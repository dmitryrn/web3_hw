import { ResultsText, SortSelect, Toolbar as ToolbarRoot } from '../styles'

function Toolbar() {
  return (
    <ToolbarRoot>
      <ResultsText>Найдено 24 товара</ResultsText>
      <SortSelect defaultValue="popular" aria-label="Сортировка товаров">
        <option value="popular">Сортировка: Популярные</option>
        <option value="price-asc">Цена: по возрастанию</option>
        <option value="price-desc">Цена: по убыванию</option>
      </SortSelect>
    </ToolbarRoot>
  )
}

export default Toolbar
