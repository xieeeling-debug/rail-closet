import { useEffect, useMemo, useState } from 'react'
import { CLOSET } from '../data/closet'
import {
  deleteCustomPiece,
  loadCustomPieces,
  saveCustomPiece,
} from '../lib/customClosetDb'
import type { ClosetItem } from '../types'

export function useCloset() {
  const [custom, setCustom] = useState<ClosetItem[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    loadCustomPieces<ClosetItem>()
      .then((pieces) => {
        if (!cancelled) setCustom(pieces)
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

  const items = useMemo(() => [...custom, ...CLOSET], [custom])

  async function addPiece(piece: ClosetItem) {
    await saveCustomPiece(piece)
    setCustom((prev) => [piece, ...prev.filter((p) => p.id !== piece.id)])
  }

  async function removePiece(id: string) {
    await deleteCustomPiece(id)
    setCustom((prev) => prev.filter((p) => p.id !== id))
  }

  return { items, customCount: custom.length, ready, addPiece, removePiece }
}
