import { useParams } from 'react-router-dom'
import type { Product } from '../../mockData'
import Header from '../../components/Header/Component'
import Carousel from './components/Carousel/Carousel'
import ProductCard from './components/ProductCard/ProductCard'
import {
  BackButton,
  Content,
  DetailLabel,
  DetailRow,
  Details,
  MetaList,
  Page,
  ProductLayout,
  ProductNotFound,
} from './styles'

type ProductPageProps = {
  products: Product[]
}

function ProductPage({ products }: ProductPageProps) {
  const { productIndex } = useParams()
  const resolvedIndex = Number(productIndex)
  const product = Number.isInteger(resolvedIndex) ? products[resolvedIndex] : undefined

  if (!product) {
    return (
      <Page>
        <Header />
        <Content>
          <ProductNotFound>Товар не найден.</ProductNotFound>
          <BackButton to="/">назад</BackButton>
        </Content>
      </Page>
    )
  }

  return (
    <Page>
      <Header />

      <Content>
        <ProductLayout>
          <Carousel imageUrls={product.image_urls} productName={product.name} />
          <ProductCard name={product.name} price={product.price} stock={product.stock} />
        </ProductLayout>

        <MetaList>
          <DetailRow>
            <DetailLabel>Совместимость с цоколем:</DetailLabel>
            <span>{product.compatibility ?? '-'}</span>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Энергетический класс:</DetailLabel>
            <span>{product.energy_rating ?? '-'}</span>
          </DetailRow>
        </MetaList>

        <Details>{product.description}</Details>

        <BackButton to="/">назад</BackButton>
      </Content>
    </Page>
  )
}

export default ProductPage
