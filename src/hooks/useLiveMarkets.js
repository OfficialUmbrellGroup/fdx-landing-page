import { useEffect, useState } from 'react'
import { hashString, makeSeries } from '../lib/format'

const TICK_MS = 1600

function init(coins) {
  return coins.map((coin) => {
    const open = coin.price / (1 + coin.change / 100)
    return {
      ...coin,
      open,
      high: Math.max(coin.price, open) * 1.018,
      low: Math.min(coin.price, open) * 0.984,
      spark: makeSeries(hashString(coin.sym), coin.price, coin.change),
      flash: null,
    }
  })
}

/** Simulated real-time feed: nudges prices on an interval and flags up/down ticks. */
export function useLiveMarkets(coins) {
  const [markets, setMarkets] = useState(() => init(coins))

  useEffect(() => {
    const id = setInterval(() => {
      setMarkets((prev) =>
        prev.map((coin) => {
          if (Math.random() < 0.55) return coin.flash ? { ...coin, flash: null } : coin
          const price = coin.price * (1 + (Math.random() - 0.48) * 0.0035)
          return {
            ...coin,
            price,
            change: (price / coin.open - 1) * 100,
            high: Math.max(coin.high, price),
            low: Math.min(coin.low, price),
            spark: [...coin.spark.slice(1), price],
            flash: price >= coin.price ? 'up' : 'down',
          }
        }),
      )
    }, TICK_MS)
    return () => clearInterval(id)
  }, [])

  return markets
}
