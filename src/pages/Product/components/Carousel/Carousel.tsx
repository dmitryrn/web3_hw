import { useEffect, useState } from 'react'
import {
  EmptyState,
  Gallery,
  GalleryButton,
  ImageFrame,
  ImagePlaceholder,
  ImagesTrack,
  ProductImage,
} from './styles'

type CarouselProps = {
  imageUrls: string[]
  productName: string
}

function Carousel({ imageUrls, productName }: CarouselProps) {
  const [imageOffset, setImageOffset] = useState(0)

  useEffect(() => {
    setImageOffset(0)
  }, [imageUrls])

  const visibleImages = imageUrls.slice(imageOffset, imageOffset + 2)
  const hasNoImages = imageUrls.length === 0
  const canMoveLeft = imageOffset > 0
  const canMoveRight = imageOffset + 2 < imageUrls.length

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
    <Gallery>
      {hasNoImages ? (
        <EmptyState>
          <ImagePlaceholder>Нет изображений</ImagePlaceholder>
        </EmptyState>
      ) : (
        <>
          <GalleryButton
            type="button"
            onClick={handlePreviousImages}
            disabled={!canMoveLeft}
            $visible={canMoveLeft}
          >
            &lt;
          </GalleryButton>

          <ImagesTrack>
            {visibleImages.map((imageUrl, index) => (
              <ImageFrame key={`${imageUrl}-${imageOffset + index}`}>
                <ProductImage src={imageUrl} alt={productName} />
              </ImageFrame>
            ))}
          </ImagesTrack>

          <GalleryButton
            type="button"
            onClick={handleNextImages}
            disabled={!canMoveRight}
            $visible={canMoveRight}
          >
            &gt;
          </GalleryButton>
        </>
      )}
    </Gallery>
  )
}

export default Carousel
