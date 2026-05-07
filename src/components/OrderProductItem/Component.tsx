import type { CartProduct } from '../../models/product'
import { useAppDispatch } from '../../store/hooks'
import { decrementCartItem, incrementCartItem, removeFromCart } from '../../store/cartSlice'
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
  const dispatch = useAppDispatch()
  const firstImage = product.product.images[0]?.image_url

  const handleRemove = () => {
    dispatch(removeFromCart(product.product.id))
  }

  const handleDecreaseQuantity = () => {
    dispatch(decrementCartItem(product.product.id))
  }

  const handleIncreaseQuantity = () => {
    dispatch(incrementCartItem(product.product.id))
  }

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
          {showRemoveButton ? (
            <RemoveButton type="button" onClick={handleRemove}>
              Удалить
            </RemoveButton>
          ) : null}
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
            <QuantityAction type="button" onClick={handleDecreaseQuantity} disabled={product.quantity <= 1}>
              -
            </QuantityAction>
            <QuantityValue>{product.quantity}</QuantityValue>
            <QuantityAction type="button" onClick={handleIncreaseQuantity}>
              +
            </QuantityAction>
          </QuantityBox>
        ) : null}

        <ItemPrice>{`${product.product.price * product.quantity} руб.`}</ItemPrice>
      </ItemDetails>
    </ItemCard>
  )
}

export default OrderProductItem
