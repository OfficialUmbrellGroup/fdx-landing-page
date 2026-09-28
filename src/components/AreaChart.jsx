import { useId } from 'react'

function smoothPath(points) {
  return points.reduce((d, [x, y], i, arr) => {
    if (i === 0) return `M${x} ${y}`
    const [px, py] = arr[i - 1]
    const [ppx, ppy] = arr[i - 2] ?? arr[i - 1]
    const [nx, ny] = arr[i + 1] ?? [x, y]
    const c1x = px + (x - ppx) / 6
    const c1y = py + (y - ppy) / 6
    const c2x = x - (nx - px) / 6
    const c2y = y - (ny - py) / 6
    return `${d} C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`
  }, '')
}

export default function AreaChart({ data, width = 400, height = 160, color = 'var(--sky-500)' }) {
  const id = useId()
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const step = width / (data.length - 1)
  const points = data.map((v, i) => [i * step, 8 + (1 - (v - min) / range) * (height - 16)])
  const line = smoothPath(points)
  const [lx, ly] = points.at(-1)

  return (
    <svg className="area-chart" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${line} L${width} ${height} L0 ${height} Z`} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" />
      <line x1="0" x2={width} y1={ly} y2={ly} stroke={color} strokeOpacity="0.35" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />
      <circle cx={lx - 1} cy={ly} r="4" fill={color} />
    </svg>
  )
}
