import { useId, useRef, useState } from 'react'
import { removeBackground } from '@imgly/background-removal'
import { blobToDataUrl, resizeImageFile, sampleDominantColor } from '../lib/imageUtils'
import type { Category, ClosetItem } from '../types'
import { CATEGORY_OPTIONS } from '../types'

interface AddPiecePanelProps {
  onAdd: (piece: ClosetItem) => Promise<void>
}

type Stage = 'pick' | 'processing' | 'review' | 'saving' | 'error'

export function AddPiecePanel({ onAdd }: AddPiecePanelProps) {
  const inputId = useId()
  const fileRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  const [stage, setStage] = useState<Stage>('pick')
  const [progress, setProgress] = useState('Preparing…')
  const [preview, setPreview] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState<Category>('tops')
  const [error, setError] = useState<string | null>(null)

  function reset() {
    setStage('pick')
    setProgress('Preparing…')
    setPreview(null)
    setName('')
    setCategory('tops')
    setError(null)
    if (fileRef.current) fileRef.current.value = ''
  }

  function close() {
    reset()
    setOpen(false)
  }

  async function handleFile(file: File | undefined) {
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setError('Please choose a photo (JPG or PNG).')
      setStage('error')
      return
    }

    setStage('processing')
    setError(null)
    setProgress('Resizing photo…')

    try {
      const resized = await resizeImageFile(file, 1024)
      setProgress('Removing background… first time may take a minute')
      const cutout = await removeBackground(resized, {
        model: 'isnet_quint8',
        output: { format: 'image/png', quality: 0.9 },
        progress: (_key, current, total) => {
          if (!total) return
          const pct = Math.round((current / total) * 100)
          setProgress(`Removing background… ${pct}%`)
        },
      })
      const dataUrl = await blobToDataUrl(cutout)
      setPreview(dataUrl)
      setStage('review')
      setProgress('')
    } catch (err) {
      console.error(err)
      setError(
        err instanceof Error
          ? err.message
          : 'Could not remove the background. Try another photo.',
      )
      setStage('error')
    }
  }

  async function save() {
    if (!preview) return
    setStage('saving')
    try {
      const color = await sampleDominantColor(preview)
      const piece: ClosetItem = {
        id: `custom-${crypto.randomUUID()}`,
        name: name.trim() || 'My piece',
        category,
        color,
        accent: color,
        fabric: 'Your photo',
        season: 'All',
        imageDataUrl: preview,
        isCustom: true,
      }
      await onAdd(piece)
      close()
    } catch (err) {
      console.error(err)
      setError('Could not save this piece on your device.')
      setStage('error')
    }
  }

  return (
    <div className="add-piece">
      <button
        type="button"
        className="cta add-cta"
        onClick={() => {
          reset()
          setOpen(true)
        }}
      >
        Add my clothes
      </button>

      {open && (
        <div className="add-modal" role="dialog" aria-modal="true" aria-labelledby="add-title">
          <div className="add-sheet">
            <div className="add-sheet-head">
              <h2 id="add-title">Add a piece</h2>
              <button type="button" className="remove-btn" onClick={close} aria-label="Close">
                ×
              </button>
            </div>

            <ol className="add-steps">
              <li>Take or upload a photo of one clothing item</li>
              <li>We remove the background on your phone</li>
              <li>Name it, pick a category, save to your closet</li>
            </ol>

            {stage === 'pick' && (
              <div className="add-pick">
                <label className="upload-btn" htmlFor={inputId}>
                  Choose photo
                </label>
                <input
                  id={inputId}
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="sr-only"
                  onChange={(e) => void handleFile(e.target.files?.[0])}
                />
                <p className="add-hint">
                  Tip: photograph one item on a clear surface, filling most of the frame.
                </p>
              </div>
            )}

            {stage === 'processing' && (
              <div className="add-processing" aria-live="polite">
                <div className="spinner" aria-hidden />
                <p>{progress}</p>
              </div>
            )}

            {(stage === 'review' || stage === 'saving') && preview && (
              <div className="add-review">
                <div className="cutout-frame">
                  <img src={preview} alt="Clothing with background removed" />
                </div>
                <label className="field">
                  <span>Name</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Blue linen shirt"
                    maxLength={60}
                  />
                </label>
                <label className="field">
                  <span>Category</span>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as Category)}
                  >
                    {CATEGORY_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="add-actions">
                  <button type="button" className="text-btn" onClick={reset}>
                    Try another photo
                  </button>
                  <button
                    type="button"
                    className="cta"
                    disabled={stage === 'saving'}
                    onClick={() => void save()}
                  >
                    {stage === 'saving' ? 'Saving…' : 'Save to closet'}
                  </button>
                </div>
              </div>
            )}

            {stage === 'error' && (
              <div className="add-error" role="alert">
                <p>{error ?? 'Something went wrong.'}</p>
                <button type="button" className="cta" onClick={reset}>
                  Try again
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
