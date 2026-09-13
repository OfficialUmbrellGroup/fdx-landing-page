import { useState } from 'react'
import './App.css'

/* ------------------------------- icon system ------------------------------ */

const ICON_PATHS = {
  shield: (
    <>
      <path d="M12 3l7 3v5.2c0 4.4-2.9 7.5-7 8.8-4.1-1.3-7-4.4-7-8.8V6l7-3z" />
      <path d="M9 11.6l2.1 2.1 4-4.4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-3.2-3.2" />
    </>
  ),
  bolt: <path d="M13 2L4.5 13.5h6L11 22l8.5-11.5h-6L13 2z" />,
  badge: (
    <>
      <rect x="3" y="5" width="18" height="14.5" rx="2.5" />
      <circle cx="8.5" cy="11" r="2" />
      <path d="M5.8 16.6c.7-1.3 1.6-1.9 2.7-1.9s2 .6 2.7 1.9" />
      <path d="M13.5 9.5h5M13.5 13h5" />
    </>
  ),
  candles: (
    <>
      <path d="M7 3.5v3M7 16.5v3M17 3.5v2M17 15.5v2" />
      <rect x="4.8" y="6.5" width="4.4" height="10" rx="1" />
      <rect x="14.8" y="5.5" width="4.4" height="10" rx="1" />
    </>
  ),
  trend: (
    <>
      <path d="M3 17l6.2-6.2 3.8 3.8L21 6.5" />
      <path d="M15 6.5h6v6" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="8.7" cy="7.3" rx="4.7" ry="3.1" />
      <path d="M4 7.3v3.4c0 1.7 2.1 3.1 4.7 3.1 1 0 2-.2 2.7-.5" />
      <ellipse cx="15.3" cy="15.1" rx="4.7" ry="3.1" />
      <path d="M10.6 15.1v3.4c0 1.7 2.1 3.1 4.7 3.1s4.7-1.4 4.7-3.1v-3.4" />
    </>
  ),
  bot: (
    <>
      <rect x="4" y="8.5" width="16" height="11" rx="3" />
      <path d="M12 8.5V5.6" />
      <circle cx="12" cy="4" r="1.4" />
      <circle cx="9" cy="13" r="1" />
      <circle color="currentColor" cx="15" cy="13" r="1" />
      <path d="M9.5 16.3h5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3.5 19.5c.9-2.9 3-4.4 5.5-4.4s4.6 1.5 5.5 4.4" />
      <circle cx="16.8" cy="9.5" r="2.6" />
      <path d="M15.8 15.2c2.3.2 4 1.6 4.7 4" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 2.8c2.4 1.8 3.9 4.9 3.9 8.2l-1.4 3.4h-5L8.1 11c0-3.3 1.5-6.4 3.9-8.2z" />
      <circle cx="12" cy="9.3" r="1.5" />
      <path d="M8.1 11.2l-2.6 2 .9 3.1 2.6-1.6M15.9 11.2l2.6 2-.9 3.1-2.6-1.6" />
      <path d="M10.4 17.5l1.6 3.2 1.6-3.2" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5.5" width="18" height="13.5" rx="2.5" />
      <path d="M3 10h18" />
      <path d="M7 15.2h4.5" />
    </>
  ),
  lock: (
    <>
      <rect x="5.5" y="10.8" width="13" height="9.7" rx="2.2" />
      <path d="M8.5 10.8V8a3.5 3.5 0 017 0v2.8" />
      <circle cx="12" cy="15.4" r="1.2" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5 20c1-3.4 3.7-5 7-5s6 1.6 7 5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3.5" y="7.8" width="17" height="12.4" rx="2.4" />
      <path d="M9 7.8V6.3A2.3 2.3 0 0111.3 4h1.4A2.3 2.3 0 0115 6.3v1.5" />
      <path d="M3.5 12.7h17" />
    </>
  ),
  landmark: (
    <>
      <path d="M4 9.3L12 4l8 5.3" />
      <path d="M5.5 9.5V17M10 9.5V17M14 9.5V17M18.5 9.5V17" />
      <path d="M4 17h16M3 20.2h18" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3.2l9 4.9-9 4.9-9-4.9 9-4.9z" />
      <path d="M3.5 13.2l8.5 4.6 8.5-4.6" />
    </>
  ),
  activity: <path d="M3 12.5h3.8L9.3 5l5.4 14 2.5-6.5H21" />,
  link: (
    <>
      <path d="M9.5 14.5l5-5" />
      <path d="M8.3 10.7l-2.1 2.1a3.4 3.4 0 104.8 4.8l2.1-2.1" />
      <path d="M15.7 13.3l2.1-2.1a3.4 3.4 0 10-4.8-4.8l-2.1 2.1" />
    </>
  ),
  check: <path d="M4.5 12.8l4.7 4.7L19.5 7" />,
  diamond: <path d="M12 3.2l7.2 8.8-7.2 8.8L4.8 12 12 3.2z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.3 2.3 3.4 5.2 3.4 8.5s-1.1 6.2-3.4 8.5c-2.3-2.3-3.4-5.2-3.4-8.5S9.7 5.8 12 3.5z" />
    </>
  ),
  doc: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4" />
      <path d="M10 12h5M10 15.5h5" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16" />
      <path d="M8 20h8" />
      <path d="M5 7h14" />
      <path d="M5 7l-2.2 5.2a2.9 2.9 0 004.4 0L5 7zM19 7l-2.2 5.2a2.9 2.9 0 004.4 0L19 7z" />
    </>
  ),
}

