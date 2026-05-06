import type { CartProduct } from '../../../../models/product'
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
  const firstImage = product.product.images[0]?.image_url

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
            <Label>Название</Label>
            <ItemTitle>{product.product.name}</ItemTitle>
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
