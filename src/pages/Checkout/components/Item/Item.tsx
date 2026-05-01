import type { CartProduct } from '../../../../App'
import {
  ImagePlaceholder,
  ItemCard,
  ItemDetails,
  ItemImage,
  ItemLink,
  ItemMeta,
  ItemPrice,
  ItemRow,
  ItemTitle,
  ItemValue,
  Label,
} from './styles'

type ItemProps = {
  product: CartProduct
}

function Item({ product }: ItemProps) {
  const firstImage = product.product.image_urls[0]

  return (
    <ItemCard>
      {firstImage ? (
        <ItemImage src={firstImage} alt={product.product.name} />
      ) : (
        <ImagePlaceholder>image</ImagePlaceholder>
      )}

      <ItemDetails>
        <ItemMeta>
          <ItemRow>
            <Label>ID товара</Label>
            <ItemValue>{product.product.id}</ItemValue>
          </ItemRow>
          <ItemRow>
            <Label>Название</Label>
            <ItemTitle>{product.product.name}</ItemTitle>
          </ItemRow>
          <ItemRow>
            <Label>Цена</Label>
            <ItemValue>{`${product.product.price} руб.`}</ItemValue>
          </ItemRow>
          <ItemRow>
            <Label>Количество</Label>
            <ItemValue>{product.quantity}</ItemValue>
          </ItemRow>
        </ItemMeta>

        <ItemPrice>{`${product.product.price * product.quantity} руб.`}</ItemPrice>
        <ItemLink to={`/products/${product.product.id}`}>К карточке товара</ItemLink>
      </ItemDetails>
    </ItemCard>
  )
}

export default Item