function Icon({ name, size = 20, strokeWidth = 1.6 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICON_PATHS[name]}
    </svg>
  )
}

/* ---------------------------------- data ---------------------------------- */

const NAV_LINKS = [
  { label: 'Markets', href: '#markets' },
  { label: 'Services', href: '#services' },
  { label: 'Clients', href: '#clients' },
  { label: 'Security', href: '#security' },
  { label: 'Fees', href: '#fees' },
]

const STATS = [
  { value: '500+', label: 'Listed assets' },
  { value: '$420B', label: 'Annual volume' },
  { value: '35M', label: 'Verified clients' },
  { value: '99.995%', label: 'Engine uptime' },
]

const TICKER = [
  { sym: 'BTC/USDT', price: '97,412.50', change: 1.84 },
  { sym: 'ETH/USDT', price: '3,588.10', change: 2.37 },
  { sym: 'SOL/USDT', price: '184.22', change: -0.62 },
  { sym: 'XRP/USDT', price: '2.4105', change: 3.15 },
  { sym: 'BNB/USDT', price: '712.80', change: 0.94 },
  { sym: 'FDX/USDT', price: '4.8630', change: 5.28 },
  { sym: 'ADA/USDT', price: '0.9142', change: 2.02 },
  { sym: 'DOGE/USDT', price: '0.2264', change: -2.41 },
  { sym: 'AVAX/USDT', price: '36.71', change: 1.37 },
  { sym: 'LINK/USDT', price: '21.85', change: 4.06 },
]

const TRUST_ITEMS = [
  {
    icon: 'shield',
    title: 'Proven reliability',
    body: 'Over 35 million clients trade through FDX. The matching engine has held 99.995% uptime across every major market event since launch.',
  },
  {
    icon: 'search',
    title: 'Transparent reserves',
    body: 'Client assets are backed one-to-one and verified through monthly Merkle-tree attestations, published openly for anyone to audit.',
  },
  {
    icon: 'bolt',
    title: 'Efficient markets',
    body: 'A 10 ms matching engine, deep order books, and smart order routing keep execution tight — and slippage low — at any size.',
  },
  {
    icon: 'badge',
    title: 'Regulated operation',
    body: 'FDX operates under registrations and licences across 10+ jurisdictions, with annual SOC 1 Type 2 and SOC 2 examinations.',
  },
]

const STEPS = [
  { n: '01', title: 'Create your account', body: 'Sign up with an email address. Takes about a minute.' },
  { n: '02', title: 'Verify your identity', body: 'A short photo-ID check unlocks full limits and withdrawals.' },
  { n: '03', title: 'Fund your account', body: 'Bank transfer, card, or on-chain deposit. No funding fees.' },
  { n: '04', title: 'Start trading', body: 'Simple mode for quick orders. Pro mode for full depth.' },
]

