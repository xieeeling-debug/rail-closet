import type { ReactNode } from 'react'
import type { ClosetFilters, ClosetItem, ColorName, Material } from '../types'
import {
  CATEGORIES,
  COLOR_OPTIONS,
  MATERIAL_OPTIONS,
  filterClosetItems,
} from '../types'
import { GarmentVisual } from './GarmentVisual'

interface ClosetGridProps {
  items: ClosetItem[]
  filters: ClosetFilters
  onFiltersChange: (next: ClosetFilters) => void
  isSelected: (id: string) => boolean
  onToggle: (id: string) => void
  onDelete?: (id: string) => void
  addSlot?: ReactNode
  ready?: boolean
}

export function ClosetGrid({
  items,
  filters,
  onFiltersChange,
  isSelected,
  onToggle,
  onDelete,
  addSlot,
  ready = true,
}: ClosetGridProps) {
  const visible = filterClosetItems(items, filters)
  const usedColors = new Set(items.map((item) => item.colorName))
  const usedMaterials = new Set(items.map((item) => item.material))

  return (
    <section className="closet" aria-labelledby="closet-heading">
      <div className="section-head section-head-row">
        <div>
          <h2 id="closet-heading">Your closet</h2>
          <p>Filter by type, color, or material — then tap a top and a bottom to pair.</p>
        </div>
        {addSlot}
      </div>

      <div className="filter-block">
        <p className="filter-label">Type</p>
        <div className="filters" role="group" aria-label="Filter by type">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn${filters.category === cat.id ? ' is-active' : ''}`}
              onClick={() => onFiltersChange({ ...filters, category: cat.id })}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-block">
        <p className="filter-label">Color</p>
        <div className="filters" role="group" aria-label="Filter by color">
          <button
            type="button"
            className={`filter-btn${filters.colorName === 'all' ? ' is-active' : ''}`}
            onClick={() => onFiltersChange({ ...filters, colorName: 'all' })}
          >
            All
          </button>
          {COLOR_OPTIONS.filter((c) => usedColors.has(c.id) || filters.colorName === c.id).map(
            (color) => (
              <button
                key={color.id}
                type="button"
                className={`filter-btn filter-color${filters.colorName === color.id ? ' is-active' : ''}`}
                onClick={() =>
                  onFiltersChange({
                    ...filters,
                    colorName: color.id as ColorName,
                  })
                }
              >
                <span className="color-dot" style={{ background: color.hex }} aria-hidden />
                {color.label}
              </button>
            ),
          )}
        </div>
      </div>

      <div className="filter-block">
        <p className="filter-label">Material</p>
        <div className="filters" role="group" aria-label="Filter by material">
          <button
            type="button"
            className={`filter-btn${filters.material === 'all' ? ' is-active' : ''}`}
            onClick={() => onFiltersChange({ ...filters, material: 'all' })}
          >
            All
          </button>
          {MATERIAL_OPTIONS.filter(
            (m) => usedMaterials.has(m.id) || filters.material === m.id,
          ).map((mat) => (
            <button
              key={mat.id}
              type="button"
              className={`filter-btn${filters.material === mat.id ? ' is-active' : ''}`}
              onClick={() =>
                onFiltersChange({
                  ...filters,
                  material: mat.id as Material,
                })
              }
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {!ready ? (
        <p className="closet-empty">Loading your closet…</p>
      ) : items.length === 0 ? (
        <div className="closet-empty">
          <p>No clothes yet. Tap <strong>Add my clothes</strong> to upload your first piece.</p>
        </div>
      ) : visible.length === 0 ? (
        <div className="closet-empty">
          <p>No pieces match these filters. Clear a filter to see more.</p>
          <button
            type="button"
            className="text-btn"
            onClick={() =>
              onFiltersChange({ category: 'all', colorName: 'all', material: 'all' })
            }
          >
            Clear filters
          </button>
        </div>
      ) : (
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
                        {item.category} · {item.colorName} · {item.material}
                      </span>
                    </span>
                    <span className="garment-check" aria-hidden>
                      {selected ? '✓' : '+'}
                    </span>
                  </button>
                  {onDelete && (
                    <button
                      type="button"
                      className="garment-delete"
                      onClick={() => onDelete(item.id)}
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
      )}
    </section>
  )
}
