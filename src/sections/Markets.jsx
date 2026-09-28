import { useMemo, useState } from 'react'
import CoinIcon from '../components/CoinIcon'
import Icon from '../components/Icon'
import Sparkline from '../components/Sparkline'
import { formatChange, formatCompact, formatPrice } from '../lib/format'

const TABS = [
  { id: 'hot', label: 'Hot' },
  { id: 'gainers', label: 'Gainers' },
  { id: 'losers', label: 'Losers' },
  { id: 'new', label: 'New' },
  { id: 'volume', label: '24h Volume' },
]

function filterMarkets(markets, tab, query) {
  let list = markets
  if (query) {
    const q = query.toLowerCase()
    list = list.filter((c) => c.sym.toLowerCase().includes(q) || c.name.toLowerCase().includes(q))
  }
  switch (tab) {
    case 'gainers':
      return [...list].sort((a, b) => b.change - a.change)
    case 'losers':
      return [...list].sort((a, b) => a.change - b.change)
    case 'new':
      return list.filter((c) => c.tags.includes('new'))
    case 'volume':
      return [...list].sort((a, b) => b.vol - a.vol)
    default:
      return [...list].sort((a, b) => b.tags.includes('hot') - a.tags.includes('hot') || b.cap - a.cap)
  }
}

export default function Markets({ markets }) {
  const [tab, setTab] = useState('hot')
  const [query, setQuery] = useState('')
  const [favs, setFavs] = useState(() => new Set(['BTC', 'FDX']))

  const rows = useMemo(() => filterMarkets(markets, tab, query).slice(0, 8), [markets, tab, query])

  const toggleFav = (sym) =>
    setFavs((prev) => {
      const next = new Set(prev)
      next.has(sym) ? next.delete(sym) : next.add(sym)
      return next
    })

  return (
    <section className="section section--alt" id="markets">
      <div className="container">
        <div className="section__head section__head--row" data-reveal>
          <div>
            <p className="eyebrow">Markets</p>
            <h2>Today’s crypto prices</h2>
          </div>
          <label className="search">
            <Icon name="search" size={16} />
            <span className="visually-hidden">Search coins</span>
            <input type="search" placeholder="Search coin" value={query} onChange={(e) => setQuery(e.target.value)} />
          </label>
        </div>

        <div className="markets" data-reveal>
          <div className="tabs tabs--lg" role="tablist" aria-label="Market filters">
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                className={`tab ${tab === t.id ? 'is-active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.icon && <Icon name={t.icon} size={14} />} {t.label}
              </button>
            ))}
          </div>

          <div className="table-wrap">
            <table className="mtable">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col" className="r">Price</th>
                  <th scope="col" className="r">24h Change</th>
                  <th scope="col" className="r hide-md">24h High / Low</th>
                  <th scope="col" className="r hide-sm">24h Volume</th>
                  <th scope="col" className="r hide-md">Last 24h</th>
                  <th scope="col" className="r hide-xs"><span className="visually-hidden">Action</span></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((coin) => (
                  <tr key={coin.sym}>
                    <td>
                      <span className="mtable__coin">
                        <button
                          className={`fav ${favs.has(coin.sym) ? 'is-on' : ''}`}
                          aria-label={`${favs.has(coin.sym) ? 'Remove' : 'Add'} ${coin.name} ${favs.has(coin.sym) ? 'from' : 'to'} favourites`}
                          onClick={() => toggleFav(coin.sym)}
                        >
                          <Icon name="star" size={14} />
                        </button>
                        <CoinIcon sym={coin.sym} color={coin.color} size={30} />
                        <span>
                          <strong>{coin.sym}</strong>
                          <small>{coin.name}</small>
                        </span>
                      </span>
                    </td>
                    <td className={`r num mtable__price flash-${coin.flash ?? 'none'}`}>${formatPrice(coin.price)}</td>
                    <td className={`r num ${coin.change >= 0 ? 'up' : 'down'}`}>{formatChange(coin.change)}</td>
                    <td className="r num muted hide-md">
                      {formatPrice(coin.high)} / {formatPrice(coin.low)}
                    </td>
                    <td className="r num muted hide-sm">${formatCompact(coin.vol)}</td>
                    <td className="r hide-md">
                      <Sparkline data={coin.spark} up={coin.change >= 0} width={100} height={30} fill={false} strokeWidth={1.4} />
                    </td>
                    <td className="r hide-xs">
                      <a className="btn btn--outline btn--xs" href="#get-started">Trade</a>
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={7} className="mtable__empty">No coins match “{query}”.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <a className="link-more" href="#get-started">
            View 750+ markets <Icon name="arrowRight" size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
