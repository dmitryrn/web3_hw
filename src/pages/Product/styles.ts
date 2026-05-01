import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Page = styled.section`
  min-height: 100vh;
  background: #eaeded;
`

export const Content = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1.5rem;
`

export const ProductLayout = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 520px);
  gap: 1.25rem;
  align-items: start;
  margin-bottom: 1.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

export const Gallery = styled.section`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.5rem;
  align-items: center;
`

export const ImagesTrack = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 360px));
  gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const imageFrameStyles = `
  min-height: 320px;
  border: 1px solid #d5d9d9;
  border-radius: 0.75rem;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const MainImageFrame = styled.div`
  ${imageFrameStyles}
`

export const SecondaryImageFrame = styled.div`
  ${imageFrameStyles}
`

export const GalleryButton = styled.button`
  width: 2.5rem;
  min-height: 2.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  background: #ffffff;
  color: #111827;
  font-size: 1.1rem;
  line-height: 1;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    color: #9ca3af;
    background: #f8fafc;
  }

  @media (max-width: 800px) {
    align-self: start;
    margin-top: 0.5rem;
  }
`

export const MainImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
`

export const SecondaryImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
`

export const ImagePlaceholder = styled.div`
  width: 100%;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 1rem;
`

export const InfoPanel = styled.div`
  min-height: 320px;
  padding: 1rem;
  border: 1px solid #d5d9d9;
  border-radius: 0.75rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const ProductTitle = styled.h1`
  margin: 0;
  color: #111827;
  font-size: 2rem;
  line-height: 1.2;
`

export const Price = styled.div`
  color: #111827;
  font-size: 1.5rem;
`

export const Stock = styled.div`
  color: #007600;
  font-size: 1.15rem;
`

export const QuantityControl = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`

export const AddToCartButton = styled(Link)`
  min-height: 2.9rem;
  border: 1px solid #f3a847;
  border-radius: 999px;
  padding: 0 1.25rem;
  background: #ffd814;
  color: #111827;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const QuantityButton = styled.button`
  width: 2.75rem;
  min-height: 2.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  background: #ffffff;
  color: #111827;
  font-size: 1.25rem;
  cursor: pointer;
`

export const QuantityValue = styled.div`
  min-width: 2rem;
  color: #111827;
  font-size: 1.15rem;
  font-weight: 600;
  text-align: center;
`

export const MetaList = styled.div`
  margin-bottom: 1.25rem;
  display: grid;
  gap: 0.35rem;
  color: #374151;
`

export const DetailRow = styled.div`
  display: flex;
  gap: 0.35rem;
  flex-wrap: wrap;
`

export const DetailLabel = styled.span`
  font-weight: 600;
`

export const Description = styled.p`
  max-width: 960px;
  margin: 0 0 2rem;
  color: #111827;
  font-size: 1.1rem;
  line-height: 1.7;
`

export const Details = styled(Description)``

export const BackButton = styled(Link)`
  min-height: 2.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  padding: 0 1rem;
  background: #ffffff;
  color: #111827;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const ProductNotFound = styled.div`
  margin-bottom: 1rem;
  color: #111827;
  font-size: 1.5rem;
  font-weight: 600;
`
