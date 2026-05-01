import styled from 'styled-components'
import { productBreakpoints } from '../../breakpoints'

export const Gallery = styled.section`
  position: relative;

  ${productBreakpoints.md} {
    padding: 0 0.25rem;
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
  position: absolute;
  top: 50%;
  z-index: 1;
  width: 2.5rem;
  min-height: 2.5rem;
  padding: 0;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.92);
  color: #111827;
  font-size: 1.1rem;
  line-height: 1;
  cursor: pointer;
  transform: translateY(-50%);
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.14);

  &:disabled {
    cursor: not-allowed;
    color: #9ca3af;
    background: #f8fafc;
  }

  &:first-child {
    left: 0.5rem;
  }

  &:last-child {
    right: 0.5rem;
  }

  ${productBreakpoints.md} {
    &:first-child {
      left: 0.75rem;
    }

    &:last-child {
      right: 0.75rem;
    }
  }
`

export const ImagesTrack = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  ${productBreakpoints.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const EmptyState = styled.div`
  grid-column: 1 / -1;
  min-height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${productBreakpoints.md} {
    min-height: 280px;
  }

  ${productBreakpoints.lg} {
    min-height: 320px;
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: contain;

  ${productBreakpoints.md} {
    height: 280px;
  }

  ${productBreakpoints.lg} {
    height: 320px;
  }
`

export const ImagePlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 1rem;
`
