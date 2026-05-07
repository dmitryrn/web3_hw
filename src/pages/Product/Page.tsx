import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Component'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { clearProduct, fetchProductById } from '../../store/productSlice'
import Carousel from './components/Carousel/Carousel'
import ProductCard from './components/ProductCard/ProductCard'
import {
  BackButton,
  Content,
  DetailValue,
  DetailLabel,
  DetailRow,
  Details,
  MetaList,
  Page,
  ProductMessage,
  ProductLayout,
} from './styles'

function ProductPage() {
  const dispatch = useAppDispatch()
  const { productId } = useParams()
  const resolvedId = Number(productId)
  const isInvalidProductId = !Number.isInteger(resolvedId) || resolvedId <= 0
  const { product, status, isNotFound } = useAppSelector((state) => state.product)

  useEffect(() => {
    if (isInvalidProductId) {
      dispatch(clearProduct())
      return
    }

    void dispatch(fetchProductById(resolvedId))
  }, [dispatch, isInvalidProductId, resolvedId])

  if (status === 'loading') {
    return (
      <Page>
        <Header />
        <Content>
          <ProductMessage>Загрузка товара...</ProductMessage>
        </Content>
      </Page>
    )
  }

  if (!product) {
    return (
      <Page>
        <Header />
        <Content>
          <ProductMessage>{isInvalidProductId || isNotFound ? 'Товар не найден.' : 'Не удалось загрузить товар.'}</ProductMessage>
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
          <Carousel imageUrls={product.images.map((image) => image.image_url)} productName={product.name} />
          <ProductCard product={product} name={product.name} price={product.price} stock={product.stock} />
        </ProductLayout>

        <MetaList>
          <DetailRow>
            <DetailLabel>Совместимость:</DetailLabel>
            <DetailValue>{product.compatibility ?? '-'}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Энергетический класс:</DetailLabel>
            <DetailValue>{product.energy_rating ?? '-'}</DetailValue>
          </DetailRow>
        </MetaList>

        <Details>{product.description}</Details>

        <BackButton to="/">назад</BackButton>
      </Content>
    </Page>
  )
}

export default ProductPage
