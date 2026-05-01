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
  ProductTitle,
  QuantityButton,
  QuantityControl,
  QuantityValue,
  SecondaryImage,
  SecondaryImageFrame,
  Stock,
} from './styles'

type ProductPageProps = {
  product: Product
}

function ProductPage({ product }: ProductPageProps) {
  return (
    <Page>
      <Header />

      <Content>
        <ProductLayout>
          <MainImageFrame>
            {product.image_url ? (
              <MainImage src={product.image_url} alt={product.name} />
            ) : (
              'image'
            )}
          </MainImageFrame>

          <SecondaryImageFrame>
            {product.image_url ? (
              <SecondaryImage src={product.image_url} alt={product.name} />
            ) : (
              'image'
            )}
          </SecondaryImageFrame>

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