const SERVICES = [
  {
    icon: 'candles',
    title: 'Spot',
    body: '500+ pairs with institutional depth, tight spreads, and 10 ms settlement.',
    meta: 'Maker from 0.00%',
  },
  {
    icon: 'trend',
    title: 'Derivatives',
    body: 'Perpetuals, dated futures, and options with unified portfolio margin.',
    meta: 'Up to 125×',
  },
  {
    icon: 'coins',
    title: 'Earn',
    body: 'Flexible and fixed-term yield on major assets, with published reserve backing.',
    meta: 'Up to 12% APY',
  },
  {
    icon: 'bot',
    title: 'Automated strategies',
    body: 'Grid, DCA, and arbitrage engines that run without supervision.',
    meta: '24/7 execution',
  },
  {
    icon: 'users',
    title: 'Copy trading',
    body: 'Follow vetted lead traders with position mirroring and hard risk caps.',
    meta: 'Risk-capped',
  },
  {
    icon: 'card',
    title: 'Card & payments',
    body: 'Spend balances anywhere, and accept crypto as a business with same-day settlement.',
    meta: '30+ coins accepted',
  },
  {
    icon: 'rocket',
    title: 'Ventures',
    body: 'Early-stage web3 investments, with selective allocation for eligible clients.',
    meta: 'Private markets',
  },
  {
    icon: 'lock',
    title: 'Custody',
    body: 'Qualified custody with segregated wallets, governance controls, and insurance.',
    meta: '$750M coverage',
  },
]

const CLIENTS = [
  {
    id: 'individuals',
    icon: 'user',
    title: 'Individuals',
    body: 'A complete personal trading account: spot, earn, card, and automated strategies under one login and one balance.',
    points: ['Simple and Pro trading modes', 'FDX Card with 2% rewards', 'Learn & Earn programmes'],
  },
  {
    id: 'businesses',
    icon: 'briefcase',
    title: 'Businesses',
    body: 'Payments, treasury, and liquidity for companies moving value on-chain — with named support and same-day fiat rails.',
    points: ['FDX Pay merchant gateway', 'OTC desk and treasury tools', 'Dedicated account manager'],
  },
  {
    id: 'institutions',
    icon: 'landmark',
    title: 'Institutions',
    body: 'Prime brokerage, qualified custody, and connectivity built for funds, market makers, and corporate desks.',
    points: ['FDX Prime brokerage', 'Segregated cold custody', 'FIX/API and co-location'],
    accent: true,
  },
]

const MARKETS = [
  { name: 'Bitcoin', sym: 'BTC', price: '97,412.50', vol: '28.4B', change: 1.84 },
  { name: 'Ethereum', sym: 'ETH', price: '3,588.10', vol: '14.1B', change: 2.37 },
  { name: 'Solana', sym: 'SOL', price: '184.22', vol: '5.2B', change: -0.62 },
  { name: 'XRP', sym: 'XRP', price: '2.4105', vol: '4.8B', change: 3.15 },
  { name: 'BNB', sym: 'BNB', price: '712.80', vol: '2.6B', change: 0.94 },
  { name: 'First Digital', sym: 'FDX', price: '4.8630', vol: '1.9B', change: 5.28 },
  { name: 'Cardano', sym: 'ADA', price: '0.9142', vol: '1.4B', change: 2.02 },
  { name: 'Chainlink', sym: 'LINK', price: '21.85', vol: '1.1B', change: 4.06 },
]

const PRO_FEATURES = [
  {
    icon: 'layers',
    title: 'Complete order types',
    body: 'Market, limit, stop-limit, OCO, and auction orders. All available from the same balance you already hold.',
  },
  {
    icon: 'activity',
    title: 'Institutional charting',
    body: 'TradingView-powered charts with EMA, MACD, RSI, and Bollinger overlays, plus depth and time-of-sale panels.',
  },
  {
    icon: 'link',
    title: 'One unified balance',
    body: 'Simple and Pro share a single balance and statement. Move between them without transfers or reconciliation.',
  },
]

const ONE_PERKS = [
  'Zero trading fees across all spot pairs',
  'Boosted Earn rates on flexible terms',
  'Priority support with 15-minute response target',
  'Fee-free fiat withdrawals',
  'Early access to Ventures allocations',
  'FDX Metal Card included',
]

const FEES = [
  { tier: 'Tier 0', range: '< $10K', maker: '0.08%', taker: '0.10%' },
  { tier: 'Tier 1', range: '$10K – $50K', maker: '0.06%', taker: '0.08%' },
  { tier: 'Tier 2', range: '$50K – $100K', maker: '0.04%', taker: '0.06%' },
  { tier: 'Tier 3', range: '> $100K', maker: '0.02%', taker: '0.04%' },
]

