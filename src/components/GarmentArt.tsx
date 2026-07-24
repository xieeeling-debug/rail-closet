import type { ClosetItem } from '../types'

interface GarmentArtProps {
  item: ClosetItem
  className?: string
}

export function GarmentArt({ item, className }: GarmentArtProps) {
  const fill = item.color
  const shade = item.accent ?? item.color

  switch (item.category) {
    case 'tops':
      return (
        <svg viewBox="0 0 120 140" className={className} aria-hidden>
          <path
            d="M28 28 L48 18 L60 30 L72 18 L92 28 L84 48 L84 122 L36 122 L36 48 Z"
            fill={fill}
          />
          <path d="M48 18 L60 30 L72 18" fill="none" stroke={shade} strokeWidth="3" />
          <path d="M36 48 L28 28" fill="none" stroke={shade} strokeWidth="2" opacity="0.5" />
          <path d="M84 48 L92 28" fill="none" stroke={shade} strokeWidth="2" opacity="0.5" />
        </svg>
      )
    case 'bottoms':
      return (
        <svg viewBox="0 0 120 140" className={className} aria-hidden>
          <path
            d="M38 18 H82 V48 L92 122 H68 L60 70 L52 122 H28 L38 48 Z"
            fill={fill}
          />
          <path d="M38 30 H82" stroke={shade} strokeWidth="2" opacity="0.55" />
          <path d="M60 30 V70" stroke={shade} strokeWidth="2" opacity="0.4" />
        </svg>
      )
    case 'outerwear':
      return (
        <svg viewBox="0 0 120 140" className={className} aria-hidden>
          <path
            d="M22 30 L46 16 L60 28 L74 16 L98 30 L90 52 L90 124 L30 124 L30 52 Z"
            fill={fill}
          />
          <path d="M60 28 V124" stroke={shade} strokeWidth="2.5" opacity="0.45" />
          <path d="M46 16 L60 28 L74 16" fill="none" stroke={shade} strokeWidth="3" />
          <rect x="54" y="58" width="12" height="10" rx="2" fill={shade} opacity="0.55" />
        </svg>
      )
    case 'shoes':
      return (
        <svg viewBox="0 0 120 140" className={className} aria-hidden>
          <path
            d="M24 78 C36 62, 58 58, 78 62 L98 68 C104 70, 106 78, 100 84 L28 96 C20 94, 18 86, 24 78 Z"
            fill={fill}
          />
          <path
            d="M28 90 L98 78"
            fill="none"
            stroke={shade}
            strokeWidth="3"
            opacity="0.45"
          />
          <ellipse cx="62" cy="98" rx="34" ry="6" fill={shade} opacity="0.25" />
        </svg>
      )
    case 'accessories':
      return (
        <svg viewBox="0 0 120 140" className={className} aria-hidden>
          <rect x="28" y="42" width="64" height="48" rx="8" fill={fill} />
          <path
            d="M44 42 V34 C44 24, 76 24, 76 34 V42"
            fill="none"
            stroke={shade}
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="60" cy="66" r="5" fill={shade} opacity="0.7" />
        </svg>
      )
  }
}
