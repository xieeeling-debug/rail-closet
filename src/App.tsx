import { useState } from 'react'
import { AddPiecePanel } from './components/AddPiecePanel'
import { ClosetGrid } from './components/ClosetGrid'
import { OutfitRail } from './components/OutfitRail'
import { useCloset } from './hooks/useCloset'
import { useOutfit } from './hooks/useOutfit'
import type { Category } from './types'
import './App.css'

function App() {
  const [filter, setFilter] = useState<Category | 'all'>('all')
  const { items, customCount, addPiece, removePiece } = useCloset()
  const { selected, toggle, clear, isSelected } = useOutfit(items)

  return (
    <div className="app">
      <div className="atmosphere" aria-hidden />

      <header className="hero">
        <div className="hero-copy">
          <p className="brand">RAIL</p>
          <h1>Dress from your closet.</h1>
          <p className="lede">
            Upload photos of your clothes — we remove the background — then select
            pieces for today’s look.
          </p>
          <div className="hero-actions">
            <a className="cta" href="#add-clothes">
              Add my clothes
            </a>
            <a className="text-btn hero-secondary" href="#closet">
              Browse closet
            </a>
            <span className="hero-count">
              {items.length} pieces
              {customCount > 0 ? ` · ${customCount} yours` : ''}
            </span>
          </div>
        </div>
      </header>

      <main className="stage" id="closet">
        <ClosetGrid
          items={items}
          filter={filter}
          onFilterChange={setFilter}
          isSelected={isSelected}
          onToggle={toggle}
          onDeleteCustom={(id) => {
            if (isSelected(id)) toggle(id)
            void removePiece(id)
          }}
          addSlot={
            <div id="add-clothes">
              <AddPiecePanel onAdd={addPiece} />
            </div>
          }
        />
        <OutfitRail selected={selected} onRemove={toggle} onClear={clear} />
      </main>

      <footer className="foot">
        <span>RAIL</span>
        <span>Photos stay on this device. Background removal runs in your browser.</span>
      </footer>
    </div>
  )
}

export default App
