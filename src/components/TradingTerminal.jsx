import { useMemo, useState } from 'react'
import Icon from './Icon'
import { formatPrice, seeded } from '../lib/format'

function makeCandles(count, last) {
  const rand = seeded(42)
  const candles = []
  let price = last * 0.94
  for (let i = 0; i < count; i++) {
    const open = price
    const drift = (last - price) / (count - i) + (rand() - 0.47) * last * 0.008
    const close = i === count - 1 ? last : open + drift
    const high = Math.max(open, close) + rand() * last * 0.004
    const low = Math.min(open, close) - rand() * last * 0.004
    candles.push({ open, close, high, low, vol: 0.3 + rand() * 0.7 })
    price = close
  }
  return candles
}

function CandleChart({ price }) {
  const candles = useMemo(() => makeCandles(48, 112480.5), [])
  const data = [...candles.slice(0, -1), { ...candles.at(-1), close: price, high: Math.max(candles.at(-1).high, price), low: Math.min(candles.at(-1).low, price) }]
  const W = 480
  const H = 220
  const max = Math.max(...data.map((c) => c.high))
  const min = Math.min(...data.map((c) => c.low))
  const y = (v) => 8 + ((max - v) / (max - min)) * (H - 60)
  const step = W / data.length

  return (
    <svg className="term__chart" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
      {[0.25, 0.5, 0.75].map((g) => (
        <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} className="term__grid" />
      ))}
      {data.map((c, i) => {
        const up = c.close >= c.open
        const x = i * step + step / 2
        return (
          <g key={i} className={up ? 'candle-up' : 'candle-down'}>
            <line x1={x} x2={x} y1={y(c.high)} y2={y(c.low)} />
            <rect x={x - step * 0.32} width={step * 0.64} y={y(Math.max(c.open, c.close))} height={Math.max(1, Math.abs(y(c.open) - y(c.close)))} />
            <rect className="vol" x={x - step * 0.32} width={step * 0.64} y={H - c.vol * 36} height={c.vol * 36} />
          </g>
        )
      })}
      <line x1="0" x2={W} y1={y(price)} y2={y(price)} className="term__last" />
    </svg>
  )
}

function OrderBook({ price }) {
  const rand = seeded(7)
  const levels = Array.from({ length: 6 }, (_, i) => ({ offset: (i + 1) * 4.5, size: (rand() * 2.4 + 0.05).toFixed(4), depth: 20 + rand() * 80 }))
  return (
    <div className="book">
      <div className="book__head"><span>Price (USDT)</span><span>Amount (BTC)</span></div>
      {[...levels].reverse().map((l) => (
        <div className="book__row book__row--ask" key={`a${l.offset}`} style={{ '--depth': `${l.depth}%` }}>
          <span className="num">{formatPrice(price + l.offset)}</span><span className="num">{l.size}</span>
        </div>
      ))}
      <div className="book__mid num up">{formatPrice(price)} <Icon name="arrowUpRight" size={14} /></div>
      {levels.map((l) => (
        <div className="book__row book__row--bid" key={`b${l.offset}`} style={{ '--depth': `${l.depth * 0.9}%` }}>
          <span className="num">{formatPrice(price - l.offset)}</span><span className="num">{l.size}</span>
        </div>
      ))}
    </div>
  )
}

export default function TradingTerminal({ btc }) {
  const [side, setSide] = useState('buy')

  return (
    <div className="term dark" aria-label="FDX trading terminal preview">
      <div className="term__bar">
        <span className="term__dots"><i /><i /><i /></span>
        <strong>BTC/USDT</strong>
        <span className={`num ${btc.change >= 0 ? 'up' : 'down'}`}>{formatPrice(btc.price)}</span>
        <span className="term__meta hide-sm">24h High <b className="num">{formatPrice(btc.high)}</b></span>
        <span className="term__meta hide-sm">24h Low <b className="num">{formatPrice(btc.low)}</b></span>
      </div>
      <div className="term__body">
        <div className="term__main">
          <div className="term__intervals">
            {['1m', '15m', '1H', '4H', '1D', '1W'].map((t) => (
              <span key={t} className={t === '4H' ? 'is-active' : ''}>{t}</span>
            ))}
          </div>
          <CandleChart price={btc.price} />
          <div className="order">
            <div className="order__sides">
              <button className={side === 'buy' ? 'is-buy' : ''} onClick={() => setSide('buy')}>Buy</button>
              <button className={side === 'sell' ? 'is-sell' : ''} onClick={() => setSide('sell')}>Sell</button>
            </div>
            <div className="order__field"><span>Price</span><b className="num">{formatPrice(btc.price)}</b><em>USDT</em></div>
            <div className="order__field"><span>Amount</span><b className="num">0.2500</b><em>BTC</em></div>
            <div className="order__slider"><i style={{ width: '50%' }} /></div>
            <button className={`btn btn--block ${side === 'buy' ? 'btn--buy' : 'btn--sell'}`}>
              {side === 'buy' ? 'Buy' : 'Sell'} BTC
            </button>
          </div>
        </div>
        <OrderBook price={btc.price} />
      </div>
    </div>
  )
}
