import { useEffect, useState, useRef } from 'react'

export function useCounter(end, duration = 2000, decimals = 0) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = performance.now()

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = eased * end
            setCount(decimals > 0 ? current.toFixed(decimals) : Math.floor(current))

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(decimals > 0 ? end.toFixed(decimals) : end)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, decimals])

  return [count, ref]
}
