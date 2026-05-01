import styled from 'styled-components'

export const Gallery = styled.section`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 360px) {
    grid-template-columns: 1fr auto auto 1fr;
    row-gap: 0.75rem;
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

export const ImageFrame = styled.div`
  ${imageFrameStyles}
`

export const GalleryButton = styled.button<{ $visible: boolean }>`
  width: 2.5rem;
  min-height: 2.5rem;
  padding: 0;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  background: #ffffff;
  color: #111827;
  font-size: 1.1rem;
  line-height: 1;
  cursor: pointer;
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};

  &:disabled {
    cursor: not-allowed;
    color: #9ca3af;
    background: #f8fafc;
  }

  @media (max-width: 800px) {
    align-self: start;
    margin-top: 0.5rem;
  }

  @media (max-width: 360px) {
    margin-top: 0;
    align-self: center;

    &:first-child {
      grid-column: 2;
      grid-row: 2;
    }

    &:last-child {
      grid-column: 3;
      grid-row: 2;
    }
  }
`

export const ImagesTrack = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 360px));
  gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 360px) {
    grid-column: 1 / -1;
  }
`

export const EmptyState = styled.div`
  grid-column: 1 / -1;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 360px) {
    min-height: 240px;
    grid-column: 1 / -1;
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: contain;

  @media (max-width: 360px) {
    height: 240px;
  }
`

export const ImagePlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 1rem;
`
