export function formatPrice(value) {
  if (value >= 100) return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  if (value >= 1) return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })
  if (value >= 0.01) return value.toFixed(5)
  return value.toFixed(8)
}

export function formatCompact(value) {
  return new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 2 }).format(value)
}

export function formatChange(value) {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`
}

/** Deterministic PRNG so generated charts are stable between renders. */
export function seeded(seed) {
  let s = seed % 2147483647
  if (s <= 0) s += 2147483646
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

export function hashString(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0
  return Math.abs(h) + 1
}

/** Random-walk series that ends at `end` and trends toward `changePct` overall. */
export function makeSeries(seed, end, changePct, points = 32) {
  const rand = seeded(seed)
  const start = end / (1 + changePct / 100)
  const out = []
  let walk = 0
  for (let i = 0; i < points; i++) {
    const t = i / (points - 1)
    const base = start + (end - start) * t
    walk = walk * 0.7 + (rand() - 0.5) * 0.9
    const noise = walk * Math.abs(end - start) * 0.5 + (rand() - 0.5) * end * 0.0015
    out.push(i === points - 1 ? end : base + noise * Math.sin(Math.PI * t + 0.2))
  }
  return out
}
