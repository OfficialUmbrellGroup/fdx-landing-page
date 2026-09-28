import { formatChange, formatPrice } from '../lib/format'

export default function Ticker({ markets }) {
  const row = [...markets, ...markets]
  return (
    <div className="ticker dark" aria-label="Live prices">
      <div className="ticker__track">
        {row.map((coin, i) => (
          <span className="ticker__item" key={`${coin.sym}-${i}`} aria-hidden={i >= markets.length}>
            <strong>{coin.sym}/USDT</strong>
            <span className="num">{formatPrice(coin.price)}</span>
            <span className={`num ${coin.change >= 0 ? 'up' : 'down'}`}>{formatChange(coin.change)}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
