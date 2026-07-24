import type { ReactNode } from 'react'
import type { Category, ClosetItem } from '../types'
import { CATEGORIES } from '../types'
import { GarmentVisual } from './GarmentVisual'

interface ClosetGridProps {
  items: ClosetItem[]
  filter: Category | 'all'
  onFilterChange: (filter: Category | 'all') => void
  isSelected: (id: string) => boolean
  onToggle: (id: string) => void
  onDeleteCustom?: (id: string) => void
  addSlot?: ReactNode
}

export function ClosetGrid({
  items,
  filter,
  onFilterChange,
  isSelected,
  onToggle,
  onDeleteCustom,
  addSlot,
}: ClosetGridProps) {
  const visible =
    filter === 'all' ? items : items.filter((item) => item.category === filter)

  return (
    <section className="closet" aria-labelledby="closet-heading">
      <div className="section-head section-head-row">
        <div>
          <h2 id="closet-heading">Your closet</h2>
          <p>Upload your clothes or tap sample pieces to build today’s look.</p>
        </div>
        {addSlot}
      </div>

      <div className="filters" role="tablist" aria-label="Filter by category">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={filter === cat.id}
            className={`filter-btn${filter === cat.id ? ' is-active' : ''}`}
            onClick={() => onFilterChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <ul className="garment-grid">
        {visible.map((item, index) => {
          const selected = isSelected(item.id)
          return (
            <li key={item.id} style={{ animationDelay: `${index * 40}ms` }}>
              <div className={`garment-wrap${selected ? ' is-selected' : ''}`}>
                <button
                  type="button"
                  className={`garment${selected ? ' is-selected' : ''}`}
                  onClick={() => onToggle(item.id)}
                  aria-pressed={selected}
                >
                  <span
                    className={`garment-swatch${item.imageDataUrl ? ' has-photo' : ''}`}
                    style={{ background: item.imageDataUrl ? '#f4f6f8' : item.color }}
                  >
                    <GarmentVisual
                      item={item}
                      artClassName="garment-art"
                      photoClassName="garment-photo"
                    />
                  </span>
                  <span className="garment-meta">
                    <span className="garment-name">{item.name}</span>
                    <span className="garment-detail">
                      {item.isCustom ? 'Your upload' : `${item.fabric} · ${item.season}`}
                    </span>
                  </span>
                  <span className="garment-check" aria-hidden>
                    {selected ? '✓' : '+'}
                  </span>
                </button>
                {item.isCustom && onDeleteCustom && (
                  <button
                    type="button"
                    className="garment-delete"
                    onClick={() => onDeleteCustom(item.id)}
                    aria-label={`Delete ${item.name}`}
                  >
                    Delete
                  </button>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
