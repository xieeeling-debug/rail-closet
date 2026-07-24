export type Category = 'tops' | 'bottoms' | 'outerwear' | 'shoes' | 'accessories'

export type ColorName =
  | 'Black'
  | 'White'
  | 'Gray'
  | 'Beige'
  | 'Brown'
  | 'Navy'
  | 'Blue'
  | 'Green'
  | 'Red'
  | 'Pink'
  | 'Yellow'
  | 'Orange'
  | 'Purple'
  | 'Multicolor'

export type Material =
  | 'Cotton'
  | 'Linen'
  | 'Denim'
  | 'Wool'
  | 'Silk'
  | 'Polyester'
  | 'Leather'
  | 'Knit'
  | 'Other'

export interface ClosetItem {
  id: string
  name: string
  category: Category
  /** Hex fallback / swatch */
  color: string
  accent?: string
  /** Human color label used for filtering */
  colorName: ColorName
  /** Fabric / material used for filtering */
  material: Material
  /** @deprecated kept for older saved pieces */
  fabric?: string
  season?: string
  imageDataUrl?: string
  isCustom?: boolean
}

export interface ClosetFilters {
  category: Category | 'all'
  colorName: ColorName | 'all'
  material: Material | 'all'
}

export const CATEGORIES: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'tops', label: 'Tops' },
  { id: 'bottoms', label: 'Bottoms' },
  { id: 'outerwear', label: 'Outerwear' },
  { id: 'shoes', label: 'Shoes' },
  { id: 'accessories', label: 'Accessories' },
]

export const CATEGORY_OPTIONS: { id: Category; label: string }[] = [
  { id: 'tops', label: 'Tops' },
  { id: 'bottoms', label: 'Bottoms' },
  { id: 'outerwear', label: 'Outerwear' },
  { id: 'shoes', label: 'Shoes' },
  { id: 'accessories', label: 'Accessories' },
]

export const COLOR_OPTIONS: { id: ColorName; label: string; hex: string }[] = [
  { id: 'Black', label: 'Black', hex: '#1a1a1a' },
  { id: 'White', label: 'White', hex: '#f5f5f2' },
  { id: 'Gray', label: 'Gray', hex: '#8a9099' },
  { id: 'Beige', label: 'Beige', hex: '#d8cbb8' },
  { id: 'Brown', label: 'Brown', hex: '#6b4a32' },
  { id: 'Navy', label: 'Navy', hex: '#1f2d4d' },
  { id: 'Blue', label: 'Blue', hex: '#3b6ea5' },
  { id: 'Green', label: 'Green', hex: '#3f5a48' },
  { id: 'Red', label: 'Red', hex: '#a63d3d' },
  { id: 'Pink', label: 'Pink', hex: '#d48aa8' },
  { id: 'Yellow', label: 'Yellow', hex: '#d4b85a' },
  { id: 'Orange', label: 'Orange', hex: '#c4783a' },
  { id: 'Purple', label: 'Purple', hex: '#6a4f7a' },
  { id: 'Multicolor', label: 'Multicolor', hex: '#9aa3ad' },
]

export const MATERIAL_OPTIONS: { id: Material; label: string }[] = [
  { id: 'Cotton', label: 'Cotton' },
  { id: 'Linen', label: 'Linen' },
  { id: 'Denim', label: 'Denim' },
  { id: 'Wool', label: 'Wool' },
  { id: 'Silk', label: 'Silk' },
  { id: 'Polyester', label: 'Polyester' },
  { id: 'Leather', label: 'Leather' },
  { id: 'Knit', label: 'Knit' },
  { id: 'Other', label: 'Other' },
]

export const CATEGORY_ORDER: Category[] = [
  'tops',
  'bottoms',
  'outerwear',
  'shoes',
  'accessories',
]

export const DEFAULT_FILTERS: ClosetFilters = {
  category: 'all',
  colorName: 'all',
  material: 'all',
}

export function hexForColorName(name: ColorName): string {
  return COLOR_OPTIONS.find((c) => c.id === name)?.hex ?? '#dfe5ec'
}

export function filterClosetItems(
  items: ClosetItem[],
  filters: ClosetFilters,
): ClosetItem[] {
  return items.filter((item) => {
    if (filters.category !== 'all' && item.category !== filters.category) return false
    if (filters.colorName !== 'all' && item.colorName !== filters.colorName) return false
    if (filters.material !== 'all' && item.material !== filters.material) return false
    return true
  })
}

/** Normalize older IndexedDB records that may lack new fields. */
export function normalizePiece(raw: ClosetItem): ClosetItem {
  const colorName =
    raw.colorName ??
    (COLOR_OPTIONS.find((c) => c.hex.toLowerCase() === raw.color?.toLowerCase())?.id ??
      'Multicolor')
  const material =
    raw.material ??
    (MATERIAL_OPTIONS.find(
      (m) => m.id.toLowerCase() === (raw.fabric ?? '').toLowerCase(),
    )?.id ??
      'Other')

  return {
    ...raw,
    colorName,
    material,
    color: raw.color || hexForColorName(colorName),
  }
}
