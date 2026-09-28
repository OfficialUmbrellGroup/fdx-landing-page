import { useId, useState } from 'react'
import Icon from './Icon'

export default function SignupForm({ compact = false }) {
  const id = useId()
  const [value, setValue] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (value.trim()) setDone(true)
  }

  if (done) {
    return (
      <div className="signup signup--done" role="status">
        <Icon name="check" size={18} /> Check your inbox to finish creating your FDX account.
      </div>
    )
  }

  return (
    <form className={`signup ${compact ? 'signup--compact' : ''}`} onSubmit={submit}>
      <label className="visually-hidden" htmlFor={id}>Email or phone number</label>
      <input
        id={id}
        type="text"
        inputMode="email"
        autoComplete="email"
        placeholder="Email / Phone number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn btn--primary" type="submit">
        Sign Up <Icon name="arrowRight" size={16} />
      </button>
    </form>
  )
}
