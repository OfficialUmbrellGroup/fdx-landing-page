import { useLiveMarkets } from './hooks/useLiveMarkets'
import { useReveal } from './hooks/useReveal'
import { COINS } from './lib/data'
import AppDownload from './sections/AppDownload'
import Faq from './sections/Faq'
import Features from './sections/Features'
import FinalCta from './sections/FinalCta'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Institutional from './sections/Institutional'
import Markets from './sections/Markets'
import Navbar from './sections/Navbar'
import Security from './sections/Security'
import Ticker from './sections/Ticker'
import TrustBar from './sections/TrustBar'
import './App.css'

export default function App() {
  const markets = useLiveMarkets(COINS)
  const btc = markets[0]
  useReveal()

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar markets={markets} />
      <main id="main">
        <Hero btc={btc} />
        <Ticker markets={markets} />
        <TrustBar />
        <Markets markets={markets} />
        <Features btc={btc} />
        <Security />
        <Institutional />
        <Faq />
        <AppDownload markets={markets} />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
