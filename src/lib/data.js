export const COINS = [
  { sym: 'BTC', name: 'Bitcoin', price: 112480.5, change: 2.14, vol: 41.2e9, cap: 2.23e12, color: '#F7931A', tags: ['hot'] },
  { sym: 'ETH', name: 'Ethereum', price: 4218.36, change: 3.08, vol: 22.6e9, cap: 508e9, color: '#627EEA', tags: ['hot'] },
  { sym: 'FDX', name: 'FDX Token', price: 6.4172, change: 8.46, vol: 2.9e9, cap: 6.4e9, color: '#38BDF8', tags: ['hot', 'new'] },
  { sym: 'SOL', name: 'Solana', price: 238.91, change: -1.27, vol: 7.4e9, cap: 118e9, color: '#9945FF', tags: ['hot'] },
  { sym: 'BNB', name: 'BNB', price: 868.4, change: 0.82, vol: 2.1e9, cap: 126e9, color: '#F3BA2F', tags: [] },
  { sym: 'XRP', name: 'XRP', price: 3.0418, change: 4.51, vol: 6.3e9, cap: 181e9, color: '#9AA8B8', tags: ['hot'] },
  { sym: 'DOGE', name: 'Dogecoin', price: 0.26814, change: -2.93, vol: 2.4e9, cap: 40e9, color: '#C2A633', tags: [] },
  { sym: 'TON', name: 'Toncoin', price: 3.482, change: 1.66, vol: 0.41e9, cap: 8.8e9, color: '#0098EA', tags: [] },
  { sym: 'SUI', name: 'Sui', price: 3.9127, change: 6.72, vol: 1.8e9, cap: 13.6e9, color: '#4DA2FF', tags: ['new'] },
  { sym: 'LINK', name: 'Chainlink', price: 23.64, change: -0.48, vol: 1.2e9, cap: 16e9, color: '#2A5ADA', tags: [] },
  { sym: 'PEPE', name: 'Pepe', price: 0.00001142, change: 11.37, vol: 1.6e9, cap: 4.8e9, color: '#3D9A36', tags: ['new'] },
  { sym: 'HYPE', name: 'Hyperliquid', price: 47.28, change: -4.12, vol: 0.92e9, cap: 15.8e9, color: '#97FCE4', tags: ['new'] },
]

export const TRUST_STATS = [
  { value: '42M+', label: 'Registered users' },
  { value: '$28.6B', label: 'Average daily volume' },
  { value: '750+', label: 'Listed assets' },
  { value: '138%', label: 'Proof of Reserves ratio' },
]

export const CERTIFICATIONS = ['ISO/IEC 27001', 'SOC 2 Type II', 'CCSS Level III', 'PCI DSS', 'GDPR']

export const EARN_PRODUCTS = [
  { sym: 'USDT', name: 'Tether', color: '#26A17B', apr: 8.2, term: 'Flexible' },
  { sym: 'FDX', name: 'FDX Token', color: '#3BA9F5', apr: 18.0, term: '30 days' },
  { sym: 'SOL', name: 'Solana', color: '#9945FF', apr: 7.35, term: 'Flexible' },
  { sym: 'ETH', name: 'Ethereum', color: '#627EEA', apr: 4.1, term: 'Staking' },
  { sym: 'BTC', name: 'Bitcoin', color: '#F7931A', apr: 2.5, term: '60 days' },
]

export const MORE_PRODUCTS = [
  { icon: 'bot', title: 'Trading bots', body: 'Grid, DCA and arbitrage strategies that execute around the clock.' },
  { icon: 'swap', title: 'P2P marketplace', body: 'Buy and sell with 100+ local currencies and zero platform fees.' },
  { icon: 'rocket', title: 'Launchpad', body: 'Early, vetted access to new token launches before public listing.' },
  { icon: 'card', title: 'FDX Card', body: 'Spend your balance anywhere Visa is accepted, with up to 8% back.' },
  { icon: 'layers', title: 'Options', body: 'European-style BTC and ETH options with portfolio margin.' },
  { icon: 'api', title: 'API trading', body: 'REST, WebSocket and FIX connectivity with sub-millisecond latency.' },
]

export const TRADERS = [
  { name: 'NorthStarQuant', handle: 'Quant · Futures', roi: 386.42, pnl: 1284310, win: 78.4, followers: 4812, aum: 12.6e6, color: '#38BDF8', seed: 3 },
  { name: 'Aurora_Alpha', handle: 'Swing · Spot', roi: 214.18, pnl: 642880, win: 71.2, followers: 3290, aum: 6.1e6, color: '#FFB020', seed: 7 },
  { name: 'DeltaNeutral', handle: 'Arbitrage · Futures', roi: 142.9, pnl: 918450, win: 88.1, followers: 6104, aum: 21.4e6, color: '#16C784', seed: 11 },
  { name: 'Satoshi_Sensei', handle: 'Trend · Futures', roi: 97.36, pnl: 301270, win: 64.8, followers: 2157, aum: 3.2e6, color: '#A78BFA', seed: 19 },
]

