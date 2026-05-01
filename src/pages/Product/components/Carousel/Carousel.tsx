import { useEffect, useState } from 'react'

const desktopGalleryMediaQuery = '(min-width: 768px)'
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

  const [visibleImageCount, setVisibleImageCount] = useState(() => {
    if (typeof window === 'undefined') {
      return 1
    }

    return window.matchMedia(desktopGalleryMediaQuery).matches ? 2 : 1
  })

  useEffect(() => {
    setImageOffset(0)
  }, [imageUrls])

  useEffect(() => {
    const mediaQueryList = window.matchMedia(desktopGalleryMediaQuery)

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setVisibleImageCount(event.matches ? 2 : 1)
    }

    setVisibleImageCount(mediaQueryList.matches ? 2 : 1)
    mediaQueryList.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQueryList.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  useEffect(() => {
    setImageOffset((currentOffset) => {
      const maxOffset = Math.max(0, imageUrls.length - visibleImageCount)
      return Math.min(currentOffset, maxOffset)
    })
  }, [imageUrls.length, visibleImageCount])

  const visibleImages = imageUrls.slice(imageOffset, imageOffset + visibleImageCount)
  const hasNoImages = imageUrls.length === 0
  const canMoveLeft = imageOffset > 0
  const canMoveRight = imageOffset + visibleImageCount < imageUrls.length

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
