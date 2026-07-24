import type { Category, ClosetItem } from '../types'
import { CATEGORIES } from '../types'
import { GarmentArt } from './GarmentArt'

interface ClosetGridProps {
  items: ClosetItem[]
  filter: Category | 'all'
  onFilterChange: (filter: Category | 'all') => void
  isSelected: (id: string) => boolean
  onToggle: (id: string) => void
}

export function ClosetGrid({
  items,
  filter,
  onFilterChange,
  isSelected,
  onToggle,
}: ClosetGridProps) {
  const visible =
    filter === 'all' ? items : items.filter((item) => item.category === filter)

  return (
    <section className="closet" aria-labelledby="closet-heading">
      <div className="section-head">
        <h2 id="closet-heading">Your closet</h2>
        <p>Tap pieces to build today’s look.</p>
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
              <button
                type="button"
                className={`garment${selected ? ' is-selected' : ''}`}
                onClick={() => onToggle(item.id)}
                aria-pressed={selected}
              >
                <span className="garment-swatch" style={{ background: item.color }}>
                  <GarmentArt item={item} className="garment-art" />
                </span>
                <span className="garment-meta">
                  <span className="garment-name">{item.name}</span>
                  <span className="garment-detail">
                    {item.fabric} · {item.season}
                  </span>
                </span>
                <span className="garment-check" aria-hidden>
                  {selected ? '✓' : '+'}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
