import type { ClosetItem } from '../types'
import { CATEGORY_ORDER } from '../types'
import { GarmentVisual } from './GarmentVisual'

interface OutfitRailProps {
  selected: ClosetItem[]
  selectedTop: ClosetItem | null
  selectedBottom: ClosetItem | null
  onRemove: (id: string) => void
  onClear: () => void
}

export function OutfitRail({
  selected,
  selectedTop,
  selectedBottom,
  onRemove,
  onClear,
}: OutfitRailProps) {
  const ordered = [...selected].sort(
    (a, b) => CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category),
  )
  const hasPair = Boolean(selectedTop && selectedBottom)

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

      <div className="pair-stage" aria-live="polite">
        <p className="pair-label">Top + bottom pairing</p>
        {hasPair ? (
          <div className="pair-stack">
            <div className="pair-slot">
              <GarmentVisual
                item={selectedTop!}
                artClassName="pair-art"
                photoClassName="pair-photo"
              />
            </div>
            <div className="pair-slot">
              <GarmentVisual
                item={selectedBottom!}
                artClassName="pair-art"
                photoClassName="pair-photo"
              />
            </div>
          </div>
        ) : (
          <div className="pair-empty">
            <div className="pair-ghost">Top</div>
            <div className="pair-ghost">Bottom</div>
            <p>Select one top and one bottom to see them paired here.</p>
          </div>
        )}
        {hasPair && (
          <p className="pair-caption">
            {selectedTop!.name} + {selectedBottom!.name}
          </p>
        )}
      </div>

      {ordered.length === 0 ? (
        <div className="outfit-empty">
          <p>Tap clothes in your closet. One piece per type stays on the rail.</p>
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
                <span className="outfit-cat">
                  {item.category} · {item.colorName} · {item.material}
                </span>
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
