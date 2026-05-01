import styled from 'styled-components'

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
