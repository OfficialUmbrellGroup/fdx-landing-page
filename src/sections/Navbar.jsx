import { useEffect, useState } from 'react'
import Icon from '../components/Icon'
import Logo from '../components/Logo'
import QrCode from '../components/QrCode'
import HeaderSearch from '../components/nav/HeaderSearch'
import MarketPanel from '../components/nav/MarketPanel'
import { CURRENCIES, LANGUAGES, NAV, menuItems } from '../lib/nav'

function Badge({ children }) {
  return <span className={`nbadge nbadge--${children.toLowerCase()}`}>{children}</span>
}

function DropItem({ item, compact }) {
  return (
    <a className={`drop__item ${compact ? 'drop__item--compact' : ''}`} href={item.href ?? '#products'}>
      <span className="drop__icon"><Icon name={item.icon} size={compact ? 16 : 18} /></span>
      <span className="drop__text">
        <strong>
          {item.title}
          {item.badge && <Badge>{item.badge}</Badge>}
        </strong>
        {!compact && item.body && <small>{item.body}</small>}
      </span>
      {item.arrow && <Icon name="chevronRight" size={16} className="drop__arrow" />}
    </a>
  )
}

function Featured({ featured }) {
  return (
    <div className="drop__feature">
      <p className="drop__label">{featured.title}</p>
      <ul>
        {featured.items.map((f) => (
          <li key={f.ticker}>
            <a href="#products">
              <span className="drop__ticker">{f.ticker}</span>
              <span className="drop__text">
                <strong>{f.name}</strong>
                <small>{f.meta}</small>
              </span>
              <span className="drop__yield">
                <b className="num">{f.yield}</b>
                <small>APY</small>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="drop__note"><Icon name="shield" size={14} /> {featured.note}</p>
      <a className="btn btn--primary btn--sm btn--block" href="#products">{featured.cta}</a>
    </div>
  )
}

function MegaMenu({ menu, markets }) {
  const align = menu.align ? `drop--${menu.align}` : ''

  if (menu.type === 'split') {
    return (
      <div className={`drop drop--split ${align}`}>
        <div className="drop__groups">
          {menu.groups.map((g) => (
            <div key={g.title}>
              <p className="drop__label">{g.title}</p>
              {g.items.map((item) => <DropItem key={item.title} item={item} />)}
            </div>
          ))}
        </div>
        <MarketPanel markets={markets} kind={menu.market} />
      </div>
    )
  }

  if (menu.type === 'columns') {
    return (
      <div
        className={`drop drop--cols ${menu.compact ? 'drop--compact' : ''} ${menu.featured ? 'drop--featured' : ''} ${align}`}
        style={{ '--cols': menu.columns.length }}
      >
        {menu.columns.map((col) => (
          <div key={col.title}>
            <p className="drop__label">{col.title}</p>
            {col.items.map((item) => <DropItem key={item.title} item={item} compact={menu.compact} />)}
          </div>
        ))}
        {menu.featured && <Featured featured={menu.featured} />}
      </div>
    )
  }

  return (
    <div className={`drop drop--list ${align}`}>
      {menu.header && (
        <a className="drop__head" href="#get-started">
          <span>{menu.header.label} <b>{menu.header.value}</b></span>
          <Icon name="chevronRight" size={16} />
        </a>
      )}
      {menu.items.map((item) => <DropItem key={item.title} item={item} />)}
    </div>
  )
}

function DownloadMenu() {
  return (
    <div className="nav__item has-drop hide-lg">
      <button className="icon-btn" aria-label="Download app" aria-haspopup="true">
        <Icon name="download" size={18} />
      </button>
      <div className="drop drop--right drop--download">
        <div className="drop__qr"><QrCode /></div>
        <p>Scan to download the FDX app</p>
        <small>iOS &amp; Android</small>
        <a className="btn btn--outline btn--sm btn--block" href="#app">More download options</a>
      </div>
    </div>
  )
}

function LocaleMenu({ lang, setLang, currency, setCurrency }) {
  return (
    <div className="nav__item has-drop hide-lg">
      <button className="icon-btn" aria-label="Language and currency" aria-haspopup="true">
        <Icon name="globe" size={18} />
      </button>
      <div className="drop drop--right drop--locale">
        <div>
          <p className="drop__label">Language</p>
          <ul>
            {LANGUAGES.map((l) => (
              <li key={l}>
                <button className={l === lang ? 'is-active' : ''} onClick={() => setLang(l)}>
                  {l} {l === lang && <Icon name="check" size={14} />}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="drop__label">Currency</p>
          <ul>
            {CURRENCIES.map((c) => (
              <li key={c}>
                <button className={c === currency ? 'is-active' : ''} onClick={() => setCurrency(c)}>
                  {c} {c === currency && <Icon name="check" size={14} />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Navbar({ markets }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState('English')
  const [currency, setCurrency] = useState('USD')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)
  const nav = NAV.map((m) => (m.header ? { ...m, header: { ...m.header, value: currency } } : m))

  return (
    <>
      <header className={`nav dark ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <a href="#top" className="nav__brand" aria-label="FDX home" onClick={close}>
            <Logo />
          </a>

          <nav className="nav__menu" aria-label="Primary">
            {nav.map((menu) =>
              menu.type ? (
                <div className="nav__item has-drop" key={menu.label}>
                  <button className="nav__link" aria-haspopup="true">
                    {menu.label}
                    {menu.badge && <Badge>{menu.badge}</Badge>}
                    <Icon name="chevronDown" size={14} />
                  </button>
                  <MegaMenu menu={menu} markets={markets} />
                </div>
              ) : (
                <a className="nav__link" href={menu.href} key={menu.label}>{menu.label}</a>
              ),
            )}
          </nav>

          <div className="nav__actions">
            <HeaderSearch markets={markets} />
            <button className="icon-btn nav__search-btn hide-sm" aria-label="Search"><Icon name="search" size={18} /></button>
            <a className="nav__login" href="#get-started">Log In</a>
            <a className="btn btn--primary btn--sm" href="#get-started">Sign Up</a>
            <DownloadMenu />
            <LocaleMenu lang={lang} setLang={setLang} currency={currency} setCurrency={setCurrency} />
            <button
              className="icon-btn nav__burger"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <Icon name={open ? 'close' : 'menu'} size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer dark ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="drawer__top">
          <Logo />
          <button className="icon-btn" aria-label="Close menu" onClick={close}>
            <Icon name="close" size={20} />
          </button>
        </div>
        <div className="drawer__body">
          <div className="drawer__cta">
            <a className="btn btn--ghost btn--block" href="#get-started" onClick={close}>Log In</a>
            <a className="btn btn--primary btn--block" href="#get-started" onClick={close}>Sign Up</a>
          </div>
          {nav.map((menu) =>
            menu.type ? (
              <details className="drawer__group" key={menu.label}>
                <summary>
                  <span>{menu.label}{menu.badge && <Badge>{menu.badge}</Badge>}</span>
                  <Icon name="chevronDown" size={16} />
                </summary>
                {(menu.groups ?? menu.columns ?? [{ title: null, items: menuItems(menu) }]).map((g) => (
                  <div className="drawer__sub" key={g.title ?? 'all'}>
                    {g.title && <p className="drop__label">{g.title}</p>}
                    {g.items.map((item) => (
                      <a href={item.href ?? '#products'} key={item.title} onClick={close}>
                        <Icon name={item.icon} size={18} />
                        {item.title}
                        {item.badge && <Badge>{item.badge}</Badge>}
                      </a>
                    ))}
                  </div>
                ))}
              </details>
            ) : (
              <a className="drawer__link" href={menu.href} key={menu.label} onClick={close}>{menu.label}</a>
            ),
          )}
          <div className="drawer__prefs">
            <label>
              <Icon name="globe" size={18} />
              <select value={lang} onChange={(e) => setLang(e.target.value)} aria-label="Language">
                {LANGUAGES.map((l) => <option key={l}>{l}</option>)}
              </select>
            </label>
            <label>
              <Icon name="coins" size={18} />
              <select value={currency} onChange={(e) => setCurrency(e.target.value)} aria-label="Currency">
                {CURRENCIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </label>
            <a href="#app" onClick={close}><Icon name="download" size={18} /> Download app</a>
          </div>
        </div>
      </div>
    </>
  )
}
