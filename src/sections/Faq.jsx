import { useState } from 'react'
import Icon from '../components/Icon'
import { FAQS } from '../lib/data'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="faq">
      <div className="container faq">
        <div className="faq__intro" data-reveal>
          <p className="eyebrow">FAQ</p>
          <h2>Frequently asked questions</h2>
          <p className="lede">Can’t find what you’re looking for? Our support team is available 24/7 in 40+ languages.</p>
          <a className="btn btn--ghost" href="#faq"><Icon name="headset" size={18} /> Chat with support</a>
        </div>

        <div className="faq__list" data-reveal>
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={f.q}>
                <h3>
                  <button
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="faq__n num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="faq__q">{f.q}</span>
                    <Icon name="plus" size={20} className="faq__toggle" />
                  </button>
                </h3>
                <div className="faq__a" id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                  <div><p>{f.a}</p></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
