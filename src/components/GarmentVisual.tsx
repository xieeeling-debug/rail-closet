import type { ClosetItem } from '../types'
import { GarmentArt } from './GarmentArt'

interface GarmentVisualProps {
  item: ClosetItem
  artClassName?: string
  photoClassName?: string
}

export function GarmentVisual({ item, artClassName, photoClassName }: GarmentVisualProps) {
  if (item.imageDataUrl) {
    return (
      <img
        src={item.imageDataUrl}
        alt=""
        className={photoClassName}
        draggable={false}
      />
    )
  }
  return <GarmentArt item={item} className={artClassName} />
}
