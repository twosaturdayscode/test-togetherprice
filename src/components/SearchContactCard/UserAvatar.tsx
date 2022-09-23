import { useEffect, useRef } from 'react'

interface IUserAvatar {
  trust_value: number
  propic?: string
}

export default function UserAvatar({ trust_value }: IUserAvatar) {
  const circularProgress = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const violetValue = trust_value < 50 ? `${trust_value * 3.6}deg` : '180deg'
    const pinkValue = trust_value > 50 ? `${trust_value * 3.6}deg` : '0deg'
    if (circularProgress.current) {
      circularProgress.current.style.background = `conic-gradient(#7864f6ab ${violetValue}, #fa5d75 ${pinkValue}, #fff 0deg)`
    }
  }, [trust_value, circularProgress])

  return (
    <div className="user-avatar-container">
      <div className="circular-progress" ref={circularProgress}>
        <div className="user-avatar-propic"></div>
        <span className="user-avatar-trust-indicator">{trust_value}</span>
      </div>
    </div>
  )
}
