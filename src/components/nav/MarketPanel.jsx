import { useState } from 'react'
import { formatChange, formatPrice } from '../../lib/format'
import CoinIcon from '../CoinIcon'
import Icon from '../Icon'

const QUOTES = {
  spot: ['USDT', 'USDC', 'BTC'],
  futures: ['USDT-M', 'USDC-M', 'Coin-M'],
}

function pairLabel(kind, quote, sym) {
  if (kind === 'spot') return `${sym}/${quote}`
  if (quote === 'Coin-M') return `${sym}USD`
  return `${sym}${quote.replace('-M', '')}`
}

export default function MarketPanel({ markets, kind }) {
  const quotes = QUOTES[kind]
  const [quote, setQuote] = useState(quotes[0])
  const [query, setQuery] = useState('')

  const btc = markets.find((m) => m.sym === 'BTC')
  const q = query.trim().toUpperCase()
  const rows = markets
    .filter((m) => !(quote === 'BTC' && m.sym === 'BTC'))
    .filter((m) => !q || m.sym.includes(q) || m.name.toUpperCase().includes(q))

  return (
    <div className="mpanel">
      <label className="mpanel__search">
        <Icon name="search" size={16} />
        <input
          type="text"
          placeholder={kind === 'spot' ? 'Search spot pairs' : 'Search contracts'}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search markets"
        />
      </label>
      <div className="mpanel__tabs" role="tablist">
        {quotes.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={quote === t}
            className={quote === t ? 'is-active' : ''}
            onClick={() => setQuote(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <ul className="mpanel__list">
        {rows.map((m) => {
          const price = quote === 'BTC' ? (m.price / btc.price).toPrecision(4) : formatPrice(m.price)
          return (
            <li key={m.sym}>
              <a href="#markets">
                <CoinIcon sym={m.sym} color={m.color} size={20} />
                <span className="mpanel__pair">
                  {pairLabel(kind, quote, m.sym)}
                  {kind === 'futures' && <em>Perp</em>}
                  {kind === 'spot' && m.sym === 'FDX' && <em className="is-gold">0 fees</em>}
                </span>
                <span className="num">{price}</span>
                <span className={`num ${m.change >= 0 ? 'up' : 'down'}`}>{formatChange(m.change)}</span>
              </a>
            </li>
          )
        })}
        {rows.length === 0 && <li className="mpanel__empty">No matching markets</li>}
      </ul>
    </div>
  )
}
