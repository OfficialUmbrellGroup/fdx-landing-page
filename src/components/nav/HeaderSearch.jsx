import { useState } from 'react'
import { formatChange, formatPrice } from '../../lib/format'
import CoinIcon from '../CoinIcon'
import Icon from '../Icon'

export default function HeaderSearch({ markets }) {
  const [query, setQuery] = useState('')
  const q = query.trim().toUpperCase()
  const trending = [...markets].sort((a, b) => b.vol - a.vol)
  const results = q
    ? markets.filter((m) => m.sym.includes(q) || m.name.toUpperCase().includes(q))
    : trending.slice(0, 6)
  const hint = trending[0] ? `${trending[0].sym}USDT` : 'Search'

  return (
    <div className="hsearch has-drop">
      <label className="hsearch__field">
        <Icon name="search" size={16} />
        <input
          type="text"
          placeholder={hint}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search coins, pairs and features"
        />
      </label>
      <div className="drop drop--search">
        <p className="drop__label">{q ? 'Results' : 'Trending'}</p>
        <ul>
          {results.map((m, i) => (
            <li key={m.sym}>
              <a href="#markets">
                {!q && <span className="hsearch__rank">{i + 1}</span>}
                <CoinIcon sym={m.sym} color={m.color} size={20} />
                <span className="hsearch__pair">{m.sym}<small>/USDT</small></span>
                <span className="num">{formatPrice(m.price)}</span>
                <span className={`num ${m.change >= 0 ? 'up' : 'down'}`}>{formatChange(m.change)}</span>
              </a>
            </li>
          ))}
          {results.length === 0 && <li className="mpanel__empty">No results for “{query}”</li>}
        </ul>
      </div>
    </div>
  )
}
