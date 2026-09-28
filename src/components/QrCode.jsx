import { useMemo } from 'react'
import { seeded } from '../lib/format'

export default function QrCode({ size = 25 }) {
  const cells = useMemo(() => {
    const rand = seeded(2026)
    const isFinder = (x, y) => {
      const inBox = (ox, oy) => x >= ox && x < ox + 7 && y >= oy && y < oy + 7
      return inBox(0, 0) || inBox(size - 7, 0) || inBox(0, size - 7)
    }
    const out = []
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (isFinder(x, y) || (x < 8 && y < 8) || (x > size - 9 && y < 8) || (x < 8 && y > size - 9)) continue
        if (rand() > 0.52) out.push([x, y])
      }
    }
    return out
  }, [size])

  const finder = (ox, oy) => (
    <g key={`${ox}-${oy}`}>
      <rect x={ox} y={oy} width="7" height="7" rx="1.2" fill="#061433" />
      <rect x={ox + 1} y={oy + 1} width="5" height="5" rx=".8" fill="#fff" />
      <rect x={ox + 2} y={oy + 2} width="3" height="3" rx=".5" fill="#061433" />
    </g>
  )

  return (
    <svg className="qr" viewBox={`-1 -1 ${size + 2} ${size + 2}`} role="img" aria-label="QR code to download the FDX app">
      <rect x="-1" y="-1" width={size + 2} height={size + 2} rx="2" fill="#fff" />
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x + 0.08} y={y + 0.08} width=".84" height=".84" rx=".2" fill="#061433" />
      ))}
      {finder(0, 0)}
      {finder(size - 7, 0)}
      {finder(0, size - 7)}
    </svg>
  )
}