const FAQS = [
  {
    q: 'What services does FDX provide?',
    a: 'FDX is a tier-one digital asset platform. Clients trade spot, derivatives, and automated strategies; earn yield on major assets; and access payments, custody, and venture allocations. Retail, business, and institutional clients share the same liquidity and the same engine.',
  },
  {
    q: 'How do I buy cryptocurrency on FDX?',
    a: 'Open an account, complete a short identity check, and fund by bank transfer, card, or on-chain deposit. Orders execute in Simple mode for speed, or Pro mode if you need limit types, charting, and order books.',
  },
  {
    q: 'How are client assets protected?',
    a: 'Client assets are held one-to-one and never lent or rehypothecated. 97% of funds sit in geographically distributed cold storage. Reserves are attested monthly through Merkle-tree proofs, and a dedicated corporate reserve covers platform-level events.',
  },
  {
    q: 'What does FDX One include?',
    a: 'FDX One is an optional membership that removes spot trading fees entirely, raises Earn rates, waives fiat withdrawal charges, and adds a priority support line with a 15-minute response target.',
  },
  {
    q: 'Does FDX work with institutions?',
    a: 'Yes. FDX Prime provides deep liquidity, portfolio margin, FIX/API and co-location connectivity, and settlement in fiat or stablecoin. Qualified custody is available separately with segregated wallets and $750M of insurance coverage.',
  },
]

const FOOTER_COLS = [
  { title: 'Services', links: ['Spot', 'Derivatives', 'Earn', 'Automated strategies', 'Copy trading', 'Custody'] },
  { title: 'Company', links: ['About', 'Careers', 'Newsroom', 'Ventures', 'Research'] },
  { title: 'Resources', links: ['Help centre', 'API documentation', 'System status', 'Proof of Reserves', 'Contact'] },
  { title: 'Legal', links: ['Terms of service', 'Privacy policy', 'Risk disclosure', 'Licences & registrations'] },
]

