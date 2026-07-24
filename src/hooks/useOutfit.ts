import { useEffect, useState } from 'react'
import type { ClosetItem } from '../types'

const STORAGE_KEY = 'rail-selected-outfit'

function readStoredIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    return Array.isArray(parsed) ? parsed.filter((id) => typeof id === 'string') : []
  } catch {
    return []
  }
}

export function useOutfit(closet: ClosetItem[]) {
  const [selectedIds, setSelectedIds] = useState<string[]>(() => readStoredIds())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedIds))
  }, [selectedIds])

  const selected = selectedIds
    .map((id) => closet.find((item) => item.id === id))
    .filter((item): item is ClosetItem => Boolean(item))

  function toggle(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )
  }

  function clear() {
    setSelectedIds([])
  }

  function isSelected(id: string) {
    return selectedIds.includes(id)
  }

  return { selected, selectedIds, toggle, clear, isSelected }
}
