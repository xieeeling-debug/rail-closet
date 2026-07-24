import { useEffect, useMemo, useState } from 'react'
import {
  deleteCustomPiece,
  loadCustomPieces,
  saveCustomPiece,
} from '../lib/customClosetDb'
import { normalizePiece, type ClosetItem } from '../types'

export function useCloset() {
  const [custom, setCustom] = useState<ClosetItem[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    loadCustomPieces<ClosetItem>()
      .then((pieces) => {
        if (!cancelled) setCustom(pieces.map(normalizePiece))
      })
      .catch(() => {
        if (!cancelled) setCustom([])
      })
      .finally(() => {
        if (!cancelled) setReady(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  // Only the user's uploaded clothes — sample examples removed.
  const items = useMemo(() => custom, [custom])

  async function addPiece(piece: ClosetItem) {
    const normalized = normalizePiece(piece)
    await saveCustomPiece(normalized)
    setCustom((prev) => [normalized, ...prev.filter((p) => p.id !== normalized.id)])
  }

  async function removePiece(id: string) {
    await deleteCustomPiece(id)
    setCustom((prev) => prev.filter((p) => p.id !== id))
  }

  return {
    items,
    customCount: custom.length,
    ready,
    addPiece,
    removePiece,
  }
}