export const RESERVES = [
  { sym: 'BTC', ratio: 142, user: '612,408 BTC', held: '869,619 BTC' },
  { sym: 'ETH', ratio: 131, user: '3.84M ETH', held: '5.03M ETH' },
  { sym: 'USDT', ratio: 112, user: '18.2B USDT', held: '20.4B USDT' },
  { sym: 'USDC', ratio: 108, user: '4.6B USDC', held: '4.97B USDC' },
]

export const SECURITY_POINTS = [
  { icon: 'shield', title: '$1B Protection Fund', body: 'A dedicated reserve that safeguards user assets against extreme events. Wallet address published on-chain.' },
  { icon: 'lock', title: '95% cold storage', body: 'The vast majority of assets sit in geographically distributed, multi-signature cold wallets.' },
  { icon: 'fingerprint', title: 'Account protection', body: 'Passkeys, 2FA, anti-phishing codes, withdrawal whitelists and real-time risk monitoring.' },
  { icon: 'badge', title: 'Licensed & audited', body: 'Registered in 20+ jurisdictions. ISO 27001, SOC 2 Type II, and CCSS Level 3 certified.' },
]

export const INSTITUTIONAL = [
  { icon: 'building', title: 'FDX Prime', body: 'Unified prime brokerage with cross-margin, credit lines and tri-party settlement.' },
  { icon: 'swap', title: 'OTC Desk', body: 'Block trades of $100K+ with RFQ pricing, zero slippage and 24/7 coverage.' },
  { icon: 'api', title: 'API & Co-location', body: 'REST, WebSocket and FIX 4.4 connectivity with sub-millisecond co-located access.' },
  { icon: 'lock', title: 'Custody', body: 'Qualified custody with segregated wallets, policy engine and insurance.' },
]

export const VIP_TIERS = [
  { tier: 'Regular', vol: '< $1M', holding: '—', maker: '0.080%', taker: '0.100%' },
  { tier: 'VIP 1', vol: '≥ $1M', holding: '≥ 500 FDX', maker: '0.060%', taker: '0.080%' },
  { tier: 'VIP 3', vol: '≥ $25M', holding: '≥ 5,000 FDX', maker: '0.030%', taker: '0.050%' },
  { tier: 'VIP 5', vol: '≥ $250M', holding: '≥ 25,000 FDX', maker: '0.000%', taker: '0.030%' },
  { tier: 'VIP 9', vol: '≥ $4B', holding: '≥ 150,000 FDX', maker: '-0.010%', taker: '0.015%' },
]

export const FAQS = [
  {
    q: 'What is FDX?',
    a: 'FDX is a global cryptocurrency exchange offering spot, futures, copy trading, bots, earn products and institutional services. Retail and institutional clients trade on the same high-performance matching engine and share the same deep liquidity.',
  },
  {
    q: 'How do I buy crypto on FDX?',
    a: 'Create an account, complete identity verification, then buy instantly with a debit or credit card, bank transfer, Apple Pay, Google Pay or through the P2P marketplace. You can also deposit crypto from another wallet.',
  },
  {
    q: 'Are my funds safe on FDX?',
    a: 'Customer assets are held 1:1 and verified monthly through Merkle-tree Proof of Reserves. 95% of funds are kept in multi-sig cold storage, and a $1B Protection Fund covers extreme events.',
  },
  {
    q: 'What are the trading fees?',
    a: 'Spot trading starts at 0.08% maker / 0.10% taker and falls with your 30-day volume or FDX holdings. Holding FDX and paying fees with it gives an additional 25% discount.',
  },
  {
    q: 'How does the welcome bonus work?',
    a: 'New users can unlock up to 5,000 USDT in rewards by completing tasks such as verification, first deposit and first trade. Rewards are issued as trading vouchers and are subject to the campaign terms.',
  },
  {
    q: 'Does FDX offer services for institutions?',
    a: 'Yes. FDX Institutional provides prime brokerage, an OTC desk, co-located API access, qualified custody and dedicated account managers for funds, market makers and corporates.',
  },
]

export const FOOTER_COLS = [
  { title: 'About', links: ['About FDX', 'Careers', 'Announcements', 'Newsroom', 'Proof of Reserves', 'Protection Fund'] },
  { title: 'Products', links: ['Buy Crypto', 'Spot', 'Futures', 'Earn', 'Copy Trading', 'Trading Bots', 'P2P'] },
  { title: 'Services', links: ['VIP Program', 'Institutional', 'OTC Desk', 'API', 'Affiliate', 'Referral'] },
  { title: 'Support', links: ['Help Center', 'Submit a Request', 'Fees', 'Trading Rules', 'Listing Application', 'System Status'] },
  { title: 'Learn', links: ['FDX Academy', 'Crypto Prices', 'Market Updates', 'Research', 'Glossary'] },
]
