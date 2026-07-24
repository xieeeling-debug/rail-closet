import { useState } from 'react'
import { AddPiecePanel } from './components/AddPiecePanel'
import { ClosetGrid } from './components/ClosetGrid'
import { OutfitRail } from './components/OutfitRail'
import { useCloset } from './hooks/useCloset'
import { useOutfit } from './hooks/useOutfit'
import { DEFAULT_FILTERS, type ClosetFilters } from './types'
import './App.css'

function App() {
  const [filters, setFilters] = useState<ClosetFilters>(DEFAULT_FILTERS)
  const { items, ready, addPiece, removePiece } = useCloset()
  const { selected, selectedTop, selectedBottom, toggle, clear, isSelected } =
    useOutfit(items)

  return (
    <div className="app">
      <div className="atmosphere" aria-hidden />

      <header className="hero">
        <div className="hero-copy">
          <p className="brand">RAIL</p>
          <h1>Dress from your closet.</h1>
          <p className="lede">
            Upload your clothes, tag type, color, and material, then pair a top
            and bottom to see the look together.
          </p>
          <div className="hero-actions">
            <a className="cta" href="#add-clothes">
              Add my clothes
            </a>
            <a className="text-btn hero-secondary" href="#closet">
              Browse closet
            </a>
            <span className="hero-count">
              {ready ? `${items.length} pieces in your closet` : 'Loading…'}
            </span>
          </div>
        </div>
      </header>

      <main className="stage" id="closet">
        <ClosetGrid
          items={items}
          filters={filters}
          onFiltersChange={setFilters}
          isSelected={isSelected}
          onToggle={toggle}
          ready={ready}
          onDelete={(id) => {
            if (isSelected(id)) toggle(id)
            void removePiece(id)
          }}
          addSlot={
            <div id="add-clothes">
              <AddPiecePanel onAdd={addPiece} />
            </div>
          }
        />
        <OutfitRail
          selected={selected}
          selectedTop={selectedTop}
          selectedBottom={selectedBottom}
          onRemove={toggle}
          onClear={clear}
        />
      </main>

      <footer className="foot">
        <span>RAIL</span>
        <span>Your clothes only — photos stay on this device.</span>
      </footer>
    </div>
  )
}

export default App
