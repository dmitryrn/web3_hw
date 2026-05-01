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
  Gallery,
  GalleryButton,
  InfoPanel,
  ImagePlaceholder,
  ImagesTrack,
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
  const hasNoImages = product.image_urls.length === 0
  const hasOneImage = product.image_urls.length === 1
  const hasTwoImages = product.image_urls.length === 2
  const canMoveLeft = imageOffset > 0
  const canMoveRight = imageOffset + 2 < product.image_urls.length

  const handlePreviousImages = () => {
    if (!canMoveLeft) {
      return
    }

    setImageOffset((currentOffset) => currentOffset - 1)
  }

  const handleNextImages = () => {
    if (!canMoveRight) {
      return
    }

    setImageOffset((currentOffset) => currentOffset + 1)
  }

  return (
    <Page>
      <Header />

      <Content>
        <ProductLayout>
          <Gallery>
            {canMoveLeft ? (
              <GalleryButton type="button" onClick={handlePreviousImages}>
                &lt;
              </GalleryButton>
            ) : null}

            <ImagesTrack>
              <MainImageFrame>
                {mainImage ? (
                  <MainImage src={mainImage} alt={product.name} />
                ) : (
                  <ImagePlaceholder>Нет изображений</ImagePlaceholder>
                )}
              </MainImageFrame>

              {!hasNoImages && !hasOneImage ? (
                <SecondaryImageFrame>
                  {secondaryImage ? (
                    <SecondaryImage src={secondaryImage} alt={product.name} />
                  ) : hasTwoImages ? null : (
                    <ImagePlaceholder>Нет изображений</ImagePlaceholder>
                  )}
                </SecondaryImageFrame>
              ) : null}
            </ImagesTrack>

            {canMoveRight ? (
              <GalleryButton type="button" onClick={handleNextImages}>
                &gt;
              </GalleryButton>
            ) : null}
          </Gallery>

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
