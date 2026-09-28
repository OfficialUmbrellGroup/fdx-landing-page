# FDX Landing Page

Marketing landing page for the FDX crypto exchange, built with React + Vite. Layout and section patterns follow tier-one exchanges (Binance, Bybit, OKX, Coinbase, Bitget).

## Scripts

```bash
bun install      # or npm install
bun run dev      # start the dev server
bun run build    # production build to dist/
bun run lint
```

## Structure

- `src/sections/` — one component per page section: navbar, hero, ticker, trust bar, markets, product features (trade / earn / copy trading), security, institutional & VIP, FAQ, app download, CTA, footer
- `src/components/` — shared UI: icons, coin logos, sparklines, area chart, trading terminal mock, logo, signup form
- `src/hooks/useLiveMarkets.js` — simulated real-time price feed shared across the page
- `src/lib/data.js` — all page copy and figures
- `src/lib/nav.js` — header menus (Buy Crypto, Trade, Futures, TradFi, Earn, Square, Institutional, AI & More), languages and currencies
- `src/index.css` — design tokens. Sections are light by default; add the `dark` class to switch a section to the navy theme. Sky blue is the action colour, muted gold the accent. Typography is Geist for headings and Inter for body, both self-hosted via Fontsource
- Coin logos come from `@web3icons/core`; FDX and HYPE use custom fallbacks in `src/components/CoinIcon.jsx`
- `src/App.css` — component styles

Prices and figures are illustrative. To go live, replace `useLiveMarkets` with a WebSocket market-data feed.
