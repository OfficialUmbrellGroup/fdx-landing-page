import { useState } from 'react'
import CoinIcon from '../components/CoinIcon'
import Icon from '../components/Icon'
import Sparkline from '../components/Sparkline'
import TradingTerminal from '../components/TradingTerminal'
import { EARN_PRODUCTS, MORE_PRODUCTS, TRADERS } from '../lib/data'
import { formatCompact, makeSeries } from '../lib/format'

function FeatureRow({ eyebrow, title, body, points, link, reverse, children }) {
  return (
    <div className={`feature ${reverse ? 'feature--reverse' : ''}`}>
      <div className="feature__copy" data-reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h3>{title}</h3>
        <p className="lede">{body}</p>
        <ul className="checks">
          {points.map((p) => (
            <li key={p}><Icon name="check" size={16} strokeWidth={2.2} /> {p}</li>
          ))}
        </ul>
        <a className="link-more" href="#get-started">{link} <Icon name="arrowRight" size={16} /></a>
      </div>
      <div className="feature__visual" data-reveal>{children}</div>
    </div>
  )
}

function EarnCard() {
  const [tab, setTab] = useState('all')
  const rows = EARN_PRODUCTS.filter((p) => tab === 'all' || (tab === 'flex' ? p.term === 'Flexible' : p.term !== 'Flexible'))
  return (
    <div className="earn">
      <div className="earn__head">
        <strong>Simple Earn</strong>
        <div className="earn__tabs" role="tablist" aria-label="Earn product type">
          {[['all', 'All'], ['flex', 'Flexible'], ['locked', 'Fixed term']].map(([id, label]) => (
            <button key={id} role="tab" aria-selected={tab === id} className={tab === id ? 'is-active' : ''} onClick={() => setTab(id)}>{label}</button>
          ))}
        </div>
      </div>
      <ul className="earn__list">
        {rows.map((p) => (
          <li key={p.sym}>
            <CoinIcon sym={p.sym} color={p.color} size={32} />
            <span className="earn__name"><strong>{p.sym}</strong><small>{p.name}</small></span>
            <span className="earn__term">{p.term}</span>
            <span className="earn__apr"><small>Est. APR</small><strong className="num">{p.apr.toFixed(2)}%</strong></span>
            <a className="btn btn--outline btn--xs" href="#get-started">Subscribe</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TraderStack() {
  return (
    <div className="tstack">
      {TRADERS.slice(0, 2).map((t, i) => (
        <article className="tcard" key={t.name}>
          <header>
            <span className="tcard__avatar">{t.name.slice(0, 2).toUpperCase()}</span>
            <span><strong>{t.name}</strong><small>{t.handle}</small></span>
            <span className="tcard__badge">Top {i + 1}</span>
          </header>
          <div className="tcard__roi">
            <span><small>30D ROI</small><strong className="num up">+{t.roi.toFixed(2)}%</strong></span>
            <Sparkline data={makeSeries(t.seed, 100 + t.roi, t.roi, 30)} up width={150} height={44} strokeWidth={1.6} />
          </div>
          <dl>
            <div><dt>PnL</dt><dd className="num">${formatCompact(t.pnl)}</dd></div>
            <div><dt>Win rate</dt><dd className="num">{t.win}%</dd></div>
            <div><dt>Copiers</dt><dd className="num">{t.followers.toLocaleString()}</dd></div>
          </dl>
          <a className="btn btn--primary btn--sm btn--block" href="#get-started">Copy trader</a>
        </article>
      ))}
    </div>
  )
}

export default function Features({ btc }) {
  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section__head section__head--center" data-reveal>
          <p className="eyebrow">Products</p>
          <h2>One account for every way you trade</h2>
          <p className="lede">Spot, derivatives, yield and automation share one balance, one login and the same deep liquidity.</p>
        </div>

        <div className="features">
          <FeatureRow
            eyebrow="Spot & Futures"
            title="Professional tools, without the complexity"
            body="Trade 750+ spot pairs and perpetual futures on a matching engine built for 1.4 million orders per second."
            points={['Up to 125× leverage with portfolio margin', 'Advanced order types: OCO, trailing stop, TWAP', 'TradingView charts with 100+ indicators']}
            link="Explore trading"
          >
            <TradingTerminal btc={btc} />
          </FeatureRow>

          <FeatureRow
            reverse
            eyebrow="Earn"
            title="Put idle assets to work"
            body="Flexible savings, fixed-term products and on-chain staking, with rewards distributed daily and principal held 1:1."
            points={['Redeem flexible products at any time', 'Rewards credited to your account every day', 'Backed by monthly Proof of Reserves']}
            link="View Earn products"
          >
            <EarnCard />
          </FeatureRow>

          <FeatureRow
            eyebrow="Copy Trading"
            title="Follow proven traders with full transparency"
            body="Mirror the positions of verified lead traders in real time, with every trade, drawdown and fee visible before you commit."
            points={['180,000+ lead traders with audited track records', 'Set your own budget, stop-loss and max drawdown', 'Stop copying at any time, no lock-up']}
            link="Discover traders"
          >
            <TraderStack />
          </FeatureRow>
        </div>

        <div className="more" data-reveal>
          <h3>More ways to trade on FDX</h3>
          <ul className="more__grid">
            {MORE_PRODUCTS.map((p) => (
              <li key={p.title}>
                <Icon name={p.icon} size={22} strokeWidth={1.5} />
                <strong>{p.title}</strong>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
