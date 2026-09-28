import { useMemo, useState } from 'react'
import AreaChart from '../components/AreaChart'
import CoinIcon from '../components/CoinIcon'
import Icon from '../components/Icon'
import SignupForm from '../components/SignupForm'
import { formatChange, formatPrice, makeSeries } from '../lib/format'

const RANGES = ['1H', '1D', '1W', '1M', '1Y']

const ALLOCATION = [
  { sym: 'BTC', pct: 52, color: '#F7931A' },
  { sym: 'ETH', pct: 26, color: '#627EEA' },
  { sym: 'FDX', pct: 14, color: '#3BA9F5' },
  { sym: 'Other', pct: 8, color: '#5B6F8C' },
]

function HeroVisual({ btc }) {
  const [range, setRange] = useState('1D')
  const base = useMemo(() => {
    const i = RANGES.indexOf(range)
    const raw = makeSeries(i * 97 + 11, 112480.5, [0.6, 2.1, 5.4, 11.8, 64][i], 90)
    return raw.map((_, j) => {
      const win = raw.slice(Math.max(0, j - 4), j + 1)
      return win.reduce((a, b) => a + b, 0) / win.length
    })
  }, [range])
  const series = [...base.slice(0, -1), btc.price]

  return (
    <div className="hv" aria-label="FDX app preview">
      <div className="hv__card hv__main">
        <div className="hv__head">
          <CoinIcon sym="BTC" color={btc.color} size={36} />
          <div>
            <strong>Bitcoin</strong>
            <small>BTC / USDT</small>
          </div>
          <span className="hv__fav"><Icon name="star" size={16} /></span>
        </div>
        <div className="hv__price">
          <span className={`num flash-${btc.flash ?? 'none'}`}>${formatPrice(btc.price)}</span>
          <em className={`num ${btc.change >= 0 ? 'up' : 'down'}`}>{formatChange(btc.change)}</em>
        </div>
        <div className="hv__chart">
          <AreaChart data={series} width={420} height={170} />
        </div>
        <div className="hv__ranges" role="tablist" aria-label="Chart range">
          {RANGES.map((r) => (
            <button key={r} role="tab" aria-selected={range === r} className={range === r ? 'is-active' : ''} onClick={() => setRange(r)}>
              {r}
            </button>
          ))}
        </div>
        <div className="hv__actions">
          <a className="btn btn--primary" href="#get-started">Buy BTC</a>
          <a className="btn btn--ghost" href="#get-started">Sell</a>
        </div>
      </div>

      <div className="hv__card hv__portfolio">
        <small>Portfolio value</small>
        <strong className="num">$48,203.55</strong>
        <span className="num up">+$1,496.20 (3.20%)</span>
        <div className="hv__alloc">
          {ALLOCATION.map((a) => <i key={a.sym} style={{ width: `${a.pct}%`, background: a.color }} />)}
        </div>
        <ul className="hv__legend">
          {ALLOCATION.map((a) => (
            <li key={a.sym}><i style={{ background: a.color }} />{a.sym}<span className="num">{a.pct}%</span></li>
          ))}
        </ul>
      </div>

      <div className="hv__card hv__toast">
        <span className="hv__check"><Icon name="check" size={14} strokeWidth={2.4} /></span>
        <div>
          <strong>Order filled</strong>
          <small className="num">Bought 0.2500 BTC at 112,480.50</small>
        </div>
      </div>
    </div>
  )
}

export default function Hero({ btc }) {
  return (
    <section className="hero dark" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <a className="hero__notice" href="#markets">
            <span>New</span>
            SUI perpetuals now live
            <Icon name="arrowRight" size={14} />
          </a>
          <h1>The trusted exchange for the next era of finance.</h1>
          <p className="hero__sub">
            Buy, sell and grow 750+ digital assets with institutional-grade liquidity, fees from
            0.02% and reserves independently verified every month.
          </p>
          <SignupForm />
          <div className="hero__social">
            <span>Or continue with</span>
            <button className="social-btn" aria-label="Continue with Google"><Icon name="google" size={16} /></button>
            <button className="social-btn" aria-label="Continue with Apple"><Icon name="apple" size={17} /></button>
            <button className="social-btn" aria-label="Continue with Telegram"><Icon name="telegram" size={16} /></button>
          </div>
        </div>
        <HeroVisual btc={btc} />
      </div>
    </section>
  )
}
