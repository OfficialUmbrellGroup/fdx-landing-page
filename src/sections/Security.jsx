import Icon from '../components/Icon'
import { RESERVES, SECURITY_POINTS } from '../lib/data'

export default function Security() {
  return (
    <section className="section dark" id="security">
      <div className="container">
        <div className="security">
          <div className="security__intro" data-reveal>
            <p className="eyebrow">Security</p>
            <h2>Your assets are held 1:1. We prove it every month.</h2>
            <p className="lede">
              Customer balances are never lent or rehypothecated. Reserves are verified with Merkle-tree
              and zk-SNARK proofs, so you can confirm your own balance is included.
            </p>
            <a className="link-more" href="#faq">Verify your balance <Icon name="arrowRight" size={16} /></a>
          </div>

          <div className="por" data-reveal>
            <div className="por__head">
              <div>
                <small>Total reserve ratio</small>
                <strong className="num">138%</strong>
              </div>
              <span className="por__date">Snapshot 01 Sep 2026 · Audited</span>
            </div>
            <table className="por__table">
              <thead>
                <tr><th scope="col">Asset</th><th scope="col" className="r">Customer balances</th><th scope="col" className="r">FDX reserves</th><th scope="col" className="r">Ratio</th></tr>
              </thead>
              <tbody>
                {RESERVES.map((r) => (
                  <tr key={r.sym}>
                    <td>{r.sym}</td>
                    <td className="r num">{r.user}</td>
                    <td className="r num">{r.held}</td>
                    <td className="r num"><span className="por__ratio">{r.ratio}%</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <ul className="pillars">
          {SECURITY_POINTS.map((s) => (
            <li key={s.title} data-reveal>
              <Icon name={s.icon} size={24} strokeWidth={1.5} />
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
