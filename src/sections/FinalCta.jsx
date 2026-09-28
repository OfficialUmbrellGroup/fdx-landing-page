import SignupForm from '../components/SignupForm'

export default function FinalCta() {
  return (
    <section className="cta" id="get-started">
      <div className="container">
        <div className="cta__card" data-reveal>
          <div className="cta__copy">
            <h2>Start trading on FDX</h2>
            <p>Open an account in minutes. New users can unlock up to 5,000 USDT in trading rewards.</p>
          </div>
          <SignupForm compact />
        </div>
      </div>
    </section>
  )
}
