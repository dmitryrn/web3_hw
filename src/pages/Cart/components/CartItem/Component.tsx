import type { CartProduct } from '../../../../App'
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
  return (
    <CartItemRoot>
      {product.product.image_url ? (
        <ProductImage src={product.product.image_url} alt={product.product.name} />
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
