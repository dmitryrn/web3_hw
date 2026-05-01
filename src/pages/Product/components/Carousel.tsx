import { useEffect, useState } from 'react'
import {
  Gallery,
  GalleryButton,
  ImagePlaceholder,
  ImagesTrack,
  MainImage,
  MainImageFrame,
  SecondaryImage,
  SecondaryImageFrame,
} from './Carousel.styles'

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
  const mainImage = visibleImages[0]
  const secondaryImage = visibleImages[1]
  const hasNoImages = imageUrls.length === 0
  const hasOneImage = imageUrls.length === 1
  const hasTwoImages = imageUrls.length === 2
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
      <GalleryButton
        type="button"
        onClick={handlePreviousImages}
        disabled={!canMoveLeft}
        $visible={canMoveLeft}
      >
        &lt;
      </GalleryButton>

      <ImagesTrack>
        <MainImageFrame>
          {mainImage ? (
            <MainImage src={mainImage} alt={productName} />
          ) : (
            <ImagePlaceholder>Нет изображений</ImagePlaceholder>
          )}
        </MainImageFrame>

        {!hasNoImages && !hasOneImage ? (
          <SecondaryImageFrame>
            {secondaryImage ? (
              <SecondaryImage src={secondaryImage} alt={productName} />
            ) : hasTwoImages ? null : (
              <ImagePlaceholder>Нет изображений</ImagePlaceholder>
            )}
          </SecondaryImageFrame>
        ) : null}
      </ImagesTrack>

      <GalleryButton
        type="button"
        onClick={handleNextImages}
        disabled={!canMoveRight}
        $visible={canMoveRight}
      >
        &gt;
      </GalleryButton>
    </Gallery>
  )
}

export default Carousel
