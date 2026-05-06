import type { CartProduct } from '../../../../models/product'
import {
  CartItem as CartItemRoot,
  CartItemPrice,
  ImagePlaceholder,
  ItemMeta,
  ProductImage,
  ProductName,
  QuantityAction,
  QuantityBox,
  QuantityValue,
  RemoveButton,
} from './styles'

type CartItemProps = {
  product: CartProduct
}

function CartItem({ product }: CartItemProps) {
  const firstImage = product.product.images[0]?.image_url

  return (
    <CartItemRoot>
      {firstImage ? (
        <ProductImage src={firstImage} alt={product.product.name} />
      ) : (
        <ImagePlaceholder>image</ImagePlaceholder>
      )}

      <ItemMeta>
        <ProductName>{product.product.name}</ProductName>
        <RemoveButton type="button">Удалить</RemoveButton>
      </ItemMeta>
      <QuantityBox>
        <QuantityAction type="button">-</QuantityAction>
        <QuantityValue>{product.quantity}</QuantityValue>
        <QuantityAction type="button">+</QuantityAction>
      </QuantityBox>
      <CartItemPrice>{`${product.product.price * product.quantity} руб.`}</CartItemPrice>
    </CartItemRoot>
  )
}

export default CartItem
