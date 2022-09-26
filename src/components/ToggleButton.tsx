import { useState } from 'react'

export default function ToggleButton() {
  const [checked, setChecked] = useState(false)

  const styles = {
    on: { backgroundColor: 'transparent', borderColor: '#66BB6A' },
    off: { backgroundColor: '#EAE8FE', borderColor: '#835BF9' },
  }

  return (
    <button
      onClick={() => setChecked(!checked)}
      className="toggle-btn-container"
      style={checked ? styles.on : styles.off}
    >
      <span>
        {checked ? (
          <svg
            width="20"
            height="13"
            viewBox="0 0 20 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.36364 10.2836L1.59091 6.20896L0 7.56716L6.36364 13L20 1.35821L18.4091 0L6.36364 10.2836Z"
              fill="#66BB6A"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#794BFF"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        )}
      </span>
    </button>
  )
}
