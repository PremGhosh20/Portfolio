import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export function useLenis() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenisRef.current = lenis
    window.__lenis = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const lock = () => lenis.stop()
    const unlock = () => lenis.start()
    window.addEventListener('portfolio:scroll-lock', lock)
    window.addEventListener('portfolio:scroll-unlock', unlock)

    return () => {
      window.removeEventListener('portfolio:scroll-lock', lock)
      window.removeEventListener('portfolio:scroll-unlock', unlock)
      if (window.__lenis === lenis) delete window.__lenis
      lenis.destroy()
    }
  }, [])

  const scrollTo = (target) => {
    lenisRef.current?.scrollTo(target, { offset: -80 })
  }

  return { scrollTo }
}
