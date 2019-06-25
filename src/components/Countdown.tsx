import { memo, useState, useRef, useEffect } from 'react'
import { useInterval } from '../hooks'

interface CountdownProps {
  active: boolean
  time: number
  timeout?: number
  onTick?: (t: number) => void
  onFinish: () => void
  stop?: boolean
}

const Component = ({
  active = false,
  time = 0,
  timeout = 1000,
  onTick = () => null,
  onFinish = () => null,
  stop = false,
}: CountdownProps) => {
  const [elapsedTime, setElapsedTime] = useState(0)
  const remainingTime = time - elapsedTime / 1000
  const isActive = active && remainingTime > 0 ? timeout : null

  useInterval(() => {
    if (!stop) {
      onTick(Math.max(remainingTime - timeout / 1000, 0))
      setElapsedTime(elapsedTime + timeout)
    }
  }, isActive)

  const hasFinished = useRef(false)
  useEffect(() => {
    if (isActive === null) {
      hasFinished.current || onFinish()
      hasFinished.current = true
    }
  }, [isActive])

  return null
}

export const Countdown = memo(Component)
