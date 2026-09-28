export const NAV = [
  {
    label: 'Buy Crypto',
    type: 'list',
    header: { label: 'Pay with', value: 'USD' },
    items: [
      { icon: 'card', title: 'Buy & Sell', body: 'Buy crypto instantly with card, Apple Pay or Google Pay' },
      { icon: 'repeat', title: 'Recurring Buy', body: 'Buy crypto automatically at regular intervals', badge: 'New' },
      { icon: 'users', title: 'P2P Trading', body: 'Buy from verified merchants in 100+ currencies' },
      { icon: 'bank', title: 'Bank Deposit', body: 'Top up your fiat balance via bank transfer', badge: 'Hot' },
      { icon: 'swap', title: 'Convert', body: 'Swap between 750+ assets with zero fees' },
      { icon: 'wallet', title: 'FDX Card', body: 'Spend crypto anywhere Visa is accepted' },
    ],
  },
  { label: 'Markets', href: '#markets' },
  {
    label: 'Trade',
    type: 'split',
    market: 'spot',
    groups: [
      {
        title: 'Basic',
        items: [
          { icon: 'candles', title: 'Spot', body: 'Trade spot with advanced tools and deep liquidity', arrow: true },
          { icon: 'layers', title: 'Margin', body: 'Amplify your capital with up to 10× leverage' },
          { icon: 'swap', title: 'Convert & Block Trade', body: 'The easiest way to trade at any size' },
          { icon: 'play', title: 'Demo Trading', body: 'Practise with virtual funds and zero risk' },
        ],
      },
      {
        title: 'Advanced',
        items: [
          { icon: 'users', title: 'Copy Trading', body: 'Follow the most popular lead traders', badge: 'Hot' },
          { icon: 'bot', title: 'Trading Bots', body: 'Grid, DCA and arbitrage — fast and reliable' },
          { icon: 'rocket', title: 'Launchhub', body: 'Get early access to new token launches', badge: 'New' },
          { icon: 'api', title: 'APIs', body: 'REST, WebSocket and FIX connectivity' },
        ],
      },
    ],
  },
  {
    label: 'Futures',
    type: 'split',
    market: 'futures',
    groups: [
      {
        title: 'Trade',
        items: [
          { icon: 'trend', title: 'USDT-M Futures', body: 'Perpetual contracts settled in USDT', arrow: true },
          { icon: 'coins', title: 'USDC-M Futures', body: 'Perpetual contracts settled in USDC' },
          { icon: 'layers', title: 'Coin-M Futures', body: 'Contracts settled in cryptocurrencies' },
          { icon: 'chart', title: 'Options', body: 'European-style BTC and ETH options' },
        ],
      },
      {
        title: 'Explore',
        items: [
          { icon: 'book', title: 'Futures Guide', body: 'A beginner-to-advanced path into futures' },
          { icon: 'gift', title: 'Futures Promotions', body: 'Competitions, rebates and generous rewards' },
          { icon: 'play', title: 'Demo Trading', body: 'Trade futures with zero funding risk' },
        ],
      },
    ],
  },
  {
    label: 'TradFi',
    badge: 'New',
    type: 'columns',
    columns: [
      {
        title: 'Stocks',
        items: [
          { icon: 'building', title: 'Tokenized Stocks', body: 'Trade US stocks and ETFs 24/7 with USDT' },
          { icon: 'trend', title: 'Stock Futures', body: 'Perpetuals on leading global equities' },
          { icon: 'briefcase', title: 'Stock Investing', body: 'An all-in-one hub for smarter investing' },
          { icon: 'star', title: 'Stock Picks', body: 'Trending names, livestreams and updates' },
        ],
      },
      {
        title: 'CFD',
        items: [
          { icon: 'chart', title: 'CFD Trading', body: 'Gold, forex, indices and commodities', badge: 'Hot' },
          { icon: 'users', title: 'CFD Copy Trading', body: 'Copy professional TradFi strategies' },
          { icon: 'globe', title: 'Discover CFD', body: 'Learn the basics of TradFi markets' },
        ],
      },
    ],
  },
  {
    label: 'FDX Securities',
    type: 'columns',
    align: 'center',
    columns: [
      {
        title: 'Invest',
        items: [
          { icon: 'bank', title: 'Tokenized Treasuries', body: 'On-chain US T-bill funds with daily yield' },
          { icon: 'coins', title: 'Money Market Funds', body: 'Tokenized shares of institutional-grade MMFs' },
          { icon: 'percent', title: 'Private Credit', body: 'Senior secured lending with fixed income' },
          { icon: 'briefcase', title: 'Private Markets', body: 'Access private equity and venture funds' },
        ],
      },
      {
        title: 'Issue & Services',
        items: [
          { icon: 'layers', title: 'Tokenize Assets', body: 'Issue compliant digital securities end to end', arrow: true },
          { icon: 'doc', title: 'Digital Transfer Agent', body: 'On-chain cap tables and corporate actions' },
          { icon: 'swap', title: 'Secondary Market', body: 'Trade digital securities on a regulated venue' },
          { icon: 'fingerprint', title: 'Investor Onboarding', body: 'One KYC and accreditation check for every offering' },
        ],
      },
    ],
    featured: {
      title: 'Featured offerings',
      items: [
        { ticker: 'UST', name: 'US Treasury Fund', meta: 'Min $1,000 · Daily liquidity', yield: '4.82%' },
        { ticker: 'MMF', name: 'Money Market Fund', meta: 'Min $5,000 · Same-day', yield: '4.61%' },
        { ticker: 'PCF', name: 'Asia Private Credit', meta: 'Min $25,000 · Quarterly', yield: '9.40%' },
      ],
      note: 'Regulated offerings for eligible investors',
      cta: 'Explore FDX Securities',
    },
  },
  {
    label: 'Earn',
    type: 'list',
    items: [
      { icon: 'sparkle', title: 'Overview', body: 'A variety of products to grow your assets' },
      { icon: 'coins', title: 'Simple Earn', body: 'Flexible savings — deposit and redeem anytime' },
      { icon: 'lock', title: 'On-chain Earn', body: 'Stake ETH, SOL, SUI and more for daily rewards', arrow: true },
      { icon: 'layers', title: 'Structured Earn', body: 'Dual Investment and Shark Fin for any market', arrow: true },
      { icon: 'rocket', title: 'Launchpool', body: 'Stake to farm new tokens before listing', badge: 'Hot' },
      { icon: 'badge', title: 'VIP Wealth Management', body: 'Premium services for smart wealth management', arrow: true },
      { icon: 'percent', title: 'Loans', body: 'Flexible borrowing with high fund security' },
    ],
  },
  {
    label: 'Square',
    type: 'list',
    items: [
      { icon: 'message', title: 'Square', body: 'Stay informed with everything crypto' },
      { icon: 'news', title: 'News', body: 'Market-moving headlines in real time' },
      { icon: 'live', title: 'Live', body: 'Livestreams and AMAs with top traders' },
      { icon: 'book', title: 'Academy', body: 'Free crypto and trading education' },
      { icon: 'doc', title: 'Research', body: 'Institutional-grade analysis and insights' },
    ],
  },
  {
    label: 'Institutional',
    type: 'list',
    items: [
      { icon: 'badge', title: 'VIP & Institutional', body: 'Your trusted platform for VIPs and institutions', href: '#institutional' },
      { icon: 'swap', title: 'OTC & Execution Services', body: 'Trade blocks with deep, private liquidity' },
      { icon: 'building', title: 'Prime Services', body: 'Cross-margin, credit and tri-party settlement' },
      { icon: 'lock', title: 'Asset Custody', body: 'Qualified custody with segregated wallets' },
      { icon: 'briefcase', title: 'Broker Program', body: 'Offer FDX liquidity to your own clients' },
      { icon: 'api', title: 'Crypto-as-a-Service', body: 'Launch crypto products on FDX infrastructure' },
    ],
  },
  {
    label: 'AI & More',
    type: 'columns',
    compact: true,
    align: 'right',
    columns: [
      {
        title: 'AI',
        items: [
          { icon: 'sparkle', title: 'FDX AI Assistant', badge: 'New' },
          { icon: 'cpu', title: 'AI Strategy Builder' },
          { icon: 'chart', title: 'AI Market Signals' },
          { icon: 'bot', title: 'Agent Hub' },
          { icon: 'chart', title: 'Trade with TradingView' },
        ],
      },
      {
        title: 'Rewards',
        items: [
          { icon: 'gift', title: 'Rewards Hub', badge: 'Hot' },
          { icon: 'users', title: 'Referral' },
          { icon: 'percent', title: 'Affiliate' },
          { icon: 'badge', title: 'VIP Program' },
          { icon: 'rocket', title: 'Megadrop' },
        ],
      },
      {
        title: 'Ecosystem',
        items: [
          { icon: 'wallet', title: 'FDX Wallet' },
          { icon: 'card', title: 'FDX Pay' },
          { icon: 'coins', title: 'FDX Token' },
          { icon: 'layers', title: 'Mining Pool' },
          { icon: 'star', title: 'Charity' },
        ],
      },
      {
        title: 'Support',
        items: [
          { icon: 'headset', title: 'Help Center' },
          { icon: 'bell', title: 'Announcements' },
          { icon: 'shield', title: 'Proof of Reserves', href: '#security' },
          { icon: 'doc', title: 'Fees' },
          { icon: 'message', title: 'Submit Feedback' },
        ],
      },
    ],
  },
]

export const LANGUAGES = ['English', 'Español', 'Français', 'Deutsch', 'Português', 'Türkçe', 'Tiếng Việt', 'Русский', '日本語', '한국어', '简体中文', 'العربية']

export const CURRENCIES = ['USD', 'EUR', 'GBP', 'NGN', 'TRY', 'BRL', 'JPY', 'INR']

export const menuItems = (menu) =>
  menu.items ?? (menu.groups ?? menu.columns ?? []).flatMap((g) => g.items)
