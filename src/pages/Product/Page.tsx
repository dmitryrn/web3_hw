import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Product } from '../../App'
import Header from '../../components/Header/Component'
import {
  AddToCartButton,
  BackButton,
  Content,
  DetailLabel,
  DetailRow,
  Details,
  InfoPanel,
  MainImage,
  MainImageFrame,
  MetaList,
  Page,
  Price,
  ProductLayout,
  ProductNotFound,
  ProductTitle,
  QuantityButton,
  QuantityControl,
  QuantityValue,
  RightButton,
  SecondaryImage,
  SecondaryImageFrame,
  Stock,
} from './styles'

type ProductPageProps = {
  products: Product[]
}

function ProductPage({ products }: ProductPageProps) {
  const { productIndex } = useParams()
  const resolvedIndex = Number(productIndex)
  const product = Number.isInteger(resolvedIndex) ? products[resolvedIndex] : undefined
  const [imageOffset, setImageOffset] = useState(0)

  useEffect(() => {
    setImageOffset(0)
  }, [productIndex])

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

  const visibleImages = product.image_urls.slice(imageOffset, imageOffset + 2)
  const mainImage = visibleImages[0]
  const secondaryImage = visibleImages[1]
  const canAdvanceImages = product.image_urls.length > 2

  const handleNextImages = () => {
    if (!canAdvanceImages) {
      return
    }

    const nextOffset = imageOffset + 1
    const maxOffset = Math.max(product.image_urls.length - 2, 0)
    setImageOffset(nextOffset >= maxOffset ? 0 : nextOffset)
  }

  return (
    <Page>
      <Header />

      <Content>
        <ProductLayout>
          <MainImageFrame>
            {mainImage ? (
              <MainImage src={mainImage} alt={product.name} />
            ) : (
              'image'
            )}
          </MainImageFrame>

          <SecondaryImageFrame>
            {secondaryImage ? (
              <SecondaryImage src={secondaryImage} alt={product.name} />
            ) : (
              'image'
            )}
          </SecondaryImageFrame>

          <RightButton type="button" onClick={handleNextImages} disabled={!canAdvanceImages}>
            &gt;
          </RightButton>

          <InfoPanel>
            <ProductTitle>{product.name}</ProductTitle>
            <Price>{`Цена: ${product.price} руб.`}</Price>
            <Stock>{`В наличии: ${product.stock}`}</Stock>

            <QuantityControl>
              <AddToCartButton to="/cart">Добавить в корзину</AddToCartButton>
              <QuantityButton type="button">+</QuantityButton>
              <QuantityValue>1</QuantityValue>
              <QuantityButton type="button">-</QuantityButton>
            </QuantityControl>
          </InfoPanel>
        </ProductLayout>

        <MetaList>
          <DetailRow>
            <DetailLabel>Socket compatibility:</DetailLabel>
            <span>{product.compatibility ?? '-'}</span>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Energy rating:</DetailLabel>
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
