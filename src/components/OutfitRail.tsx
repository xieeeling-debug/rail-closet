import type { ClosetItem } from '../types'
import { CATEGORY_ORDER } from '../types'
import { GarmentVisual } from './GarmentVisual'

interface OutfitRailProps {
  selected: ClosetItem[]
  onRemove: (id: string) => void
  onClear: () => void
}

export function OutfitRail({ selected, onRemove, onClear }: OutfitRailProps) {
  const ordered = [...selected].sort(
    (a, b) => CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category),
  )

  return (
    <aside className="outfit" aria-labelledby="outfit-heading">
      <div className="outfit-head">
        <div>
          <p className="outfit-kicker">Today’s outfit</p>
          <h2 id="outfit-heading">
            {ordered.length === 0 ? 'Empty rail' : `${ordered.length} selected`}
          </h2>
        </div>
        {ordered.length > 0 && (
          <button type="button" className="text-btn" onClick={onClear}>
            Clear
          </button>
        )}
      </div>

      {ordered.length === 0 ? (
        <div className="outfit-empty">
          <p>Select clothes from your closet to hang them here.</p>
        </div>
      ) : (
        <ul className="outfit-list">
          {ordered.map((item, index) => (
            <li
              key={item.id}
              className="outfit-item"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <span
                className={`outfit-swatch${item.imageDataUrl ? ' has-photo' : ''}`}
                style={{ background: item.imageDataUrl ? '#f4f6f8' : item.color }}
                aria-hidden
              >
                <GarmentVisual
                  item={item}
                  artClassName="outfit-art"
                  photoClassName="outfit-photo"
                />
              </span>
              <span className="outfit-meta">
                <span className="outfit-name">{item.name}</span>
                <span className="outfit-cat">{item.category}</span>
              </span>
              <button
                type="button"
                className="remove-btn"
                onClick={() => onRemove(item.id)}
                aria-label={`Remove ${item.name}`}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}

      {ordered.length > 0 && (
        <p className="outfit-note">Saved on this device — pick again anytime.</p>
      )}
    </aside>
  )
}
