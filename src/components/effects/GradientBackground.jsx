import { useEffect, useRef } from 'react'

export default function GradientBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      ref.current.style.background = `
        radial-gradient(circle at ${x}% ${y}%, rgba(37, 99, 235, 0.04) 0%, transparent 45%),
        radial-gradient(circle at ${100 - x}% ${100 - y}%, rgba(56, 189, 248, 0.03) 0%, transparent 45%)
      `
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000"
      aria-hidden="true"
    />
  )
}
