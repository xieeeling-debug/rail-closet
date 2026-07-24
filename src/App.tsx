import { useState } from 'react'
import { ClosetGrid } from './components/ClosetGrid'
import { OutfitRail } from './components/OutfitRail'
import { CLOSET } from './data/closet'
import { useOutfit } from './hooks/useOutfit'
import type { Category } from './types'
import './App.css'

function App() {
  const [filter, setFilter] = useState<Category | 'all'>('all')
  const { selected, toggle, clear, isSelected } = useOutfit(CLOSET)

  return (
    <div className="app">
      <div className="atmosphere" aria-hidden />

      <header className="hero">
        <div className="hero-copy">
          <p className="brand">RAIL</p>
          <h1>Dress from your closet.</h1>
          <p className="lede">
            Browse what you own, select pieces, and hang a look on today’s rail.
          </p>
          <div className="hero-actions">
            <a className="cta" href="#closet">
              Open closet
            </a>
            <span className="hero-count">{CLOSET.length} pieces ready</span>
          </div>
        </div>
      </header>

      <main className="stage" id="closet">
        <ClosetGrid
          items={CLOSET}
          filter={filter}
          onFilterChange={setFilter}
          isSelected={isSelected}
          onToggle={toggle}
        />
        <OutfitRail selected={selected} onRemove={toggle} onClear={clear} />
      </main>

      <footer className="foot">
        <span>RAIL</span>
        <span>Your closet, one look at a time.</span>
      </footer>
    </div>
  )
}

export default App
