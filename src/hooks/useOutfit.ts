import { useEffect, useMemo, useState } from 'react'
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

/**
 * Outfit selection: one piece per category.
 * Choosing another top/bottom replaces the previous one in that category.
 */
export function useOutfit(closet: ClosetItem[]) {
  const [selectedIds, setSelectedIds] = useState<string[]>(() => readStoredIds())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedIds))
  }, [selectedIds])

  const selected = useMemo(
    () =>
      selectedIds
        .map((id) => closet.find((item) => item.id === id))
        .filter((item): item is ClosetItem => Boolean(item)),
    [selectedIds, closet],
  )

  const selectedTop = selected.find((item) => item.category === 'tops') ?? null
  const selectedBottom = selected.find((item) => item.category === 'bottoms') ?? null

  function toggle(id: string) {
    const item = closet.find((piece) => piece.id === id)
    if (!item) return

    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id)

      const withoutSameCategory = prev.filter((existingId) => {
        const existing = closet.find((piece) => piece.id === existingId)
        return !existing || existing.category !== item.category
      })
      return [...withoutSameCategory, id]
    })
  }

  function clear() {
    setSelectedIds([])
  }

  function isSelected(id: string) {
    return selectedIds.includes(id)
  }

  return {
    selected,
    selectedIds,
    selectedTop,
    selectedBottom,
    toggle,
    clear,
    isSelected,
  }
}
