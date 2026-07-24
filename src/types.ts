export type Category = 'tops' | 'bottoms' | 'outerwear' | 'shoes' | 'accessories'

export interface ClosetItem {
  id: string
  name: string
  category: Category
  color: string
  accent?: string
  fabric: string
  season: string
}

export const CATEGORIES: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'tops', label: 'Tops' },
  { id: 'bottoms', label: 'Bottoms' },
  { id: 'outerwear', label: 'Outerwear' },
  { id: 'shoes', label: 'Shoes' },
  { id: 'accessories', label: 'Accessories' },
]

export const CATEGORY_ORDER: Category[] = [
  'tops',
  'bottoms',
  'outerwear',
  'shoes',
  'accessories',
]
