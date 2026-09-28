import Icon from '../components/Icon'
import { CERTIFICATIONS, TRUST_STATS } from '../lib/data'

export default function TrustBar() {
  return (
    <section className="trust dark" aria-label="FDX at a glance">
      <div className="container">
        <dl className="trust__stats">
          {TRUST_STATS.map((s) => (
            <div key={s.label}>
              <dd className="num">{s.value}</dd>
              <dt>{s.label}</dt>
            </div>
          ))}
        </dl>
        <div className="trust__certs">
          <span>Independently certified</span>
          <ul>
            {CERTIFICATIONS.map((c) => (
              <li key={c}><Icon name="shield" size={15} /> {c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
