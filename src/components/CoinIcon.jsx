import BNB from '@web3icons/core/svgs/tokens/background/BNB.svg.js'
import BTC from '@web3icons/core/svgs/tokens/background/BTC.svg.js'
import DOGE from '@web3icons/core/svgs/tokens/background/DOGE.svg.js'
import ETH from '@web3icons/core/svgs/tokens/background/ETH.svg.js'
import LINK from '@web3icons/core/svgs/tokens/background/LINK.svg.js'
import PEPE from '@web3icons/core/svgs/tokens/background/PEPE.svg.js'
import SOL from '@web3icons/core/svgs/tokens/background/SOL.svg.js'
import SUI from '@web3icons/core/svgs/tokens/background/SUI.svg.js'
import XRP from '@web3icons/core/svgs/tokens/background/XRP.svg.js'
import USDT from '@web3icons/core/svgs/tokens/background/USDT.svg.js'
import TON from '@web3icons/core/svgs/networks/background/ton.svg.js'
import { FDX_MARK_PATHS } from './fdxMark'

const toSrc = (svg) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

const ICONS = Object.fromEntries(
  Object.entries({ BTC, ETH, SOL, BNB, XRP, DOGE, TON, SUI, LINK, PEPE, USDT }).map(([sym, svg]) => [sym, toSrc(svg)]),
)

function Fallback({ sym, color, size }) {
  return (
    <svg className="coin-icon" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill={sym === 'FDX' ? 'var(--sky-500)' : color} />
      {sym === 'FDX' ? (
        <g transform="translate(4.5 4.5) scale(0.72)">{FDX_MARK_PATHS}</g>
      ) : (
        <text x="16" y="16" dy=".35em" textAnchor="middle" fontSize="13" fontWeight="700" fill="#062a26">
          {sym[0]}
        </text>
      )}
    </svg>
  )
}

export default function CoinIcon({ sym, color, size = 28 }) {
  const src = ICONS[sym]
  if (!src) return <Fallback sym={sym} color={color} size={size} />
  return <img className="coin-icon" src={src} width={size} height={size} alt="" decoding="async" />
}
