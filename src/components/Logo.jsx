import { FDX_MARK_PATHS } from './fdxMark'

export default function Logo({ size = 28, wordmark = true }) {
  return (
    <span className="logo">
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="var(--sky-500)" />
        {FDX_MARK_PATHS}
      </svg>
      {wordmark && <span className="logo__word">FDX</span>}
    </span>
  )
}
