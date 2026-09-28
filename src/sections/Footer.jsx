import Icon from '../components/Icon'
import Logo from '../components/Logo'
import { FOOTER_COLS } from '../lib/data'

const SOCIALS = [
  { icon: 'x', label: 'X (Twitter)' },
  { icon: 'telegram', label: 'Telegram' },
  { icon: 'discord', label: 'Discord' },
  { icon: 'youtube', label: 'YouTube' },
  { icon: 'instagram', label: 'Instagram' },
  { icon: 'facebook', label: 'Facebook' },
  { icon: 'linkedin', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="footer dark">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p>The tier-one exchange for trading, earning and building your crypto future.</p>
            <div className="footer__socials">
              {SOCIALS.map((s) => (
                <a key={s.icon} href="#top" aria-label={s.label}><Icon name={s.icon} size={18} /></a>
              ))}
            </div>
            <button className="footer__lang"><Icon name="globe" size={16} /> English / USD <Icon name="chevronDown" size={14} /></button>
          </div>
          {FOOTER_COLS.map((col) => (
            <nav className="footer__col" key={col.title} aria-label={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((l) => <li key={l}><a href="#top">{l}</a></li>)}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__risk">
            <strong>Risk warning:</strong> Digital asset prices are volatile and may go down as well as up.
            You may lose all of your investment. Leveraged products carry a high level of risk and are not
            suitable for all investors. Services may be restricted in certain jurisdictions. Figures shown
            on this page are illustrative.
          </p>
          <div className="footer__legal">
            <span>© 2026 FDX. All rights reserved.</span>
            <span>
              <a href="#top">Terms</a>
              <a href="#top">Privacy</a>
              <a href="#top">Cookies</a>
              <a href="#top">Licenses</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
