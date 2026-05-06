import type { CartProduct } from '../../models/product'
import {
  ImagePlaceholder,
  ItemCard,
  ItemDetails,
  ItemImage,
  ItemLink,
  ItemMeta,
  ItemPrice,
  ProductName,
  QuantityAction,
  QuantityBox,
  QuantityLabel,
  QuantityRow,
  QuantityValue,
  RemoveButton,
} from './styles'

type OrderProductItemProps = {
  product: CartProduct
  productLink: string
  showQuantityControls?: boolean
  showRemoveButton?: boolean
}

function OrderProductItem({
  product,
  productLink,
  showQuantityControls = false,
  showRemoveButton = false,
}: OrderProductItemProps) {
  const firstImage = product.product.images[0]?.image_url

  return (
    <ItemCard>
      {firstImage ? (
        <ItemImage src={firstImage} alt={product.product.name} />
      ) : (
        <ImagePlaceholder>image</ImagePlaceholder>
      )}

      <ItemDetails $showQuantityControls={showQuantityControls}>
        <ItemMeta>
          <ProductName>{product.product.name}</ProductName>
          {showRemoveButton ? <RemoveButton type="button">Удалить</RemoveButton> : null}
          {!showQuantityControls ? (
            <QuantityRow>
              <QuantityLabel>Количество</QuantityLabel>
              <span>{product.quantity}</span>
            </QuantityRow>
          ) : null}
          <ItemLink to={productLink}>К карточке товара</ItemLink>
        </ItemMeta>

        {showQuantityControls ? (
          <QuantityBox>
            <QuantityAction type="button">-</QuantityAction>
            <QuantityValue>{product.quantity}</QuantityValue>
            <QuantityAction type="button">+</QuantityAction>
          </QuantityBox>
        ) : null}

        <ItemPrice>{`${product.product.price * product.quantity} руб.`}</ItemPrice>
      </ItemDetails>
    </ItemCard>
  )
}

export default OrderProductItem