/* ------------------------------- components ------------------------------- */

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setMenuOpen(false)}>
          <span className="nav__mark"><Icon name="diamond" size={14} strokeWidth={2} /></span>
          FDX
        </a>

        <nav className={`nav__links ${menuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="nav-login" href="#top">Log in</a>
          <a className="btn btn--accent" href="#cta">Get started</a>
          <button
            className="nav__burger"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}

function Ticker() {
  const row = [...TICKER, ...TICKER]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {row.map((coin, i) => (
          <span className="ticker__item" key={`${coin.sym}-${i}`}>
            <strong>{coin.sym.split('/')[0]}</strong>
            <span className="num">{coin.price}</span>
            <span className={`num ${coin.change >= 0 ? 'up' : 'down'}`}>
              {coin.change >= 0 ? '▲' : '▼'} {Math.abs(coin.change).toFixed(2)}%
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__copy">
          <h1>
            Digital asset markets,<br />executed with precision
          </h1>
          <p className="hero__sub">
            FDX is a tier-one digital asset exchange. Institutions and individuals trade the same
            order books, on the same engine, under the same regulatory standard — with fees
            from 0.00%.
          </p>
          <div className="hero__cta">
            <a className="btn btn--accent btn--lg" href="#cta">Open an account</a>
            <a className="btn btn--quiet btn--lg" href="#services">View services</a>
          </div>
        </div>

        <aside className="hero__board" aria-label="Market summary">
          <div className="board__head">
            <span>BTC / USDT</span>
            <span className="num up">+1.84%</span>
          </div>
          <div className="board__price num">97,412.50 <small>USDT</small></div>
          <svg className="board__spark" viewBox="0 0 240 64" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M0 52 L24 45 L48 49 L72 36 L96 40 L120 27 L144 31 L168 20 L192 25 L216 13 L240 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
          <dl className="board__rows">
            {TICKER.slice(0, 4).map((coin) => (
              <div className="board__row" key={coin.sym}>
                <dt>{coin.sym}</dt>
                <dd className="num">{coin.price}</dd>
                <dd className={`num ${coin.change >= 0 ? 'up' : 'down'}`}>
                  {coin.change >= 0 ? '+' : ''}{coin.change.toFixed(2)}%
                </dd>
              </div>
            ))}
          </dl>
          <a className="board__foot" href="#markets">All markets →</a>
        </aside>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats">
      <div className="stats__grid">
        {STATS.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong className="num">{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Security() {
  return (
    <section className="security section" id="security">
      <div className="security__grid">
        <div className="security__intro">
          <p className="kicker">Security &amp; compliance</p>
          <h2>Custody you can verify, not just trust</h2>
          <p className="lede">
            Every control below is externally examined and published. FDX treats client assets as
            client assets — held one-to-one, never lent, never traded against.
          </p>
          <a className="text-link" href="#faq">Read our attestations →</a>
        </div>
        <div className="security__cards">
          {TRUST_ITEMS.map((item) => (
            <article className="s-card" key={item.title}>
              <span className="s-card__icon"><Icon name={item.icon} /></span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Steps() {
  return (
    <section className="steps section" id="steps">
      <div className="steps__grid">
        {STEPS.map((step) => (
          <div className="step" key={step.n}>
            <span className="step__num num">{step.n}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        ))}
      </div>
      <div className="steps__foot">
        <a className="btn btn--accent btn--lg" href="#cta">Create your account</a>
        <span className="steps__note">No minimum deposit. No funding fees.</span>
      </div>
    </section>
  )
}

function Markets() {
  return (
    <section className="markets section" id="markets">
      <div className="markets__bar">
        <div>
          <p className="kicker">Markets</p>
          <h2>Top markets today</h2>
        </div>
        <a className="text-link" href="#cta">All 500+ markets →</a>
      </div>
      <div className="table-wrap">
        <table className="mtable">
          <thead>
            <tr>
              <th scope="col">Pair</th>
              <th scope="col" className="num">Price</th>
              <th scope="col" className="num">24h</th>
              <th scope="col" className="num">Volume (24h)</th>
              <th scope="col" className="num"><span className="visually-hidden">Trade</span></th>
            </tr>
          </thead>
          <tbody>
            {MARKETS.map((coin) => (
              <tr key={coin.sym}>
                <td>
                  <span className="mtable__pair">
                    <strong>{coin.sym}<span className="mtable__quote">/USDT</span></strong>
                    <span className="mtable__name">{coin.name}</span>
                  </span>
                </td>
                <td className="num">${coin.price}</td>
                <td className={`num ${coin.change >= 0 ? 'up' : 'down'}`}>
                  {coin.change >= 0 ? '+' : ''}{coin.change.toFixed(2)}%
                </td>
                <td className="num">{coin.vol}</td>
                <td className="num"><a className="mtable__buy" href="#cta">Buy</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="fineprint">
        Data shown is illustrative. Cryptocurrency is volatile and can move against you.
        Never trade more than you can afford to lose.
      </p>
    </section>
  )
}

function Services() {
  return (
    <section className="services section section--muted" id="services">
      <div className="services__bar">
        <div>
          <p className="kicker">Services</p>
          <h2>The full stack, one account</h2>
        </div>
        <p className="services__lede">
          From a first order to a prime brokerage relationship, every FDX service runs on the
          same balance, the same engine, and the same statement.
        </p>
      </div>
      <div className="services__grid">
        {SERVICES.map((service) => (
          <article className="svc" key={service.title}>
            <span className="svc__icon"><Icon name={service.icon} /></span>
            <h3>{service.title}</h3>
            <p>{service.body}</p>
            <span className="svc__meta">{service.meta}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function Clients() {
  return (
    <section className="clients section" id="clients">
      <div className="clients__intro">
        <p className="kicker">Clients</p>
        <h2>Built for every scale of participant</h2>
        <p className="lede">
          Three client classes, one platform. Requirements differ; liquidity doesn&apos;t.
        </p>
      </div>
      <div className="clients__grid">
        {CLIENTS.map((seg) => (
          <article className={`client ${seg.accent ? 'client--accent' : ''}`} key={seg.id}>
            <span className="client__icon"><Icon name={seg.icon} /></span>
            <h3>{seg.title}</h3>
            <p>{seg.body}</p>
            <ul className="client__list">
              {seg.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a className="text-link" href="#cta">
              {seg.accent ? 'Speak to the institutional desk →' : 'Open an account →'}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function Pro() {
  return (
    <section className="pro section section--muted" id="pro">
      <div className="pro__grid">
        <div className="pro__intro">
          <p className="kicker">FDX Pro</p>
          <h2>Terminal-grade trading, no separate account</h2>
          <p className="lede">
            Pro mode adds the order types, charting, and depth of a professional terminal — on
            the balance you already hold. Volume pricing applies automatically.
          </p>
          <a className="btn btn--dark" href="#cta">Explore FDX Pro</a>
        </div>
        <div className="pro__cards">
          {PRO_FEATURES.map((feature) => (
            <article className="p-card" key={feature.title}>
              <span className="p-card__icon"><Icon name={feature.icon} /></span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function One() {
  return (
    <section className="one section" id="one">
      <div className="one__inner">
        <div className="one__head">
          <p className="kicker">FDX One</p>
          <h2>A membership for active clients</h2>
          <p className="lede">
            One flat monthly price that removes trading fees and upgrades every part of the
            platform. Most active clients recover the cost within their first week.
          </p>
          <a className="btn btn--accent" href="#cta">Start 30-day trial</a>
        </div>
        <ul className="one__list">
          {ONE_PERKS.map((perk) => (
            <li key={perk}><Icon name="check" size={15} strokeWidth={2.2} /> {perk}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Fees() {
  return (
    <section className="fees section" id="fees">
      <div className="fees__bar">
        <div>
          <p className="kicker">Fees</p>
          <h2>Priced for volume</h2>
        </div>
        <p className="fees__lede">
          Tiers reprice automatically against 30-day volume. Deposits are always free.
        </p>
      </div>
      <div className="table-wrap table-wrap--narrow">
        <table className="mtable">
          <thead>
            <tr>
              <th scope="col">Tier</th>
              <th scope="col" className="num">30-day volume</th>
              <th scope="col" className="num">Maker</th>
              <th scope="col" className="num">Taker</th>
            </tr>
          </thead>
          <tbody>
            {FEES.map((fee) => (
              <tr key={fee.tier}>
                <td><strong>{fee.tier}</strong></td>
                <td className="num">{fee.range}</td>
                <td className="num strong">{fee.maker}</td>
                <td className="num">{fee.taker}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq section" id="faq">
      <div className="faq__cols">
        <div className="faq__intro">
          <p className="kicker">Support</p>
          <h2>Frequently asked questions</h2>
          <p className="lede">
            Can&apos;t find what you need? Our support team responds around the clock,
            every day of the year.
          </p>
        </div>
        <div className="faq__list">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={item.q}>
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq__mark" aria-hidden="true">{isOpen ? '—' : '+'}</span>
                </button>
                {isOpen && <p className="faq__a">{item.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Cta() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section className="cta" id="cta">
      <div className="cta__inner">
        <h2>Open your FDX account</h2>
        <p>
          Verification takes minutes. Trading starts immediately. Up to $100 in welcome credit
          on your first deposit.
        </p>
        {submitted ? (
          <p className="cta__done">Check your inbox to confirm <strong>{email}</strong>.</p>
        ) : (
          <form className="cta__form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-label="Email address"
            />
            <button className="btn btn--accent" type="submit">Get started</button>
          </form>
        )}
        <p className="fineprint">
          Services vary by jurisdiction. Cryptocurrency is volatile; capital is at risk.
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <span className="nav__mark"><Icon name="diamond" size={14} strokeWidth={2} /></span>
          <div>
            <strong>FDX</strong>
            <p>
              First Digital Exchange. A tier-one digital asset platform for individuals,
              businesses, and institutions.
            </p>
          </div>
        </div>
        <nav className="footer__cols">
          {FOOTER_COLS.map((col) => (
            <div className="footer__col" key={col.title}>
              <h4>{col.title}</h4>
              {col.links.map((link) => (
                <a href="#top" key={link}>{link}</a>
              ))}
            </div>
          ))}
        </nav>
      </div>
      <div className="footer__legal">
        <span>© 2026 First Digital Exchange. All rights reserved.</span>
        <div className="footer__regs">
          <span><Icon name="doc" size={13} strokeWidth={2} /> SOC 1 Type 2 &amp; SOC 2 examined</span>
          <span><Icon name="scale" size={13} strokeWidth={2} /> Registered in 10+ jurisdictions</span>
          <span><Icon name="globe" size={13} strokeWidth={2} /> Reserves attested monthly</span>
        </div>
      </div>
    </footer>
  )
}

/* ---------------------------------- page ---------------------------------- */

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Ticker />
        <Services />
        <Clients />
        <Pro />
        <Security />
        <One />
        <Steps />
        <Markets />
        <Fees />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
