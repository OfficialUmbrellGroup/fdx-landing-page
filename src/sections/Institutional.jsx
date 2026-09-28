import Icon from '../components/Icon'
import { INSTITUTIONAL, VIP_TIERS } from '../lib/data'

export default function Institutional() {
  return (
    <section className="section section--alt" id="institutional">
      <div className="container">
        <div className="section__head section__head--row" data-reveal>
          <div>
            <p className="eyebrow">Institutional &amp; VIP</p>
            <h2>Liquidity and service for professional volume</h2>
            <p className="lede">
              Funds, market makers, brokers and high-volume traders get tailored liquidity, lower fees
              and a dedicated account team.
            </p>
          </div>
          <a className="btn btn--ghost" href="#get-started">
            Contact institutional sales <Icon name="arrowRight" size={16} />
          </a>
        </div>

        <div className="inst">
          <div className="inst__grid">
            {INSTITUTIONAL.map((s) => (
              <article className="inst__card" key={s.title} data-reveal>
                <Icon name={s.icon} size={22} strokeWidth={1.5} />
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>

          <div className="vip" data-reveal>
            <div className="vip__head">
              <h3>Spot VIP fee schedule</h3>
              <span>Pay fees in FDX for an extra 25% off</span>
            </div>
            <div className="table-wrap">
              <table className="vtable">
                <thead>
                  <tr>
                    <th scope="col">Tier</th>
                    <th scope="col">30D volume</th>
                    <th scope="col" className="hide-sm">or FDX balance</th>
                    <th scope="col" className="r">Maker</th>
                    <th scope="col" className="r">Taker</th>
                  </tr>
                </thead>
                <tbody>
                  {VIP_TIERS.map((v) => (
                    <tr key={v.tier}>
                      <td><span className="vip__tier">{v.tier}</span></td>
                      <td className="num">{v.vol}</td>
                      <td className="num hide-sm">{v.holding}</td>
                      <td className="r num">{v.maker}</td>
                      <td className="r num">{v.taker}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
