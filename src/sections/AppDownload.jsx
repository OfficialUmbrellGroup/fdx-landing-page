import CoinIcon from '../components/CoinIcon'
import Icon from '../components/Icon'
import Logo from '../components/Logo'
import QrCode from '../components/QrCode'
import Sparkline from '../components/Sparkline'
import { formatChange, formatPrice } from '../lib/format'

export default function AppDownload({ markets }) {
  const top = markets.slice(0, 4)
  return (
    <section className="section dark" id="app">
      <div className="container app">
        <div className="phone" data-reveal aria-hidden="true">
          <div className="phone__screen">
            <div className="phone__top">
              <Logo size={22} />
              <Icon name="bell" size={16} />
            </div>
            <div className="phone__balance">
              <small>Total balance</small>
              <strong className="num">$24,806.19</strong>
              <span className="up num">+$1,204.55 (5.10%) today</span>
            </div>
            <div className="phone__actions">
              {[['plus', 'Deposit'], ['swap', 'Convert'], ['users', 'Copy'], ['coins', 'Earn']].map(([icon, label]) => (
                <span key={label}><i><Icon name={icon} size={16} /></i>{label}</span>
              ))}
            </div>
            <ul className="phone__list">
              {top.map((c) => (
                <li key={c.sym}>
                  <CoinIcon sym={c.sym} color={c.color} size={24} />
                  <span><b>{c.sym}</b><small>{c.name}</small></span>
                  <Sparkline data={c.spark} up={c.change >= 0} width={48} height={20} fill={false} />
                  <span className="r"><b className="num">{formatPrice(c.price)}</b><small className={`num ${c.change >= 0 ? 'up' : 'down'}`}>{formatChange(c.change)}</small></span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="app__copy" data-reveal>
          <p className="eyebrow">FDX App</p>
          <h2>Trade anytime, anywhere</h2>
          <p className="lede">
            The full exchange in your pocket. Real-time alerts, one-tap trading and biometric
            security on iOS, Android, macOS and Windows.
          </p>

          <div className="app__row">
            <div className="app__qr">
              <QrCode />
              <span>Scan to download<br /><strong>iOS &amp; Android</strong></span>
            </div>
            <div className="stores">
              <a className="store" href="#app">
                <Icon name="apple" size={22} />
                <span><small>Download on the</small>App Store</span>
              </a>
              <a className="store" href="#app">
                <Icon name="googlePlay" size={20} />
                <span><small>Get it on</small>Google Play</span>
              </a>
              <a className="store" href="#app">
                <Icon name="monitor" size={20} />
                <span><small>Download for</small>Desktop</span>
              </a>
            </div>
          </div>

          <div className="rating">
            <span className="rating__stars">{Array.from({ length: 5 }, (_, i) => <Icon key={i} name="star" size={16} />)}</span>
            <span><strong>4.8</strong> from 1.2M+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
